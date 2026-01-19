"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/testimonials-data";

type TestimonialCardProps = {
  testimonial: Testimonial;
  onOpen: (testimonial: Testimonial) => void;
  onDirectionClick?: (direction: string) => void;
};

const quoteClampStyles: React.CSSProperties = {
  display: "-webkit-box",
  WebkitLineClamp: 4,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

export function TestimonialCard({
  testimonial,
  onOpen,
  onDirectionClick,
}: TestimonialCardProps) {
  const showReadMore = testimonial.quote.length > 220;

  return (
    <motion.article
      className="flex h-full cursor-pointer flex-col gap-5 rounded-xl border border-primary-100 bg-white p-6 shadow-sm transition-shadow hover:-translate-y-1 hover:shadow-lg"
      style={{ borderLeft: `4px solid ${testimonial.directionColor}` }}
      whileHover={{ scale: 1.01 }}
      onClick={() => onOpen(testimonial)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(testimonial);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Открыть историю участника ${testimonial.name}`}
    >
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 overflow-hidden rounded-full border border-primary-100 bg-primary-50">
          <Image
            src={testimonial.photo ?? "/images/avatar-placeholder.svg"}
            alt={`${testimonial.name}`}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="text-lg font-semibold text-text">{testimonial.name}</p>
          <p className="text-sm text-text/60">
            {testimonial.age} лет · {testimonial.profession}
          </p>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onDirectionClick?.(testimonial.direction);
            }}
            className={cn(
              "mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
              "transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            )}
            style={{
              backgroundColor: `${testimonial.directionColor}1A`,
              color: testimonial.directionColor,
            }}
            aria-label={`Фильтр по направлению ${testimonial.direction}`}
          >
            {testimonial.direction}
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm italic text-text/70" style={quoteClampStyles}>
          {testimonial.quote}
        </p>
        {showReadMore ? (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onOpen(testimonial);
            }}
            className="text-xs font-semibold text-primary transition-colors hover:text-primary-600"
          >
            Читать полностью
          </button>
        ) : null}
      </div>

      <div className="flex items-center gap-2 text-xs text-text/60">
        <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
        <span>{testimonial.timeInProject}</span>
      </div>

      <div className="flex items-center gap-2 text-xs text-text/60">
        <Medal className="h-4 w-4 text-accent" aria-hidden="true" />
        <span>{testimonial.achievement}</span>
      </div>

      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-lg bg-primary-50 px-3 py-2 text-xs text-text/70">
          <span className="font-semibold text-text/60">Было:</span> {testimonial.before}
        </div>
        <div className="hidden items-center justify-center md:flex">
          <ArrowRight className="h-4 w-4 text-text/40" aria-hidden="true" />
        </div>
        <div className="rounded-lg bg-primary-50 px-3 py-2 text-xs text-text/70">
          <span className="font-semibold text-text/60">Стало:</span> {testimonial.after}
        </div>
      </div>
    </motion.article>
  );
}
