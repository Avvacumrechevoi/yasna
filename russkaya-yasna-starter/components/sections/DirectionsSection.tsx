"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";

import { DirectionCard } from "@/components/directions/DirectionCard";
import { Button } from "@/components/ui/button";
import { useSignupModal } from "@/components/forms/SignupModal";
import { cn } from "@/lib/utils";
import { cardVariants, staggerChildren } from "@/lib/animation-variants";
import { directionIconMap } from "@/lib/direction-icons";
import {
  directionFilters,
  directionsData,
  type DirectionFilter,
} from "@/lib/directions-data";

export function DirectionsSection() {
  const [activeFilter, setActiveFilter] = React.useState<DirectionFilter>("all");
  const [isCompact, setIsCompact] = React.useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();
  const { openModal } = useSignupModal();

  const activeFilterLabel = React.useMemo(() => {
    return directionFilters.find((filter) => filter.id === activeFilter)?.label ?? "Все";
  }, [activeFilter]);

  React.useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setIsCompact(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const filteredDirections = React.useMemo(() => {
    if (activeFilter === "all") return directionsData;
    return directionsData.filter((direction) => direction.filters.includes(activeFilter));
  }, [activeFilter]);

  const scrollToJoin = React.useCallback(() => {
    const target = document.getElementById("join");
    if (target) {
      target.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
    }
  }, [shouldReduceMotion]);

  return (
    <section id="directions" className="px-4 py-20 md:px-8">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="text-center">
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-primary">
            Направления исследований
          </h2>
          <p className="mt-3 text-text/70">
            8 направлений — от изучения языка до космоса. Выберите своё.
          </p>
        </div>

        <div className="flex items-center justify-center md:hidden">
          <button
            type="button"
            onClick={() => setIsFiltersOpen(true)}
            className="min-h-[44px] rounded-full border border-primary-100 bg-white px-4 text-sm font-medium text-text transition-transform hover:scale-[1.02] active:scale-95"
          >
            Фильтры: {activeFilterLabel}
          </button>
        </div>

        <div className="hidden flex-wrap items-center justify-center gap-3 md:flex" role="tablist">
          {directionFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "min-h-[44px] rounded-full px-4 py-2 text-sm font-medium transition-colors transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:scale-[1.02] active:scale-95",
                activeFilter === filter.id
                  ? "bg-primary text-white"
                  : "bg-primary-50 text-text/70 hover:bg-primary-100"
              )}
            >
              {filter.label}
            </button>
          ))}
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
              aria-label="Фильтры направлений"
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

                <div className="mt-5 flex flex-wrap gap-2">
                  {directionFilters.map((filter) => (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setActiveFilter(filter.id)}
                      className={cn(
                        "min-h-[44px] rounded-full px-4 text-sm font-medium transition-colors transition-transform hover:scale-[1.02] active:scale-95",
                        activeFilter === filter.id
                          ? "bg-primary text-white"
                          : "bg-primary-50 text-text/70"
                      )}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>

                <div className="mt-6">
                  <Button
                    type="button"
                    className="min-h-[44px] w-full"
                    onClick={() => setIsFiltersOpen(false)}
                  >
                    Применить
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren(shouldReduceMotion)}
          className="grid gap-8 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredDirections.map((direction) => {
              const Icon = directionIconMap[direction.icon];
              return (
                <motion.div
                  key={`${activeFilter}-${direction.id}`}
                  variants={cardVariants(shouldReduceMotion)}
                  layout
                >
                  <DirectionCard
                    id={direction.id}
                    name={direction.name}
                    icon={<Icon className="h-6 w-6" aria-hidden="true" />}
                    tagline={direction.tagline}
                    forWhom={direction.forWhom}
                    activities={direction.activities}
                    results={direction.results}
                    format={direction.format}
                    resources={direction.resources}
                    color={direction.color}
                    variant={isCompact ? "compact" : "expanded"}
                    className="scroll-mt-28"
                    onCardClick={() => router.push(direction.href)}
                    onPrimaryAction={() => openModal(`direction-card:${direction.id}`)}
                    onSecondaryAction={() => router.push(direction.href)}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="flex flex-col items-center gap-3 text-center">
          <Button type="button" variant="secondary" onClick={scrollToJoin}>
            Не можете выбрать? Пройдите тест
          </Button>
        </div>
      </div>
    </section>
  );
}
