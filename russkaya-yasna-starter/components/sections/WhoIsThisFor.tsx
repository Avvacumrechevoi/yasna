"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Persona = {
  icon: string;
  headline: string;
  description: string;
  tags: string[];
};

const personas: Persona[] = [
  {
    icon: "🎓",
    headline: "Чувствуете, что современное образование оторвано от корней",
    description:
      "Вы хотите дать детям настоящие знания о родной культуре, но не знаете, где их взять. Школьные учебники не отвечают на ваши вопросы.",
    tags: ["Теремок тайн", "Ясна-Школа", "ЛитПроСвет"],
  },
  {
    icon: "📚",
    headline: "Устали от искаженной истории и штампов",
    description:
      "Вы чувствуете, что что-то не так в официальной версии истории. Ищете первоисточники и логику, а не мифы и легенды.",
    tags: ["38 Меридиан", "Извод", "Астроневод"],
  },
  {
    icon: "🎭",
    headline: "Чувствуете пустоту в праздниках и традициях",
    description:
      "Современные праздники стали формальностью. Вы хотите вернуть смысл в семейные события и понять, как праздновали предки.",
    tags: ["Праздники", "Красота", "ЛитПроСвет"],
  },
  {
    icon: "🔍",
    headline: "Интересуетесь этимологией и смыслами слов",
    description:
      "Вы чувствуете, что многие слова потеряли изначальный смысл. Хотите понимать, как устроен русский язык на глубоком уровне.",
    tags: ["Извод", "ЛитПроСвет", "Джива"],
  },
  {
    icon: "🤝",
    headline: "Хотите найти единомышленников",
    description:
      "Вы устали быть одиноким в своих интересах. Ищете сообщество думающих людей, с которыми можно исследовать и создавать.",
    tags: ["Все направления"],
  },
];

const tagAnchors: Record<string, string> = {
  "Теремок тайн": "direction-teremok",
  "Ясна-Школа": "directions",
  ЛитПроСвет: "direction-litprosvet",
  "38 Меридиан": "direction-neglinka",
  Извод: "direction-izvod",
  Астроневод: "direction-astronevod",
  Праздники: "direction-prazdniki",
  Красота: "direction-prazdniki",
  Джива: "direction-dzhiva",
  "Ясные маршруты": "direction-marshruty",
  "Все направления": "directions",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function WhoIsThisForSection() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToAnchor = React.useCallback(
    (anchorId: string) => {
      const target =
        document.getElementById(anchorId) || document.getElementById("directions");
      if (target) {
        target.scrollIntoView({
          behavior: shouldReduceMotion ? "auto" : "smooth",
          block: "start",
        });
      }
    },
    [shouldReduceMotion]
  );

  return (
    <section className="bg-gradient-to-b from-white via-[#F2F6FF] to-background py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-primary">
            Вы здесь, если:
          </h2>
          <p className="mt-3 text-text/70">Найдите себя среди наших участников</p>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={containerVariants}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {personas.map((persona) => (
            <motion.article
              key={persona.headline}
              variants={shouldReduceMotion ? undefined : cardVariants}
              className="flex h-full flex-col gap-4 rounded-xl bg-white p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary-100 via-secondary-200 to-accent-100 text-3xl">
                <span aria-hidden="true">{persona.icon}</span>
              </div>

              <h3 className="text-xl font-semibold text-text">{persona.headline}</h3>
              <p className="text-sm text-text/70">{persona.description}</p>

              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {persona.tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => scrollToAnchor(tagAnchors[tag] ?? "directions")}
                    className={cn(
                      "rounded-full bg-accent-50 px-3 py-1 text-xs font-medium text-accent",
                      "transition-colors hover:bg-accent-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                    )}
                    aria-label={`Перейти к направлению: ${tag}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="flex flex-col items-center gap-3 text-center">
          <Button type="button" onClick={() => scrollToAnchor("directions")}>
            Выбрать направление
          </Button>
          <p className="text-sm text-text/70">или узнать больше о каждом</p>
        </div>
      </div>
    </section>
  );
}
