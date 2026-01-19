"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";

import { DirectionCard } from "@/components/directions/DirectionCard";
import { Button } from "@/components/ui/button";
import { useSignupModal } from "@/components/forms/SignupModal";
import { cn } from "@/lib/utils";
import {
  directionFilters,
  directionsData,
  type DirectionFilter,
} from "@/lib/directions-data";

export function DirectionsSection() {
  const [activeFilter, setActiveFilter] = React.useState<DirectionFilter>("all");
  const [isCompact, setIsCompact] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();
  const { openModal } = useSignupModal();

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

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
  };

  return (
    <section id="directions" className="px-4 py-20 md:px-8">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Направления исследований
          </h2>
          <p className="mt-3 text-text/70">
            8 направлений — от изучения языка до космоса. Выберите своё.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3" role="tablist">
          {directionFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                activeFilter === filter.id
                  ? "bg-primary text-white"
                  : "bg-primary-50 text-text/70 hover:bg-primary-100"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={gridVariants}
          className="grid gap-8 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredDirections.map((direction) => (
              <motion.div
                key={`${activeFilter}-${direction.id}`}
                variants={cardVariants}
                layout
              >
                <DirectionCard
                  id={direction.id}
                  name={direction.name}
                  icon={<direction.icon className="h-6 w-6" aria-hidden="true" />}
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
            ))}
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
