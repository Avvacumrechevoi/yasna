"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { CalendarDays, Compass, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headline = "Хватит жить по чужим правилам и смыслам";
const eyebrow = "СООБЩЕСТВО ИССЛЕДОВАТЕЛЕЙ РУССКОЙ КУЛЬТУРЫ";

const description = [
  "Русская Ясна — это сообщество людей, которые исследуют настоящие смыслы слов, восстанавливают подлинную историю и возвращают традиции в свою жизнь.",
  "Мы не пересказываем учебники. Мы идем в архивы, анализируем язык и находим логику там, где официальная версия молчит.",
];

const trustIndicators = [
  {
    label: "8 направлений исследований",
    icon: Compass,
  },
  {
    label: "200+ активных участников",
    icon: Users,
  },
  {
    label: "5 лет работы",
    icon: CalendarDays,
  },
];

const headlineWords = headline.split(" ");

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : -40]);

  const scrollToSection = React.useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: shouldReduceMotion ? "auto" : "smooth",
          block: "start",
        });
      }
    },
    [shouldReduceMotion]
  );

  const headlineVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const fadeIn = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  });

  const buttonAnimation = {
    initial: shouldReduceMotion ? false : { opacity: 0, scale: 0.94 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.45, ease: "easeOut", delay: 0.4 },
  };

  const trustVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.45,
      },
    },
  };

  const trustItemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const floatingAnimation = shouldReduceMotion
    ? undefined
    : {
        y: [0, -12, 0],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F4F7FD] to-background"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-accent-100/40 blur-3xl" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-secondary-100/60 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#2B4570_1px,transparent_1px),linear-gradient(to_bottom,#2B4570_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] gap-12 px-4 py-12 md:px-8 lg:min-h-screen lg:grid-cols-[3fr_2fr] lg:items-center lg:py-20">
        <div className="flex flex-col gap-6">
          <motion.p
            {...fadeIn(0)}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-700"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={headlineVariants}
            aria-label={headline}
            className="text-4xl font-bold text-primary md:text-5xl lg:text-6xl"
          >
            <span className="sr-only">{headline}</span>
            <span aria-hidden="true">
              {headlineWords.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  variants={wordVariants}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            {...fadeIn(0.2)}
            className="text-lg text-text/70 md:text-xl"
          >
            Верните себе понимание родной культуры через язык
          </motion.p>

          <motion.div {...fadeIn(0.3)} className="space-y-4 text-base text-text/70">
            {description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            {...buttonAnimation}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button type="button" onClick={() => scrollToSection("directions")}>
              Выбрать направление
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => scrollToSection("how-it-works")}
            >
              Как это работает
            </Button>
          </motion.div>

          <motion.ul
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={trustVariants}
            className="grid gap-3 pt-2 text-sm text-text/70 sm:grid-cols-3"
          >
            {trustIndicators.map((item) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.label}
                  variants={trustItemVariants}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-100 text-secondary-700">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>{item.label}</span>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          style={{ y: imageY }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-primary-100 bg-white/80 shadow-xl">
            <img
              src="/images/hero-placeholder.svg"
              alt="Абстрактная иллюстрация книг и старинных карт"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(43,69,112,0.12),_transparent_55%)]"
              aria-hidden="true"
            />
          </div>

          <motion.div
            animate={floatingAnimation}
            className="absolute -left-6 top-14 hidden h-16 w-16 rounded-full border border-secondary-200 bg-secondary-50/80 shadow-md md:block"
            aria-hidden="true"
          />
          <motion.div
            animate={floatingAnimation}
            className="absolute -bottom-6 right-10 hidden h-20 w-20 rounded-full border border-accent-200 bg-accent-50/80 shadow-md md:block"
            aria-hidden="true"
          />
          <motion.div
            animate={floatingAnimation}
            className={cn(
              "absolute right-6 top-10 hidden rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-lg md:block",
              shouldReduceMotion ? "" : "backdrop-blur"
            )}
            aria-hidden="true"
          >
            Архивы · Язык · Практики
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
