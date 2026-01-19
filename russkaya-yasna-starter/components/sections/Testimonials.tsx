"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { testimonialsData, type Testimonial } from "@/lib/testimonials-data";

type FilterOption = {
  id: string;
  label: string;
};

const directionOrder = [
  "Неглинка",
  "ЛитПроСвет",
  "Праздники",
  "Ясные маршруты",
  "Теремок тайн",
];

const quoteModalVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
};

export function TestimonialsSection() {
  const [activeFilter, setActiveFilter] = React.useState("all");
  const [selectedTestimonial, setSelectedTestimonial] = React.useState<Testimonial | null>(null);
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const modalTouchStartY = React.useRef<number | null>(null);
  const modalTouchCurrentY = React.useRef<number | null>(null);

  const filterOptions = React.useMemo<FilterOption[]>(() => {
    const available = new Set(testimonialsData.map((item) => item.direction));
    return [
      { id: "all", label: "Все истории" },
      ...directionOrder
        .filter((direction) => available.has(direction))
        .map((direction) => ({ id: direction, label: direction })),
    ];
  }, []);

  const filteredTestimonials = React.useMemo(() => {
    if (activeFilter === "all") {
      return testimonialsData;
    }
    return testimonialsData.filter((item) => item.direction === activeFilter);
  }, [activeFilter]);

  const counts = React.useMemo(() => {
    return testimonialsData.reduce<Record<string, number>>((acc, item) => {
      acc[item.direction] = (acc[item.direction] ?? 0) + 1;
      return acc;
    }, {});
  }, []);

  React.useEffect(() => {
    if (!selectedTestimonial && !isFormOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedTestimonial(null);
        setIsFormOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [selectedTestimonial, isFormOpen]);

  React.useEffect(() => {
    document.body.style.overflow = selectedTestimonial || isFormOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedTestimonial, isFormOpen]);

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
        setSelectedTestimonial(null);
        setIsFormOpen(false);
      }
      modalTouchStartY.current = null;
      modalTouchCurrentY.current = null;
    },
    []
  );

  return (
    <section className="bg-gradient-to-b from-white via-[#F4F7FD] to-background px-4 py-20 md:px-8">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="text-center">
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-primary">
            Истории участников
          </h2>
          <p className="mt-3 text-text/70">Как Ясна изменила их жизнь</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {filterOptions.map((option) => {
            const count =
              option.id === "all"
                ? testimonialsData.length
                : counts[option.id] ?? 0;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setActiveFilter(option.id)}
                className={cn(
                  "inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                  activeFilter === option.id
                    ? "bg-primary text-white"
                    : "bg-primary-50 text-text/70 hover:bg-primary-100"
                )}
              >
                {option.label}
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="md:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            pagination={{ clickable: true }}
            navigation
            grabCursor
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            className="pb-10"
          >
            {filteredTestimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard
                  testimonial={testimonial}
                  onOpen={setSelectedTestimonial}
                  onDirectionClick={(direction) => setActiveFilter(direction)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="hidden gap-8 md:grid md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                onOpen={setSelectedTestimonial}
                onDirectionClick={(direction) => setActiveFilter(direction)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col items-center gap-3 text-center">
          <Button type="button" onClick={() => setIsFormOpen(true)}>
            Поделиться своей историей
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {selectedTestimonial ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 px-0 py-0 sm:items-center sm:px-4 sm:py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTestimonial(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="testimonial-title"
          >
            <motion.div
              variants={quoteModalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="h-full w-full overflow-y-auto bg-white p-6 shadow-xl sm:max-h-[90vh] sm:max-w-2xl sm:rounded-2xl"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={handleModalTouchStart}
              onTouchMove={handleModalTouchMove}
              onTouchEnd={handleModalTouchEnd}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xl font-semibold text-text" id="testimonial-title">
                    {selectedTestimonial.name}
                  </p>
                  <p className="text-sm text-text/60">
                    {selectedTestimonial.age} лет · {selectedTestimonial.profession}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedTestimonial(null)}
                  className="min-h-[44px] min-w-[44px] rounded-full border border-primary-100 px-3 py-1 text-sm text-text/70 hover:bg-primary-50"
                >
                  Закрыть
                </button>
              </div>

              <div className="mt-4">
                <span
                  className="inline-flex rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    backgroundColor: `${selectedTestimonial.directionColor}1A`,
                    color: selectedTestimonial.directionColor,
                  }}
                >
                  {selectedTestimonial.direction}
                </span>
              </div>

              <p className="mt-4 text-sm italic text-text/70">
                {selectedTestimonial.quote}
              </p>

              <div className="mt-6 grid gap-3 text-xs text-text/70 md:grid-cols-[1fr_auto_1fr]">
                <div className="rounded-lg bg-primary-50 px-3 py-2">
                  <span className="font-semibold text-text/60">Было:</span>{" "}
                  {selectedTestimonial.before}
                </div>
                <div className="hidden items-center justify-center md:flex">
                  →
                </div>
                <div className="rounded-lg bg-primary-50 px-3 py-2">
                  <span className="font-semibold text-text/60">Стало:</span>{" "}
                  {selectedTestimonial.after}
                </div>
              </div>

              <div className="mt-4 text-xs text-text/60">
                {selectedTestimonial.timeInProject} · {selectedTestimonial.achievement}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isFormOpen ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 px-0 py-0 sm:items-center sm:px-4 sm:py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFormOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="testimonial-form-title"
          >
            <motion.div
              variants={quoteModalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="h-full w-full overflow-y-auto bg-white p-6 shadow-xl sm:max-w-xl sm:rounded-2xl"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={handleModalTouchStart}
              onTouchMove={handleModalTouchMove}
              onTouchEnd={handleModalTouchEnd}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-text" id="testimonial-form-title">
                  Поделиться своей историей
                </h3>
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="min-h-[44px] min-w-[44px] rounded-full border border-primary-100 px-3 py-1 text-sm text-text/70 hover:bg-primary-50"
                >
                  Закрыть
                </button>
              </div>

              <form
                className="mt-4 space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setIsFormOpen(false);
                }}
              >
                <label className="block text-sm font-medium text-text">
                  Имя
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-2 min-h-[44px] w-full rounded-lg border border-primary-100 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    placeholder="Введите имя"
                  />
                </label>

                <label className="block text-sm font-medium text-text">
                  Направление
                  <select
                    name="direction"
                    required
                    className="mt-2 min-h-[44px] w-full rounded-lg border border-primary-100 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  >
                    <option value="">Выберите направление</option>
                    {directionOrder.map((direction) => (
                      <option key={direction} value={direction}>
                        {direction}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-medium text-text">
                  История
                  <textarea
                    name="story"
                    required
                    rows={4}
                    className="mt-2 min-h-[120px] w-full rounded-lg border border-primary-100 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    placeholder="Поделитесь историей"
                  />
                </label>

                <label className="block text-sm font-medium text-text">
                  Фото
                  <input
                    type="file"
                    name="photo"
                    className="mt-2 w-full text-sm text-text/60 file:mr-3 file:rounded-full file:border-0 file:bg-primary-50 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-primary"
                  />
                </label>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <Button type="submit" className="min-h-[44px]">
                    Отправить
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    className="min-h-[44px]"
                    onClick={() => setIsFormOpen(false)}
                  >
                    Отмена
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
