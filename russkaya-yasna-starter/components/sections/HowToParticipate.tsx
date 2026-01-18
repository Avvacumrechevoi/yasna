"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Compass,
  FolderOpen,
  Heart,
  Link2,
  MessageCircle,
  Search,
  Send,
  Users,
  School,
  PenSquare,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ScenarioStep = {
  id: string;
  title: string;
  note: string;
  icon: React.ReactNode;
};

type Scenario = {
  id: string;
  title: string;
  emoji: string;
  tagline: string;
  time: string;
  accent: string;
  steps: ScenarioStep[];
  ctaLabel: string;
  ctaTarget: "events" | "join" | "school";
};

const scenarios: Scenario[] = [
  {
    id: "try",
    title: "Я хочу просто попробовать",
    emoji: "👀",
    tagline: "Для тех, кто не уверен, своё это или нет",
    time: "1-2 недели на знакомство",
    accent: "#C8A882",
    steps: [
      {
        id: "try-1",
        title: "Подпишитесь на Telegram-канал интересующего направления",
        note: "Получите доступ к материалам",
        icon: <Send className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "try-2",
        title: "Прочитайте 2-3 статьи, посмотрите видео",
        note: "Почувствуйте атмосферу",
        icon: <BookOpen className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "try-3",
        title: "Придите на открытую встречу или натурный урок",
        note: "Без регистрации, бесплатно",
        icon: <Users className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "try-4",
        title: "Решите, хотите ли продолжить",
        note: "Никаких обязательств",
        icon: <CheckCircle2 className="h-4 w-4" aria-hidden="true" />,
      },
    ],
    ctaLabel: "Посмотреть открытые мероприятия",
    ctaTarget: "events",
  },
  {
    id: "direction",
    title: "Я хочу изучать одно направление",
    emoji: "🎯",
    tagline: "Для тех, у кого есть четкий интерес",
    time: "От 2 часов в неделю",
    accent: "#2B4570",
    steps: [
      {
        id: "direction-1",
        title: "Оставьте заявку на сайте, укажите направление",
        note: "2 минуты",
        icon: <ClipboardList className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "direction-2",
        title: "Мы свяжемся с вами в течение 2-3 дней",
        note: "Координатор направления",
        icon: <MessageCircle className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "direction-3",
        title: "Получите доступ к материалам и чатам",
        note: "Статьи, видео, архивы",
        icon: <FolderOpen className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "direction-4",
        title: "Начните участвовать в регулярных встречах",
        note: "Еженедельно или по расписанию",
        icon: <CalendarDays className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "direction-5",
        title: "По желанию — присоединитесь к исследованиям",
        note: "Практика в команде",
        icon: <Search className="h-4 w-4" aria-hidden="true" />,
      },
    ],
    ctaLabel: "Оставить заявку",
    ctaTarget: "join",
  },
  {
    id: "deep",
    title: "Я хочу глубоко погрузиться",
    emoji: "🚀",
    tagline: "Для тех, кто готов серьезно учиться",
    time: "4-6 часов в неделю + самостоятельная работа",
    accent: "#4169E1",
    steps: [
      {
        id: "deep-1",
        title: "Запишитесь в Ясна-Школу",
        note: "Базовый курс основ Ясны",
        icon: <School className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "deep-2",
        title: "Пройдите базовый курс",
        note: "Видеоуроки + вебинары",
        icon: <BookOpen className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "deep-3",
        title: "Выберите специализацию (1-2 направления)",
        note: "Углубленное изучение",
        icon: <Compass className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "deep-4",
        title: "Станьте активным участником управления",
        note: "Работа в команде",
        icon: <Users className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "deep-5",
        title: "Создавайте собственные исследования",
        note: "Публикации, уроки, статьи",
        icon: <PenSquare className="h-4 w-4" aria-hidden="true" />,
      },
    ],
    ctaLabel: "Записаться в школу",
    ctaTarget: "school",
  },
  {
    id: "events",
    title: "Я хочу прийти на мероприятие",
    emoji: "🎪",
    tagline: "Для тех, кому нужен живой опыт",
    time: "Разовые события 2-4 часа",
    accent: "#C6538C",
    steps: [
      {
        id: "events-1",
        title: "Выберите мероприятие в календаре",
        note: "Натурные уроки, праздники, балы",
        icon: <CalendarDays className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "events-2",
        title: "Зарегистрируйтесь по ссылке",
        note: "Или придите без регистрации",
        icon: <Link2 className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "events-3",
        title: "Придите и познакомьтесь с участниками",
        note: "Дружелюбная атмосфера",
        icon: <Heart className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "events-4",
        title: "После — решите, хотите ли углубиться",
        note: "Выберите другой сценарий",
        icon: <ArrowRight className="h-4 w-4" aria-hidden="true" />,
      },
    ],
    ctaLabel: "Смотреть календарь",
    ctaTarget: "events",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function HowToParticipateSection() {
  const [activeId, setActiveId] = React.useState<string | null>(scenarios[0]?.id ?? null);
  const shouldReduceMotion = useReducedMotion();

  const scrollToAnchor = React.useCallback(
    (target: Scenario["ctaTarget"]) => {
      const anchorId = target === "events" ? "events" : "join";
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
      }
    },
    [shouldReduceMotion]
  );

  return (
    <section id="how-it-works" className="px-4 py-20 md:px-8">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary-700">
            Как начать заниматься
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            Выберите сценарий, который вам подходит
          </h2>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.12 }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {scenarios.map((scenario) => {
            const isExpanded = activeId === scenario.id;
            const stepsId = `${scenario.id}-steps`;
            return (
              <motion.article
                key={scenario.id}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
                onClick={() =>
                  setActiveId((current) => (current === scenario.id ? null : scenario.id))
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveId((current) =>
                      current === scenario.id ? null : scenario.id
                    );
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-controls={stepsId}
                className={cn(
                  "cursor-pointer rounded-2xl border border-primary-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg md:p-8",
                  "flex flex-col gap-6"
                )}
                style={
                  {
                    borderLeft: `4px solid ${scenario.accent}`,
                    "--accent-color": scenario.accent,
                    "--accent-soft": `${scenario.accent}1A`,
                  } as React.CSSProperties
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-full text-3xl"
                      style={{ backgroundColor: `${scenario.accent}1A` }}
                      aria-hidden="true"
                    >
                      {scenario.emoji}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-text">
                      {scenario.title}
                    </h3>
                    <p className="mt-2 text-sm text-text/70">{scenario.tagline}</p>
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-medium text-text/60"
                    style={{ backgroundColor: `${scenario.accent}1A`, color: scenario.accent }}
                  >
                    {scenario.time}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded ? (
                    <motion.div
                      id={stepsId}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <motion.ol
                        initial={shouldReduceMotion ? false : "hidden"}
                        animate="visible"
                        variants={{
                          hidden: {},
                          visible: {
                            transition: {
                              staggerChildren: shouldReduceMotion ? 0 : 0.08,
                            },
                          },
                        }}
                        className="relative flex flex-col gap-4"
                      >
                        {scenario.steps.map((step, index) => {
                          const isLast = index === scenario.steps.length - 1;
                          return (
                            <motion.li
                              key={step.id}
                              variants={stepVariants}
                              className="relative flex gap-4"
                            >
                              <div className="relative flex flex-col items-center">
                                <span
                                  className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-100 text-xs font-semibold"
                                  style={{
                                    backgroundColor: `${scenario.accent}1A`,
                                    color: scenario.accent,
                                  }}
                                >
                                  {index + 1}
                                </span>
                                {!isLast ? (
                                  <motion.span
                                    initial={shouldReduceMotion ? false : { scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="mt-2 h-full w-px origin-top bg-primary-100"
                                    aria-hidden="true"
                                  />
                                ) : null}
                              </div>
                              <div
                                className={cn(
                                  "group flex flex-1 flex-col gap-2 rounded-xl border border-transparent px-3 py-2 transition-colors",
                                  "hover:border-[color:var(--accent-color)] hover:bg-[color:var(--accent-soft)]"
                                )}
                              >
                                <div className="flex items-center gap-2 text-sm font-semibold text-text">
                                  <span
                                    className="flex h-7 w-7 items-center justify-center rounded-full"
                                    style={{
                                      backgroundColor: `${scenario.accent}1A`,
                                      color: scenario.accent,
                                    }}
                                    aria-hidden="true"
                                  >
                                    {step.icon}
                                  </span>
                                  {step.title}
                                </div>
                                <p className="text-xs italic text-text/60">{step.note}</p>
                              </div>
                            </motion.li>
                          );
                        })}
                      </motion.ol>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <div className="mt-auto flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <Button
                    onClick={(event) => {
                      event.stopPropagation();
                      scrollToAnchor(scenario.ctaTarget);
                    }}
                  >
                    {scenario.ctaLabel}
                  </Button>
                  <span className="text-xs text-text/60">
                    Нажмите на карточку, чтобы развернуть шаги
                  </span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="rounded-2xl border border-primary-100 bg-primary-50 px-6 py-8 text-center md:px-10">
          <h3 className="text-2xl font-semibold text-primary">Не знаете, что выбрать?</h3>
          <p className="mt-2 text-text/70">
            Ответьте на 5 вопросов, и мы подскажем
          </p>
          <Button
            className="mt-4"
            onClick={() => scrollToAnchor("join")}
            variant="secondary"
          >
            Пройти тест
          </Button>
        </div>
      </div>
    </section>
  );
}
