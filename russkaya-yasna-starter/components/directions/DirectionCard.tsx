"use client";

import * as React from "react";
import Image from "next/image";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type TestimonialType = {
  id: string;
  quote: string;
  name: string;
  age?: string;
  profession?: string;
  avatarUrl?: string;
};

export type FormatType = {
  timeCommitment: string;
  frequency: string;
  location: string;
};

export type ResourceType = {
  id: string;
  label: string;
  href: string;
  icon?: LucideIcon;
};

export type DirectionCardProps = {
  id: string;
  name: string;
  icon: ReactNode;
  tagline: string;
  forWhom: string[];
  activities: string[];
  results: TestimonialType[];
  format: FormatType;
  resources: ResourceType[];
  color: string;
  variant?: "compact" | "expanded";
  participantsCount?: string;
  activeYears?: string;
  className?: string;
  onCardClick?: () => void;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  onTestimonialClick?: (testimonial: TestimonialType) => void;
};

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function DirectionCard({
  id,
  name,
  icon,
  tagline,
  forWhom,
  activities,
  results,
  format,
  resources,
  color,
  variant = "expanded",
  participantsCount,
  activeYears,
  className,
  onCardClick,
  onPrimaryAction,
  onSecondaryAction,
  onTestimonialClick,
}: DirectionCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isCompact = variant === "compact";
  const isClickable = Boolean(onCardClick);

  const handleCardClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.defaultPrevented) return;
    onCardClick?.();
  };

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!isClickable) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onCardClick?.();
    }
  };

  const handlePrimaryClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onPrimaryAction?.();
  };

  const handleSecondaryClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onSecondaryAction?.();
  };

  const CardRoot = (
    <motion.article
      id={id}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      className={cn(
        "relative flex flex-col gap-6 rounded-2xl border border-primary-100 bg-white shadow-sm transition-shadow hover:border-primary-200 hover:shadow-xl",
        isCompact ? "p-6" : "p-8",
        className
      )}
      style={{ borderLeft: `4px solid ${color}` }}
      role={isClickable ? "button" : "article"}
      tabIndex={isClickable ? 0 : undefined}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      <header className="flex flex-wrap items-center gap-4">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full text-2xl"
          style={{ backgroundColor: `${color}1A` }}
          aria-hidden="true"
        >
          <span className="text-2xl" style={{ color }}>
            {icon}
          </span>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-text">{name}</h2>
          <p className="text-sm italic text-text/60">{tagline}</p>
        </div>
        {!isCompact ? (
          <div className="flex flex-wrap items-center gap-3 text-xs text-text/60">
            {participantsCount ? (
              <span className="rounded-full bg-primary-50 px-3 py-1">
                {participantsCount}
              </span>
            ) : null}
            {activeYears ? (
              <span className="rounded-full bg-secondary-50 px-3 py-1">
                {activeYears}
              </span>
            ) : null}
          </div>
        ) : null}
      </header>

      {isCompact ? (
        <>
          <ul className="space-y-2 text-sm text-text/70">
            {forWhom.slice(0, 3).map((point) => (
              <li key={point} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <Button size="sm" onClick={handlePrimaryClick}>
              Присоединиться
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-6 divide-y divide-primary-100/60">
          <section className="pt-0">
            <h3 className="text-lg font-semibold text-text">Для кого</h3>
            {forWhom.length ? (
              <motion.ul
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                className="mt-4 space-y-2 text-sm text-text/70"
              >
                {forWhom.map((point) => (
                  <motion.li
                    key={point}
                    variants={itemVariants}
                    className="flex gap-2"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 text-accent"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            ) : (
              <p className="mt-3 text-sm text-text/60">Скоро добавим детали.</p>
            )}
          </section>

          <section className="pt-6">
            <h3 className="text-lg font-semibold text-text">Что вы будете делать</h3>
            {activities.length ? (
              <motion.ul
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                className="mt-4 space-y-2 text-sm text-text/70"
              >
                {activities.map((activity) => (
                  <motion.li
                    key={activity}
                    variants={itemVariants}
                    className="flex gap-2"
                  >
                    <span aria-hidden="true" className="mt-0.5">
                      🗺️
                    </span>
                    <span>{activity}</span>
                  </motion.li>
                ))}
              </motion.ul>
            ) : (
              <p className="mt-3 text-sm text-text/60">Активности уточняются.</p>
            )}
          </section>

          <section className="pt-6">
            <h3 className="text-lg font-semibold text-text">Результаты участников</h3>
            {results.length ? (
              <div className="mt-4 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
                {results.map((testimonial) => {
                  const content = (
                    <div className="flex h-full flex-col gap-3 rounded-xl border border-primary-100 bg-white p-4 shadow-sm">
                      <p className="text-sm italic text-text/70">
                        “{testimonial.quote}”
                      </p>
                      <div className="mt-auto flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary-50">
                          {testimonial.avatarUrl ? (
                            <Image
                              src={testimonial.avatarUrl}
                              alt={testimonial.name}
                              fill
                              sizes="40px"
                              className="object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-xs text-primary">
                              {testimonial.name.slice(0, 1)}
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-text">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-text/60">
                            {[testimonial.age, testimonial.profession]
                              .filter(Boolean)
                              .join(", ")}
                          </p>
                        </div>
                      </div>
                    </div>
                  );

                  return onTestimonialClick ? (
                    <button
                      key={testimonial.id}
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        onTestimonialClick(testimonial);
                      }}
                      className="min-w-[240px] flex-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 md:min-w-0"
                    >
                      {content}
                    </button>
                  ) : (
                    <div
                      key={testimonial.id}
                      className="min-w-[240px] flex-1 md:min-w-0"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="mt-3 text-sm text-text/60">
                Истории участников появятся скоро.
              </p>
            )}
          </section>

          <section className="pt-6">
            <h3 className="text-lg font-semibold text-text">Формат участия</h3>
            <div className="mt-4 grid gap-3 text-sm text-text/70 md:grid-cols-3">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>{format.timeCommitment}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>{format.frequency}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>{format.location}</span>
              </div>
            </div>
          </section>

          <section className="pt-6">
            <h3 className="text-lg font-semibold text-text">Ресурсы</h3>
            {resources.length ? (
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                {resources.map((resource) => {
                  const ResourceIcon = resource.icon;
                  return (
                    <a
                      key={resource.id}
                      href={resource.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3 py-2 text-text/70 transition-colors hover:bg-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    >
                      <span className="text-accent">
                        {ResourceIcon ? (
                          <ResourceIcon className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        )}
                      </span>
                      <span>{resource.label}</span>
                    </a>
                  );
                })}
              </div>
            ) : (
              <p className="mt-3 text-sm text-text/60">Ссылки появятся скоро.</p>
            )}
          </section>

          <section className="flex flex-col gap-3 pt-6 sm:flex-row">
            <Button onClick={handlePrimaryClick}>Присоединиться</Button>
            <Button variant="secondary" onClick={handleSecondaryClick}>
              Узнать подробнее
            </Button>
          </section>
        </div>
      )}
    </motion.article>
  );

  return CardRoot;
}
