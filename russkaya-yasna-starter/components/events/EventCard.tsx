"use client";

import * as React from "react";
import { Clock, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { EventItem } from "@/lib/events-data";

type EventCardProps = {
  event: EventItem;
  onOpen: (event: EventItem) => void;
  onDirectionClick?: (direction: string) => void;
  onTagClick?: (tag: string) => void;
};

const months = [
  "янв",
  "фев",
  "мар",
  "апр",
  "май",
  "июн",
  "июл",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек",
];

export function EventCard({ event, onOpen, onDirectionClick, onTagClick }: EventCardProps) {
  const date = new Date(`${event.date}T00:00:00`);
  const day = date.getDate();
  const month = months[date.getMonth()];

  const spotsLeft =
    event.capacity && event.registered ? event.capacity - event.registered : null;
  const capacityRatio =
    event.capacity && event.registered
      ? Math.max(0, (event.capacity - event.registered) / event.capacity)
      : null;

  const capacityLabel = event.registrationRequired
    ? spotsLeft !== null
      ? `Осталось ${spotsLeft} мест`
      : "Регистрация требуется"
    : "Регистрация не требуется";

  const capacityColor =
    capacityRatio === null
      ? "bg-gray-200"
      : capacityRatio > 0.5
      ? "bg-emerald-400"
      : capacityRatio > 0.2
      ? "bg-amber-400"
      : "bg-rose-400";

  return (
    <article
      className="flex h-full cursor-pointer flex-col gap-4 rounded-2xl border border-primary-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
      onClick={() => onOpen(event)}
      onKeyDown={(eventKey) => {
        if (eventKey.key === "Enter" || eventKey.key === " ") {
          eventKey.preventDefault();
          onOpen(event);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Открыть событие ${event.title}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className="flex h-14 w-14 flex-col items-center justify-center rounded-full text-white"
          style={{ backgroundColor: event.directionColor }}
          aria-hidden="true"
        >
          <span className="text-lg font-semibold leading-none">{day}</span>
          <span className="text-xs uppercase">{month}</span>
        </div>
        <div className="text-right text-xs text-text/60">
          <div className="flex items-center justify-end gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {event.time}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <button
          type="button"
          onClick={(eventClick) => {
            eventClick.stopPropagation();
            onDirectionClick?.(event.direction);
          }}
          className="inline-flex rounded-full px-3 py-1 text-xs font-medium"
          style={{
            backgroundColor: `${event.directionColor}1A`,
            color: event.directionColor,
          }}
          aria-label={`Фильтр по направлению ${event.direction}`}
        >
          {event.direction}
        </button>
        <h3 className="text-lg font-semibold text-text">{event.title}</h3>
        <div className="flex items-start gap-2 text-sm text-text/70">
          <MapPin className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
          <span>{event.location}</span>
        </div>
        <p className="text-sm text-text/70">{event.description}</p>
      </div>

      <div className="mt-auto space-y-3">
        <div className="space-y-2 text-xs text-text/60">
          <div className="flex items-center justify-between">
            <span>{capacityLabel}</span>
            {event.price ? <span>{event.price}</span> : null}
          </div>
          {capacityRatio !== null ? (
            <div className="h-1.5 w-full rounded-full bg-gray-100">
              <div className={cn("h-1.5 rounded-full", capacityColor)} style={{ width: `${capacityRatio * 100}%` }} />
            </div>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={(eventClick) => {
                eventClick.stopPropagation();
                onTagClick?.(tag);
              }}
              className="rounded-full bg-primary-50 px-3 py-1 text-xs text-text/60 hover:bg-primary-100"
            >
              {tag}
            </button>
          ))}
        </div>

        <Button
          type="button"
          variant={event.registrationRequired ? "primary" : "secondary"}
          onClick={(eventClick) => {
            eventClick.stopPropagation();
            onOpen(event);
          }}
        >
          {event.registrationRequired ? "Зарегистрироваться" : "Узнать подробнее"}
        </Button>
      </div>
    </article>
  );
}
