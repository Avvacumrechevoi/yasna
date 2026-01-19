"use client";

import * as React from "react";
import Image from "next/image";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isWithinInterval,
  parseISO,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { ru } from "date-fns/locale";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Copy,
  Link2,
  MapPin,
  Share2,
  Ticket,
} from "lucide-react";

import { EventCard } from "@/components/events/EventCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { eventsData, type EventItem, type EventTag } from "@/lib/events-data";
import { slideInRight, staggerChildren } from "@/lib/animation-variants";

type TimeFilter = "all" | "week" | "month";

type ViewMode = "list" | "calendar";

const timeFilters: { id: TimeFilter; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "week", label: "Эта неделя" },
  { id: "month", label: "Этот месяц" },
];

const locationOptions = ["Все", "Онлайн", "Москва", "Санкт-Петербург"];

const tagOptions: EventTag[] = ["Бесплатно", "Для новичков", "С детьми", "Платно"];

const formatEventDate = (date: string) =>
  format(parseISO(date), "d MMMM", { locale: ru });

export function EventsCalendarSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTime, setActiveTime] = React.useState<TimeFilter>("all");
  const [activeDirection, setActiveDirection] = React.useState("Все");
  const [activeLocation, setActiveLocation] = React.useState("Все");
  const [activeTag, setActiveTag] = React.useState<EventTag | "Все">("Все");
  const [viewMode, setViewMode] = React.useState<ViewMode>("list");
  const [pageSize, setPageSize] = React.useState(6);
  const [selectedEvent, setSelectedEvent] = React.useState<EventItem | null>(null);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [monthCursor, setMonthCursor] = React.useState(() => new Date());
  const [showRegistration, setShowRegistration] = React.useState(false);
  const [registeredState, setRegisteredState] = React.useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = React.useState(false);
  const modalTouchStartY = React.useRef<number | null>(null);
  const modalTouchCurrentY = React.useRef<number | null>(null);

  const directions = React.useMemo(() => {
    const unique = Array.from(new Set(eventsData.map((event) => event.direction)));
    return ["Все", ...unique];
  }, []);

  const filteredEvents = React.useMemo(() => {
    const now = new Date();
    return eventsData.filter((event) => {
      const eventDate = parseISO(event.date);
      const inTimeRange =
        activeTime === "all"
          ? true
          : activeTime === "week"
          ? isWithinInterval(eventDate, {
              start: startOfWeek(now, { weekStartsOn: 1 }),
              end: endOfWeek(now, { weekStartsOn: 1 }),
            })
          : isWithinInterval(eventDate, {
              start: startOfMonth(now),
              end: endOfMonth(now),
            });

      const inDirection =
        activeDirection === "Все" ? true : event.direction === activeDirection;
      const inLocation =
        activeLocation === "Все"
          ? true
          : event.location.toLowerCase().includes(activeLocation.toLowerCase());
      const inTag = activeTag === "Все" ? true : event.tags.includes(activeTag);

      return inTimeRange && inDirection && inLocation && inTag;
    });
  }, [activeDirection, activeLocation, activeTag, activeTime]);

  const visibleEvents = React.useMemo(
    () => filteredEvents.slice(0, pageSize),
    [filteredEvents, pageSize]
  );

  const monthDays = React.useMemo(() => {
    const start = startOfWeek(startOfMonth(monthCursor), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(monthCursor), { weekStartsOn: 1 });
    return eachDayOfInterval({ start, end });
  }, [monthCursor]);

  const eventsByDate = React.useMemo(() => {
    return eventsData.reduce<Record<string, EventItem[]>>((acc, event) => {
      acc[event.date] = acc[event.date] ? [...acc[event.date], event] : [event];
      return acc;
    }, {});
  }, []);

  const monthKey = format(monthCursor, "yyyy-MM");

  const activeFilterCount = React.useMemo(() => {
    let count = 0;
    if (activeTime !== "all") count += 1;
    if (activeDirection !== "Все") count += 1;
    if (activeLocation !== "Все") count += 1;
    if (activeTag !== "Все") count += 1;
    return count;
  }, [activeDirection, activeLocation, activeTag, activeTime]);

  const resetFilters = React.useCallback(() => {
    setActiveTime("all");
    setActiveDirection("Все");
    setActiveLocation("Все");
    setActiveTag("Все");
  }, []);

  const dayEvents = React.useMemo(() => {
    if (!selectedDate) return [];
    const key = format(selectedDate, "yyyy-MM-dd");
    return eventsByDate[key] ?? [];
  }, [eventsByDate, selectedDate]);

  const handleShare = async (link?: string) => {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
    } catch {
      window.open(link, "_blank");
    }
  };

  const handleEventOpen = (event: EventItem) => {
    setSelectedEvent(event);
    setShowRegistration(false);
    setRegisteredState(false);
  };

  const handleRegistration = () => {
    if (selectedEvent?.link) {
      window.open(selectedEvent.link, "_blank");
      return;
    }
    setShowRegistration(true);
  };

  const handleRegisterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRegisteredState(true);
  };

  const handleAddToCalendar = (event: EventItem) => {
    const date = `${event.date.replace(/-/g, "")}T${event.time.replace(":", "")}00`;
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `SUMMARY:${event.title}`,
      `DTSTART:${date}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${event.id}.ics`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const handleModalTouchStart = React.useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    modalTouchStartY.current = event.touches[0]?.clientY ?? null;
    modalTouchCurrentY.current = modalTouchStartY.current;
  }, []);

  const handleModalTouchMove = React.useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    modalTouchCurrentY.current = event.touches[0]?.clientY ?? null;
  }, []);

  const handleModalTouchEnd = React.useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      if (modalTouchStartY.current === null || modalTouchCurrentY.current === null) return;
      const deltaY = modalTouchCurrentY.current - modalTouchStartY.current;
      if (deltaY > 90 && event.currentTarget.scrollTop <= 0) {
        setSelectedEvent(null);
      }
      modalTouchStartY.current = null;
      modalTouchCurrentY.current = null;
    },
    []
  );

  return (
    <section id="events" className="bg-gradient-to-b from-white via-[#F6F8FE] to-background px-4 py-20 md:px-8">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="text-center">
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-primary">
            Ближайшие события
          </h2>
          <p className="mt-3 text-text/70">Открытые встречи, натурные уроки, праздники</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between md:hidden">
            <button
              type="button"
              onClick={() => setIsFiltersOpen(true)}
              className="min-h-[44px] rounded-full border border-primary-100 bg-white px-4 text-sm font-medium text-text transition-colors hover:bg-primary-50"
            >
              Фильтры{activeFilterCount ? ` (${activeFilterCount})` : ""}
            </button>
            <div className="text-xs text-text/60">Найдено {filteredEvents.length}</div>
          </div>

          <div className="hidden flex-wrap items-center gap-3 md:flex">
            {timeFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveTime(filter.id)}
                className={cn(
                  "min-h-[44px] rounded-full px-4 py-2 text-sm font-medium transition-colors transition-transform hover:scale-[1.02] active:scale-95",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                  activeTime === filter.id
                    ? "bg-primary text-white"
                    : "bg-primary-50 text-text/70 hover:bg-primary-100"
                )}
              >
                {filter.label}
              </button>
            ))}

            <div className="ml-auto flex items-center gap-2 text-sm text-text/60">
              Найдено {filteredEvents.length} событий
            </div>
          </div>

          <div className="hidden flex-wrap items-center gap-3 md:flex">
            <div className="flex flex-wrap gap-2">
              {directions.map((direction) => (
                <button
                  key={direction}
                  type="button"
                  onClick={() => setActiveDirection(direction)}
                  className={cn(
                    "min-h-[44px] rounded-full px-3 py-1.5 text-xs font-medium transition-colors transition-transform hover:scale-[1.02] active:scale-95",
                    activeDirection === direction
                      ? "bg-secondary text-white"
                      : "bg-secondary-50 text-text/70 hover:bg-secondary-100"
                  )}
                >
                  {direction}
                </button>
              ))}
            </div>

            <select
              value={activeLocation}
              onChange={(event) => setActiveLocation(event.target.value)}
              className="min-h-[44px] rounded-full border border-primary-100 bg-white px-4 py-2 text-xs text-text/70"
              aria-label="Фильтр по локации"
            >
              {locationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={activeTag}
              onChange={(event) => setActiveTag(event.target.value as EventTag | "Все")}
              className="min-h-[44px] rounded-full border border-primary-100 bg-white px-4 py-2 text-xs text-text/70"
              aria-label="Фильтр по тегу"
            >
              <option value="Все">Все теги</option>
              {tagOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <div className="ml-auto flex min-h-[44px] rounded-full border border-primary-100 bg-white p-1 text-xs">
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={cn(
                  "rounded-full px-3 py-1.5 transition-transform hover:scale-[1.02] active:scale-95",
                  viewMode === "list" ? "bg-primary text-white" : "text-text/60"
                )}
              >
                Список
              </button>
              <button
                type="button"
                onClick={() => setViewMode("calendar")}
                className={cn(
                  "rounded-full px-3 py-1.5 transition-transform hover:scale-[1.02] active:scale-95",
                  viewMode === "calendar" ? "bg-primary text-white" : "text-text/60"
                )}
              >
                Календарь
              </button>
            </div>
          </div>

          <div className="flex justify-end md:hidden">
            <div className="flex min-h-[44px] rounded-full border border-primary-100 bg-white p-1 text-xs">
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={cn(
                  "rounded-full px-3 py-1.5 transition-transform hover:scale-[1.02] active:scale-95",
                  viewMode === "list" ? "bg-primary text-white" : "text-text/60"
                )}
              >
                Список
              </button>
              <button
                type="button"
                onClick={() => setViewMode("calendar")}
                className={cn(
                  "rounded-full px-3 py-1.5 transition-transform hover:scale-[1.02] active:scale-95",
                  viewMode === "calendar" ? "bg-primary text-white" : "text-text/60"
                )}
              >
                Календарь
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isFiltersOpen ? (
            <motion.div
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFiltersOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label="Фильтры событий"
            >
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="safe-bottom absolute bottom-0 left-0 right-0 rounded-t-3xl bg-background px-6 pb-8 pt-6"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-text">Фильтры</p>
                  <button
                    type="button"
                    onClick={() => setIsFiltersOpen(false)}
                    className="min-h-[44px] min-w-[44px] rounded-full border border-primary-100 text-text"
                    aria-label="Закрыть фильтры"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-text">Период</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {timeFilters.map((filter) => (
                        <button
                          key={filter.id}
                          type="button"
                          onClick={() => setActiveTime(filter.id)}
                          className={cn(
                            "min-h-[44px] rounded-full px-4 text-sm font-medium transition-colors",
                            activeTime === filter.id
                              ? "bg-primary text-white"
                              : "bg-primary-50 text-text/70"
                          )}
                        >
                          {filter.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text">Направления</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {directions.map((direction) => (
                        <button
                          key={direction}
                          type="button"
                          onClick={() => setActiveDirection(direction)}
                          className={cn(
                            "min-h-[44px] rounded-full px-3 text-xs font-medium transition-colors",
                            activeDirection === direction
                              ? "bg-secondary text-white"
                              : "bg-secondary-50 text-text/70"
                          )}
                        >
                          {direction}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text">Локация</p>
                    <select
                      value={activeLocation}
                      onChange={(event) => setActiveLocation(event.target.value)}
                      className="mt-3 min-h-[44px] w-full rounded-xl border border-primary-100 bg-white px-4 text-sm text-text/70"
                      aria-label="Фильтр по локации"
                    >
                      {locationOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text">Теги</p>
                    <select
                      value={activeTag}
                      onChange={(event) => setActiveTag(event.target.value as EventTag | "Все")}
                      className="mt-3 min-h-[44px] w-full rounded-xl border border-primary-100 bg-white px-4 text-sm text-text/70"
                      aria-label="Фильтр по тегу"
                    >
                      <option value="Все">Все теги</option>
                      {tagOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button
                    type="button"
                    variant="secondary"
                    className="min-h-[44px] flex-1"
                    onClick={resetFilters}
                  >
                    Сбросить
                  </Button>
                  <Button
                    type="button"
                    className="min-h-[44px] flex-1"
                    onClick={() => setIsFiltersOpen(false)}
                  >
                    Применить
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {viewMode === "list" ? (
          <>
            {filteredEvents.length ? (
              <motion.div
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerChildren(shouldReduceMotion)}
                className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
              >
                {visibleEvents.map((event) => (
                  <motion.div key={event.id} variants={slideInRight({ reduceMotion: shouldReduceMotion })}>
                    <EventCard
                      event={event}
                      onOpen={handleEventOpen}
                      onDirectionClick={(direction) => setActiveDirection(direction)}
                      onTagClick={(tag) => setActiveTag(tag as EventTag)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="rounded-2xl border border-primary-100 bg-primary-50 px-6 py-10 text-center text-sm text-text/70">
                В выбранном периоде нет событий. Посмотрите события в других направлениях.
              </div>
            )}

            {filteredEvents.length > pageSize ? (
              <div className="flex justify-center">
                <Button type="button" variant="secondary" onClick={() => setPageSize((prev) => prev + 6)}>
                  Загрузить ещё
                </Button>
              </div>
            ) : null}
          </>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <motion.div
              key={monthKey}
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -16 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeOut" }}
              className="rounded-2xl border border-primary-100 bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setMonthCursor((prev) => addMonths(prev, -1))}
                  className="min-h-[44px] min-w-[44px] rounded-full border border-primary-100 p-2 text-text/60 hover:bg-primary-50"
                  aria-label="Предыдущий месяц"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <div className="text-sm font-semibold text-text">
                  {format(monthCursor, "LLLL yyyy", { locale: ru })}
                </div>
                <button
                  type="button"
                  onClick={() => setMonthCursor((prev) => addMonths(prev, 1))}
                  className="min-h-[44px] min-w-[44px] rounded-full border border-primary-100 p-2 text-text/60 hover:bg-primary-50"
                  aria-label="Следующий месяц"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-7 gap-2 text-xs text-text/60">
                {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
                  <div key={day} className="text-center">
                    {day}
                  </div>
                ))}
              </div>

              <div className="mt-2 grid grid-cols-7 gap-2">
                {monthDays.map((day) => {
                  const key = format(day, "yyyy-MM-dd");
                  const events = eventsByDate[key] ?? [];
                  const isCurrentMonth = isSameMonth(day, monthCursor);
                  const isToday = isSameDay(day, new Date());
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedDate(day)}
                      className={cn(
                        "ripple-center flex h-14 flex-col items-center justify-center rounded-lg border text-xs transition-colors transition-transform active:scale-95",
                        isCurrentMonth ? "border-primary-100 bg-white" : "border-transparent bg-primary-50/60 text-text/40",
                        isToday ? "border-primary text-primary" : "",
                        selectedDate && isSameDay(day, selectedDate) ? "bg-primary-50" : ""
                      )}
                      aria-label={`Дата ${format(day, "d MMMM", { locale: ru })}`}
                    >
                      <span>{format(day, "d")}</span>
                      <span className="mt-1 flex gap-1">
                        {events.slice(0, 3).map((eventItem) => (
                          <span
                            key={`${key}-${eventItem.id}`}
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: eventItem.directionColor }}
                          />
                        ))}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            <div className="rounded-2xl border border-primary-100 bg-white p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-text">
                <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
                {selectedDate ? format(selectedDate, "d MMMM", { locale: ru }) : "Выберите дату"}
              </div>
              <div className="mt-4 space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedDate ? format(selectedDate, "yyyy-MM-dd") : "empty"}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -12 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeOut" }}
                    className="space-y-4"
                  >
                    {dayEvents.length ? (
                      dayEvents.map((event) => (
                        <button
                          key={event.id}
                          type="button"
                          onClick={() => handleEventOpen(event)}
                          className="min-h-[44px] w-full rounded-xl border border-primary-100 px-4 py-3 text-left text-sm transition-colors hover:bg-primary-50"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-text">{event.title}</span>
                            <span className="text-xs text-text/60">{event.time}</span>
                          </div>
                          <p className="mt-1 text-xs text-text/60">{event.location}</p>
                        </button>
                      ))
                    ) : (
                      <p className="text-sm text-text/60">
                        На выбранную дату событий нет.
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center gap-3 text-center">
          <Button type="button" variant="secondary" onClick={() => window.open("https://example.com", "_blank")}>
            Смотреть полное расписание
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {selectedEvent ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 px-0 py-0 sm:items-center sm:px-4 sm:py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="h-full w-full overflow-y-auto bg-white p-6 shadow-xl sm:max-h-[90vh] sm:max-w-3xl sm:rounded-2xl"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={handleModalTouchStart}
              onTouchMove={handleModalTouchMove}
              onTouchEnd={handleModalTouchEnd}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className="inline-flex rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: `${selectedEvent.directionColor}1A`,
                      color: selectedEvent.directionColor,
                    }}
                  >
                    {selectedEvent.direction}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold text-text">{selectedEvent.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="min-h-[44px] min-w-[44px] rounded-full border border-primary-100 px-3 py-1 text-sm text-text/60 hover:bg-primary-50"
                >
                  Закрыть
                </button>
              </div>

              <div className="mt-4 grid gap-3 text-sm text-text/70 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-accent" aria-hidden="true" />
                  {formatEventDate(selectedEvent.date)} · {selectedEvent.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                  {selectedEvent.location}
                </div>
              </div>

              <p className="mt-4 text-sm text-text/70">{selectedEvent.description}</p>
              {selectedEvent.meetingNote ? (
                <p className="mt-2 text-xs text-text/60">{selectedEvent.meetingNote}</p>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-2">
                {selectedEvent.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-primary-50 px-3 py-1 text-xs text-text/60">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-primary-100 bg-primary-50 px-4 py-4 text-sm text-text/70">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={selectedEvent.organizer.photo ?? "/images/avatar-placeholder.svg"}
                      alt={selectedEvent.organizer.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-text">{selectedEvent.organizer.name}</p>
                    <p className="text-xs text-text/60">{selectedEvent.organizer.role}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button onClick={handleRegistration}>
                  {selectedEvent.registrationRequired ? "Зарегистрироваться" : "Узнать подробнее"}
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => handleAddToCalendar(selectedEvent)}
                >
                  <Ticket className="mr-2 h-4 w-4" aria-hidden="true" />
                  Добавить в календарь
                </Button>
                {selectedEvent.link ? (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => window.open(selectedEvent.link, "_blank")}
                  >
                    <Link2 className="mr-2 h-4 w-4" aria-hidden="true" />
                    Открыть ссылку
                  </Button>
                ) : null}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-text/60">
                <Share2 className="h-4 w-4" aria-hidden="true" />
                <button
                  type="button"
                  onClick={() => handleShare(selectedEvent.link)}
                  className="min-h-[44px] rounded-full border border-primary-100 px-3 py-1 hover:bg-primary-50"
                >
                  Telegram
                </button>
                <button
                  type="button"
                  onClick={() => handleShare(selectedEvent.link)}
                  className="min-h-[44px] rounded-full border border-primary-100 px-3 py-1 hover:bg-primary-50"
                >
                  VK
                </button>
                <button
                  type="button"
                  onClick={() => handleShare(selectedEvent.link)}
                  className="min-h-[44px] rounded-full border border-primary-100 px-3 py-1 hover:bg-primary-50"
                >
                  <Copy className="mr-1 inline h-3 w-3" aria-hidden="true" />
                  Копировать ссылку
                </button>
              </div>

              {selectedEvent.registrationRequired && showRegistration && !selectedEvent.link ? (
                <div className="mt-6 rounded-2xl border border-primary-100 bg-white p-4">
                  {registeredState ? (
                    <div className="text-center text-sm text-text/70">
                      <p className="text-lg font-semibold text-text">Вы зарегистрированы!</p>
                      <p className="mt-2">Мы отправим подробности на ваш контакт.</p>
                      <Button
                        className="mt-4"
                        variant="secondary"
                        onClick={() => handleAddToCalendar(selectedEvent)}
                      >
                        Добавить в календарь
                      </Button>
                    </div>
                  ) : (
                    <form className="space-y-4" onSubmit={handleRegisterSubmit}>
                      <label className="block text-sm font-medium text-text">
                        Имя
                        <input
                          type="text"
                          required
                          autoComplete="name"
                          className="mt-2 min-h-[44px] w-full rounded-lg border border-primary-100 px-3 py-2 text-sm"
                        />
                      </label>
                      <label className="block text-sm font-medium text-text">
                        Контакт
                        <input
                          type="text"
                          inputMode="email"
                          autoComplete="email"
                          required
                          className="mt-2 min-h-[44px] w-full rounded-lg border border-primary-100 px-3 py-2 text-sm"
                        />
                      </label>
                      <label className="block text-sm font-medium text-text">
                        Как узнали
                        <input
                          type="text"
                          autoComplete="off"
                          className="mt-2 min-h-[44px] w-full rounded-lg border border-primary-100 px-3 py-2 text-sm"
                        />
                      </label>
                      <Button type="submit">Подтвердить</Button>
                    </form>
                  )}
                </div>
              ) : null}

              <div className="mt-6">
                <p className="text-sm font-semibold text-text">Вам также может понравиться</p>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {eventsData
                    .filter((event) => event.direction === selectedEvent.direction && event.id !== selectedEvent.id)
                    .slice(0, 2)
                    .map((event) => (
                      <button
                        key={event.id}
                        type="button"
                        className="rounded-xl border border-primary-100 px-4 py-3 text-left text-sm hover:bg-primary-50"
                        onClick={() => handleEventOpen(event)}
                      >
                        <p className="font-semibold text-text">{event.title}</p>
                        <p className="text-xs text-text/60">
                          {formatEventDate(event.date)} · {event.time}
                        </p>
                      </button>
                    ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
