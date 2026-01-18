"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Castle,
  ChevronDown,
  Footprints,
  Heart,
  Map,
  Search,
  Star,
  Theater,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  id: string;
  label: string;
  href: string;
};

type DirectionItem = {
  href: string;
  label: string;
  tagline: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { id: "about", label: "О проекте", href: "#about" },
  { id: "directions", label: "Направления", href: "#directions" },
  { id: "participation", label: "Как участвовать", href: "#participation" },
  { id: "events", label: "Мероприятия", href: "#events" },
];

const directionItems: DirectionItem[] = [
  {
    href: "/neglinka",
    label: "Неглинка / 38 Меридиан",
    tagline: "Городские исследования и маршруты у воды",
    icon: Map,
  },
  {
    href: "/litprosvet",
    label: "ЛитПроСвет",
    tagline: "Чтения, лекции и практика слова",
    icon: BookOpen,
  },
  {
    href: "/astronevod",
    label: "Астроневод",
    tagline: "Наблюдения за небом и календарь",
    icon: Star,
  },
  {
    href: "/prazdniki",
    label: "Праздники / Красота",
    tagline: "Обрядовый круг и живые события",
    icon: Theater,
  },
  {
    href: "/dzhiva",
    label: "Джива",
    tagline: "Практики здоровья и жизненной силы",
    icon: Heart,
  },
  {
    href: "/marshruty",
    label: "Ясные маршруты",
    tagline: "Пешие прогулки и тропы знаний",
    icon: Footprints,
  },
  {
    href: "/izvod",
    label: "Извод",
    tagline: "Тексты, ремесла и память рода",
    icon: Search,
  },
  {
    href: "/teremok",
    label: "Теремок тайн",
    tagline: "Детские занятия, игры и сказки",
    icon: Castle,
  },
];

const logoVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const navVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isDirectionsOpen, setIsDirectionsOpen] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);

  const scrollToSection = React.useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  }, []);

  const handleNavClick = React.useCallback(
    (sectionId: string) => (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      scrollToSection(sectionId);
      setIsMobileMenuOpen(false);
      setIsDirectionsOpen(false);
    },
    [scrollToSection]
  );

  const handleDirectionsClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isDesktop) {
        event.preventDefault();
        scrollToSection("directions");
        return;
      }

      event.preventDefault();
      setIsDirectionsOpen((open) => !open);
    },
    [isDesktop, scrollToSection]
  );

  const handleDirectionsBlur = React.useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      if (event.currentTarget.contains(event.relatedTarget as Node)) {
        return;
      }
      setIsDirectionsOpen(false);
    },
    []
  );

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => setIsDesktop(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  React.useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsDirectionsOpen(false);
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  React.useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        isScrolled
          ? "border-b border-primary-100 bg-background/80 backdrop-blur"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 md:px-8">
        <motion.div initial="hidden" animate="visible" variants={logoVariants}>
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-2xl font-bold text-primary">Русская Ясна</span>
            <span className="text-xs uppercase tracking-[0.2em] text-text/60">
              Русское учение о жизни
            </span>
          </Link>
        </motion.div>

        <nav
          aria-label="Основная навигация"
          className="hidden flex-1 items-center justify-center lg:flex"
        >
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className="flex items-center gap-8 text-[0.95rem] font-medium"
          >
            {navItems.map((item) => {
              if (item.id === "directions") {
                return (
                  <motion.li
                    key={item.id}
                    variants={navItemVariants}
                    className="relative"
                  >
                    <div
                      onMouseEnter={() => {
                        if (isDesktop) {
                          setIsDirectionsOpen(true);
                        }
                      }}
                      onMouseLeave={() => {
                        if (isDesktop) {
                          setIsDirectionsOpen(false);
                        }
                      }}
                      onBlur={handleDirectionsBlur}
                      className="relative"
                    >
                      <button
                        type="button"
                        onClick={handleDirectionsClick}
                        onKeyDown={(event) => {
                          if (event.key === "ArrowDown" || event.key === " ") {
                            event.preventDefault();
                            setIsDirectionsOpen(true);
                          }
                          if (event.key === "Escape") {
                            setIsDirectionsOpen(false);
                          }
                        }}
                        aria-haspopup="menu"
                        aria-expanded={isDirectionsOpen}
                        aria-controls="directions-menu"
                        className={cn(
                          "flex items-center gap-2 rounded-full px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                          activeSection === "directions"
                            ? "text-primary"
                            : "text-text/80 hover:text-primary"
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            isDirectionsOpen ? "rotate-180" : "rotate-0"
                          )}
                          aria-hidden="true"
                        />
                      </button>

                      <AnimatePresence>
                        {isDirectionsOpen ? (
                          <motion.div
                            id="directions-menu"
                            role="menu"
                            initial={{ opacity: 0, y: 8, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: 8, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="absolute left-1/2 top-full z-20 mt-3 w-[420px] -translate-x-1/2 overflow-hidden rounded-2xl border border-primary-100 bg-white p-4 shadow-xl"
                          >
                            <div className="grid gap-2">
                              {directionItems.map((direction) => {
                                const Icon = direction.icon;
                                return (
                                  <Link
                                    key={direction.href}
                                    href={direction.href}
                                    role="menuitem"
                                    className="flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                                  >
                                    <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-accent-50">
                                      <Icon
                                        className="h-4 w-4 text-accent"
                                        aria-hidden="true"
                                      />
                                    </span>
                                    <span>
                                      <span className="block text-sm font-semibold text-text">
                                        {direction.label}
                                      </span>
                                      <span className="block text-xs text-text/60">
                                        {direction.tagline}
                                      </span>
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </motion.li>
                );
              }

              return (
                <motion.li key={item.id} variants={navItemVariants}>
                  <a
                    href={item.href}
                    onClick={handleNavClick(item.id)}
                    aria-current={activeSection === item.id ? "true" : undefined}
                    className={cn(
                      "rounded-full px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                      activeSection === item.id
                        ? "text-primary"
                        : "text-text/80 hover:text-primary"
                    )}
                  >
                    {item.label}
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            size="sm"
            className="rounded-full px-5"
            onClick={handleNavClick("join")}
          >
            Вступить
          </Button>
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-100 text-primary transition-colors hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 lg:hidden"
        >
          <span className="sr-only">Меню</span>
          <span
            className={cn(
              "relative flex h-5 w-6 flex-col justify-between",
              isMobileMenuOpen && "justify-center"
            )}
          >
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-primary transition-all",
                isMobileMenuOpen && "translate-y-1.5 rotate-45"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-primary transition-all",
                isMobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-primary transition-all",
                isMobileMenuOpen && "-translate-y-1.5 -rotate-45"
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-background px-6 py-10 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">
                  Навигация
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-100 text-primary transition-colors hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <span className="sr-only">Закрыть меню</span>
                  <span className="text-xl">×</span>
                </button>
              </div>

              <motion.ul
                initial="hidden"
                animate="visible"
                variants={navVariants}
                className="mt-8 flex flex-col gap-2 text-base font-medium"
              >
                {navItems.map((item) => {
                  if (item.id === "directions") {
                    return (
                      <motion.li key={item.id} variants={navItemVariants}>
                        <button
                          type="button"
                          onClick={handleDirectionsClick}
                          aria-expanded={isDirectionsOpen}
                          aria-controls="mobile-directions"
                          className={cn(
                            "flex min-h-[44px] w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                            activeSection === "directions"
                              ? "bg-primary-50 text-primary"
                              : "text-text/80 hover:bg-primary-50"
                          )}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              isDirectionsOpen ? "rotate-180" : "rotate-0"
                            )}
                            aria-hidden="true"
                          />
                        </button>

                        <AnimatePresence>
                          {isDirectionsOpen ? (
                            <motion.div
                              id="mobile-directions"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                              className="mt-2 overflow-hidden rounded-2xl border border-primary-100 bg-white"
                            >
                              <div className="flex flex-col gap-1 p-2">
                                {directionItems.map((direction) => {
                                  const Icon = direction.icon;
                                  return (
                                    <Link
                                      key={direction.href}
                                      href={direction.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="flex min-h-[44px] items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                                    >
                                      <Icon
                                        className="h-4 w-4 text-accent"
                                        aria-hidden="true"
                                      />
                                      <span className="text-text/80">
                                        {direction.label}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </motion.li>
                    );
                  }

                  return (
                    <motion.li key={item.id} variants={navItemVariants}>
                      <a
                        href={item.href}
                        onClick={handleNavClick(item.id)}
                        className={cn(
                          "flex min-h-[44px] items-center rounded-xl px-4 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                          activeSection === item.id
                            ? "bg-primary-50 text-primary"
                            : "text-text/80 hover:bg-primary-50"
                        )}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
              </motion.ul>

              <div className="mt-8">
                <Button
                  className="w-full rounded-full"
                  onClick={handleNavClick("join")}
                >
                  Вступить
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
