"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/button";
import { faqItems } from "@/lib/faq-data";

function highlightText(text: string, query: string) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, index) =>
    regex.test(part) ? (
      <mark
        key={`${part}-${index}`}
        className="rounded bg-secondary-100 px-1 py-0.5 text-primary"
      >
        {part}
      </mark>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    )
  );
}

export function FAQSection() {
  const [query, setQuery] = React.useState("");
  const normalized = query.trim().toLowerCase();

  const filtered = React.useMemo(() => {
    if (!normalized) return faqItems;
    return faqItems.filter((item) => {
      const inQuestion = item.question.toLowerCase().includes(normalized);
      const inAnswer = item.answer.toLowerCase().includes(normalized);
      return inQuestion || inAnswer;
    });
  }, [normalized]);

  const accordionItems = React.useMemo(
    () =>
      filtered.map((item) => ({
        id: item.id,
        question: highlightText(item.question, normalized),
        answer: highlightText(item.answer, normalized),
      })),
    [filtered, normalized]
  );

  const handleContactClick = () => {
    window.location.href = "mailto:info@russkaya-yasna.ru";
  };

  return (
    <section id="faq" className="px-4 py-20 md:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Частые вопросы</h2>
          <p className="mt-3 text-text/70">Не нашли ответ? Напишите нам</p>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-3 h-5 w-5 text-text/40" aria-hidden="true" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Поиск по вопросам"
              className="w-full rounded-full border border-primary-100 bg-white px-10 py-3 text-sm text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            />
          </div>
          <Button type="button" onClick={handleContactClick}>
            Задать свой вопрос
          </Button>
        </div>

        {accordionItems.length ? (
          <Accordion items={accordionItems} />
        ) : (
          <div className="rounded-2xl border border-primary-100 bg-primary-50 px-6 py-10 text-center text-sm text-text/70">
            Ничего не найдено. Попробуйте другой запрос.
          </div>
        )}

        <div className="rounded-2xl border border-primary-100 bg-primary-50 px-6 py-8 text-center md:px-10">
          <h3 className="text-2xl font-semibold text-primary">
            Не нашли ответ на свой вопрос?
          </h3>
          <p className="mt-2 text-text/70">Отвечаем в течение суток</p>
          <Button className="mt-4" variant="secondary" onClick={handleContactClick}>
            Написать нам
          </Button>
        </div>
      </div>
    </section>
  );
}
