"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowUp,
  BookOpen,
  MessageCircle,
  Send,
  Smile,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSignupModal } from "@/components/forms/SignupModal";

const socialLinks = [
  {
    label: "Telegram",
    href: "https://t.me/russkaya_yasna",
    icon: Send,
    color: "bg-[#229ED9]",
  },
  {
    label: "VK",
    href: "https://vk.com",
    icon: MessageCircle,
    color: "bg-[#4C75A3]",
  },
  {
    label: "Dzen",
    href: "https://dzen.ru",
    icon: BookOpen,
    color: "bg-[#1D1D1D]",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: Youtube,
    color: "bg-[#FF0000]",
  },
  {
    label: "Odnoklassniki",
    href: "https://ok.ru",
    icon: Smile,
    color: "bg-[#EE8208]",
  },
];

const directions = [
  { href: "/neglinka", label: "Неглинка / 38 Меридиан" },
  { href: "/litprosvet", label: "ЛитПроСвет" },
  { href: "/astronevod", label: "Астроневод" },
  { href: "/prazdniki", label: "Праздники / Красота" },
  { href: "/dzhiva", label: "Джива" },
  { href: "/marshruty", label: "Ясные маршруты" },
  { href: "/izvod", label: "Извод" },
  { href: "/teremok", label: "Теремок тайн" },
  { href: "#directions", label: "Все направления" },
];

const participationLinks = [
  { href: "#how-it-works", label: "Как участвовать" },
  { href: "#events", label: "Мероприятия" },
  { href: "#school", label: "Ясна-Школа" },
  { href: "#join", label: "Вступить" },
  { href: "#faq", label: "Часто задаваемые вопросы" },
  { href: "mailto:info@russkaya-yasna.ru", label: "Контакты" },
];

const resourceLinks = [
  { href: "#about", label: "О проекте" },
  { href: "#history", label: "История Ясны" },
  { href: "#team", label: "Команда" },
  { href: "#publications", label: "Публикации" },
  { href: "#videos", label: "Видеобиблиотека" },
  { href: "#support", label: "Поддержать проект" },
];

const legalLinks = [
  { href: "#privacy", label: "Политика конфиденциальности" },
  { href: "#terms", label: "Пользовательское соглашение" },
  { href: "#consent", label: "Согласие на обработку данных" },
];

export function Footer() {
  const { openModal } = useSignupModal();
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = React.useState("");
  const [showTop, setShowTop] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMessage("Введите корректный email");
      return;
    }

    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setEmail("");
  };

  return (
    <footer className="bg-[#1A2332] text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 py-16 md:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Подписаться на новости</h3>
              <p className="mt-2 text-sm text-white/70">
                Раз в неделю — дайджест событий и материалов
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:max-w-xl"
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
                autoComplete="email"
                className="min-h-[44px] flex-1 rounded-lg border border-white/20 bg-white px-4 py-3 text-sm text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              />
              <Button
                type="submit"
                className={cn(
                  "min-h-[44px] w-full bg-secondary text-primary hover:bg-secondary-400 sm:w-auto",
                  status === "loading" && "animate-pulse"
                )}
                isLoading={status === "loading"}
              >
                {status === "success" ? "Подписка оформлена" : "Подписаться"}
              </Button>
            </form>
          </div>
          <div className="mt-3 text-sm text-white/60">
            {status === "success" ? "Спасибо! Вы подписаны." : "Без спама, можно отписаться в любой момент"}
          </div>
          {status === "error" ? (
            <p className="mt-2 text-sm text-rose-300">{errorMessage}</p>
          ) : null}
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-5">
            <div>
              <p className="text-2xl font-semibold">Русская Ясна</p>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                Русское учение о жизни
              </p>
            </div>
            <p className="text-sm text-white/70">
              Русская Ясна — образовательное сообщество, которое изучает язык,
              историю и культуру. Мы восстанавливаем утерянные смыслы и возвращаем
              традиции в жизнь.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform",
                      "hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                      social.color
                    )}
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Направления</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {directions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative inline-flex items-center transition-colors hover:text-white"
                  >
                    <span className="after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white/60 after:transition-transform after:content-[''] hover:after:scale-x-100">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Участие</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {participationLinks.map((link) => (
                <li key={link.href}>
                  {link.label === "Вступить" ? (
                    <button
                      type="button"
                      onClick={() => openModal("footer-cta")}
                      className="relative inline-flex items-center text-left transition-colors hover:text-white"
                    >
                      <span className="after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white/60 after:transition-transform after:content-[''] hover:after:scale-x-100">
                        {link.label}
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="relative inline-flex items-center transition-colors hover:text-white"
                    >
                      <span className="after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white/60 after:transition-transform after:content-[''] hover:after:scale-x-100">
                        {link.label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Ресурсы</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative inline-flex items-center transition-colors hover:text-white"
                  >
                    <span className="after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white/60 after:transition-transform after:content-[''] hover:after:scale-x-100">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#151C29]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2025 Русская Ясна. Все права защищены.</p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p>Сделано с ❤️ для сохранения культуры</p>
        </div>
      </div>

      {showTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary shadow-lg transition-transform hover:-translate-y-1 md:hidden"
          style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom))" }}
          aria-label="Вернуться наверх"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>
      ) : null}
    </footer>
  );
}
