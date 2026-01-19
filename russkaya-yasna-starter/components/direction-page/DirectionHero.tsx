"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSignupModal } from "@/components/forms/SignupModal";
import type { DirectionData } from "@/lib/directions-data";

type DirectionHeroProps = {
  direction: DirectionData;
};

export function DirectionHero({ direction }: DirectionHeroProps) {
  const { openModal } = useSignupModal();
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const iconY = useTransform(scrollY, [0, 200], [0, shouldReduceMotion ? 0 : -24]);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${direction.color} 0%, #1A2332 100%)`,
      }}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-16 text-white md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-6">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-white/70">
            <Link href="/" className="flex items-center gap-1 hover:text-white">
              <Home className="h-3 w-3" aria-hidden="true" />
              Главная
            </Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <Link href="/#directions" className="hover:text-white">
              Направления
            </Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span className="text-white/90">{direction.name}</span>
          </nav>

          <h1 className="text-4xl font-bold md:text-5xl">{direction.name}</h1>
          <p className="text-lg text-white/80 md:text-xl">{direction.tagline}</p>

          <div className="grid gap-4 text-sm text-white/80 sm:grid-cols-3">
            <div>
              <p className="text-white/60">Активных участников</p>
              <p className="text-lg font-semibold">{direction.stats.participants}</p>
            </div>
            <div>
              <p className="text-white/60">Опыт</p>
              <p className="text-lg font-semibold">{direction.stats.years}</p>
            </div>
            <div>
              <p className="text-white/60">Материалы</p>
              <p className="text-lg font-semibold">{direction.stats.materials}</p>
            </div>
          </div>

          <Button
            className="mt-4 bg-white text-primary hover:bg-white/90"
            onClick={() => openModal(`direction-hero:${direction.slug}`)}
          >
            Присоединиться
          </Button>
        </div>

        <motion.div
          style={{ y: iconY }}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-white/15 text-white shadow-lg md:h-28 md:w-28"
          aria-hidden="true"
        >
          <direction.icon className="h-10 w-10" />
        </motion.div>
      </div>
    </section>
  );
}
