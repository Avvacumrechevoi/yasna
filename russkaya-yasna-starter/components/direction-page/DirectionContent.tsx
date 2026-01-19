"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, MessageCircle, Users } from "lucide-react";

import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/button";
import { useSignupModal } from "@/components/forms/SignupModal";
import { cn } from "@/lib/utils";
import type { DirectionData } from "@/lib/directions-data";
import { directionsData } from "@/lib/directions-data";

type DirectionContentProps = {
  direction: DirectionData;
};

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function DirectionContent({ direction }: DirectionContentProps) {
  const { openModal } = useSignupModal();
  const related = directionsData.filter((item) =>
    direction.relatedSlugs.includes(item.slug)
  );

  const faqItems = direction.faq.map((item) => ({
    id: item.id,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <section className="bg-background px-6 py-12 md:px-8 lg:py-16">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1fr_300px]">
        <div className="space-y-12">
          <motion.section
            id="about"
            className="scroll-mt-28 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold text-text">О направлении</h2>
            <div className="space-y-4 text-text/70">
              {direction.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-primary-100 bg-white p-5">
                <p className="text-sm font-semibold text-text">Миссия</p>
                <p className="mt-2 text-sm text-text/70">{direction.mission}</p>
              </div>
              <div className="rounded-2xl border border-primary-100 bg-white p-5">
                <p className="text-sm font-semibold text-text">Что делает направление уникальным</p>
                <p className="mt-2 text-sm text-text/70">{direction.uniqueness}</p>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="for-whom"
            className="scroll-mt-28 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold text-text">Для кого</h2>
            <ul className="space-y-3 text-sm text-text/70">
              {direction.forWhomDetailed.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-primary-100 bg-primary-50 px-4 py-3 text-sm text-text/70">
              <p className="font-semibold text-text">Требования:</p>
              <ul className="mt-2 space-y-1">
                {direction.prerequisites.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </motion.section>

          <motion.section
            id="activities"
            className="scroll-mt-28 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold text-text">Чем занимаемся</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {direction.activitiesDetailed.map((activity) => (
                <div
                  key={activity}
                  className="rounded-2xl border border-primary-100 bg-white p-4 text-sm text-text/70"
                >
                  {activity}
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="format"
            className="scroll-mt-28 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold text-text">Формат работы</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-primary-100 bg-white p-4 text-sm text-text/70">
                <p className="font-semibold text-text">Время</p>
                <p className="mt-2">{direction.format.timeCommitment}</p>
              </div>
              <div className="rounded-2xl border border-primary-100 bg-white p-4 text-sm text-text/70">
                <p className="font-semibold text-text">Частота</p>
                <p className="mt-2">{direction.format.frequency}</p>
              </div>
              <div className="rounded-2xl border border-primary-100 bg-white p-4 text-sm text-text/70">
                <p className="font-semibold text-text">Локация</p>
                <p className="mt-2">{direction.format.location}</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-primary-100 bg-white p-4 text-sm text-text/70">
                <p className="font-semibold text-text">Расписание</p>
                <ul className="mt-2 space-y-1">
                  {direction.schedule.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-primary-100 bg-white p-4 text-sm text-text/70">
                <p className="font-semibold text-text">Инструменты</p>
                <ul className="mt-2 space-y-1">
                  {direction.tools.map((tool) => (
                    <li key={tool}>• {tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="results"
            className="scroll-mt-28 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold text-text">Результаты участников</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {direction.resultsExtended.map((story) => (
                <div
                  key={story.id}
                  className="rounded-2xl border border-primary-100 bg-white p-5"
                >
                  <p className="text-sm italic text-text/70">“{story.quote}”</p>
                  <div className="mt-4 text-sm text-text/60">
                    <p className="font-semibold text-text">{story.name}</p>
                    <p>{story.role}</p>
                  </div>
                  <div className="mt-3 grid gap-2 text-xs text-text/60 md:grid-cols-[1fr_auto_1fr]">
                    <span>Было: {story.before}</span>
                    <span className="hidden md:inline">→</span>
                    <span>Стало: {story.after}</span>
                  </div>
                  <p className="mt-2 text-xs text-text/60">{story.achievement}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {direction.gallery.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-primary-100 bg-white"
                >
                  <img src={item.src} alt={item.alt} className="h-40 w-full object-cover" />
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="team"
            className="scroll-mt-28 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold text-text">Команда направления</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {direction.team.map((member) => (
                <div
                  key={member.id}
                  className="flex gap-4 rounded-2xl border border-primary-100 bg-white p-4"
                >
                  <img
                    src={member.photo ?? "/images/avatar-placeholder.svg"}
                    alt={member.name}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <div className="space-y-2 text-sm text-text/70">
                    <p className="text-base font-semibold text-text">{member.name}</p>
                    <p className="text-xs text-text/60">{member.role}</p>
                    <p>{member.bio}</p>
                    <a
                      href={member.contact}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-600"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      Написать в Telegram
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="secondary" onClick={() => openModal("team-cta")}>
              Присоединиться к команде
            </Button>
          </motion.section>

          <motion.section
            id="resources"
            className="scroll-mt-28 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold text-text">Материалы для изучения</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {direction.resourcesDetailed.map((resource) => (
                <a
                  key={resource.id}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-primary-100 bg-white p-4 transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center justify-between text-xs text-text/60">
                    <span>{resource.type}</span>
                    <span>{resource.date}</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-text group-hover:text-primary">
                    {resource.title}
                  </p>
                  <p className="mt-2 text-xs text-text/60">{resource.duration}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs text-primary">
                    Открыть <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
            {direction.resources.length ? (
              <div className="flex flex-wrap gap-2">
                {direction.resources.map((resource) => (
                  <a
                    key={resource.id}
                    href={resource.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3 py-2 text-xs text-text/60"
                  >
                    {resource.icon ? <resource.icon className="h-4 w-4" aria-hidden="true" /> : null}
                    {resource.label}
                  </a>
                ))}
              </div>
            ) : null}
          </motion.section>

          <motion.section
            id="related"
            className="scroll-mt-28 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold text-text">Связанные направления</h2>
            <p className="text-sm text-text/70">
              Многие участники также интересуются:
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <a
                  key={item.slug}
                  href={item.href}
                  className="rounded-2xl border border-primary-100 bg-white p-4 text-sm text-text/70 transition-shadow hover:shadow-md"
                >
                  <p className="font-semibold text-text">{item.name}</p>
                  <p className="mt-2">{item.tagline}</p>
                </a>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="faq"
            className="scroll-mt-28 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold text-text">Частые вопросы</h2>
            <Accordion items={faqItems} />
          </motion.section>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-4">
            <div className="rounded-2xl border border-primary-100 bg-white p-5">
              <p className="text-sm font-semibold text-text">Навигация</p>
              <ul className="mt-3 space-y-2 text-sm text-text/60">
                {[
                  { id: "about", label: "О направлении" },
                  { id: "for-whom", label: "Для кого" },
                  { id: "results", label: "Результаты" },
                  { id: "team", label: "Команда" },
                  { id: "faq", label: "Вопросы" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="inline-flex items-center gap-2 hover:text-primary"
                    >
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-primary-100 bg-primary-50 p-5">
              <p className="text-sm font-semibold text-text">Готовы начать?</p>
              <p className="mt-2 text-sm text-text/70">
                Получите материалы и поддержку координатора.
              </p>
              <Button className="mt-4 w-full" onClick={() => openModal("sidebar-cta")}>
                Оставить заявку
              </Button>
            </div>

            <div className="rounded-2xl border border-primary-100 bg-white p-5">
              <p className="text-sm font-semibold text-text">Есть вопросы?</p>
              <div className="mt-3 flex items-center gap-3 text-sm text-text/70">
                <Users className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>{direction.team[0]?.name}</span>
              </div>
              <a
                href={direction.team[0]?.contact}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-primary hover:text-primary-600"
              >
                Написать координатору
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
