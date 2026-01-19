"use client";

import * as React from "react";

import { useSignupModal } from "@/components/forms/SignupModal";

export function FinalCTASection() {
  const { openModal } = useSignupModal();

  const scrollToEvents = React.useCallback(() => {
    const target = document.getElementById("events");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Попробуй метод на практике
        </h2>

        <p className="text-xl mb-8 leading-relaxed">
          Приходи на бесплатный натурный урок — погуляем по Москве и разберём
          названия улиц за 2 часа.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            type="button"
            onClick={() => openModal("final-cta")}
            className="px-10 py-5 bg-white text-primary rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
          >
            Записаться на прогулку
          </button>
          <button
            type="button"
            onClick={scrollToEvents}
            className="px-10 py-5 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
          >
            Смотреть расписание
          </button>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 inline-block">
          <p className="text-white font-semibold">📅 Следующая прогулка: 25 января в 14:00</p>
        </div>
      </div>
    </section>
  );
}
