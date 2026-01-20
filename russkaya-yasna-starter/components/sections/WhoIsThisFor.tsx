"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cardVariants, staggerChildren } from "@/lib/animation-variants";

type Persona = {
  icon: string;
  title: string;
  when: string;
  want: string;
  soThat: string;
  recommendation: string;
  border: string;
  titleColor: string;
};

const personas: Persona[] = [
  {
    icon: "🎓",
    title: "Родитель в поиске настоящих знаний",
    when: "Ребёнок задаёт вопросы, на которые учебники не отвечают",
    want: "Дать ребёнку понимание родной культуры",
    soThat: "Он вырос с крепкими корнями",
    recommendation: "\"Ясные маршруты\" — прогулки с детьми",
    border: "border-primary",
    titleColor: "text-primary",
  },
  {
    icon: "🔍",
    title: "Ищущий ответы о традициях",
    when: "Праздники и обряды стали пустой формальностью",
    want: "Вернуть смысл семейным событиям",
    soThat: "Традиции снова объединяли семью",
    recommendation: "\"Праздники / Красота\" — обрядовый круг",
    border: "border-accent",
    titleColor: "text-accent",
  },
  {
    icon: "📖",
    title: "Любитель слов и смыслов",
    when: "Слова звучат знакомо, но смысл ускользает",
    want: "Разбираться в корнях и логике языка",
    soThat: "Читать и понимать глубже",
    recommendation: "\"Извод\" — этимология и смыслы слов",
    border: "border-secondary",
    titleColor: "text-secondary-700",
  },
  {
    icon: "🗺️",
    title: "Исследователь первоисточников",
    when: "Официальные версии не объясняют причин",
    want: "Работать с архивами и картами",
    soThat: "Видеть систему, а не штампы",
    recommendation: "\"38 Меридиан\" — архивы и карты",
    border: "border-primary",
    titleColor: "text-primary",
  },
  {
    icon: "🤝",
    title: "В поиске сообщества",
    when: "Не с кем обсудить открытия и вопросы",
    want: "Найти единомышленников",
    soThat: "Исследовать вместе и не оставаться одному",
    recommendation: "Любое направление — совместные исследования",
    border: "border-accent",
    titleColor: "text-accent",
  },
];

export function WhoIsThisForSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-gradient-to-b from-white via-[#F2F6FF] to-background py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">Найдите себя</h2>
          <p className="text-xl text-gray-600 mb-12">Выберите ситуацию, которая вам близка</p>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren(shouldReduceMotion)}
          className="grid gap-6 md:grid-cols-2"
        >
          {personas.map((persona) => (
            <motion.article
              key={persona.title}
              variants={cardVariants(shouldReduceMotion)}
              className={`bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border-l-4 ${persona.border} hover:shadow-xl transition-all`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{persona.icon}</span>
                <h3 className={`text-2xl font-bold ${persona.titleColor}`}>{persona.title}</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm font-semibold text-gray-600 mb-1">КОГДА:</div>
                  <p className="text-gray-800">{persona.when}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-600 mb-1">Я ХОЧУ:</div>
                  <p className="text-gray-800">{persona.want}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-600 mb-1">ЧТОБЫ:</div>
                  <p className="text-gray-800">{persona.soThat}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-primary/20">
                <p className="text-gray-800">
                  <strong>{persona.recommendation}</strong>
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="flex flex-col items-center gap-2 text-center">
          <Button type="button" variant="secondary" onClick={() => window.location.assign("#directions")}>
            Выбрать направление
          </Button>
          <p className="text-sm text-text/60">или узнать больше о каждом</p>
        </div>
      </div>
    </section>
  );
}
