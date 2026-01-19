"use client";

import * as React from "react";

const steps = [
  {
    id: 1,
    title: "Разбираем слово",
    description: "Берём слово и раскладываем на части",
    example: "\"Район\" → rain, облако",
    color: "primary",
    emoji: "📖",
  },
  {
    id: 2,
    title: "Ищем логику",
    description: "Проверяем здравым смыслом",
    example: "Логично? Да, облако видно",
    color: "accent",
    emoji: "💡",
  },
  {
    id: 3,
    title: "Проверяем архивами",
    description: "Смотрим старые документы",
    example: "Карты XVIII века",
    color: "secondary",
    emoji: "📜",
  },
  {
    id: 4,
    title: "Идём на практику",
    description: "Натурные уроки, прогулки",
    example: "Прогулка по Москве",
    color: "green",
    emoji: "🚶",
  },
];

export function MethodSection() {
  const scrollToEvents = React.useCallback(() => {
    const target = document.getElementById("events");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section id="method" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Как работает метод
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Четыре простых шага от слова к пониманию мира
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step) => {
            const topBorder =
              step.color === "primary"
                ? "border-primary"
                : step.color === "accent"
                ? "border-accent"
                : step.color === "secondary"
                ? "border-secondary"
                : "border-green-600";
            const badge =
              step.color === "primary"
                ? "bg-primary"
                : step.color === "accent"
                ? "bg-accent"
                : step.color === "secondary"
                ? "bg-secondary"
                : "bg-green-600";
            const title =
              step.color === "primary"
                ? "text-primary"
                : step.color === "accent"
                ? "text-accent"
                : step.color === "secondary"
                ? "text-secondary-700"
                : "text-green-700";
            const example =
              step.color === "primary"
                ? "bg-primary-50 border-primary"
                : step.color === "accent"
                ? "bg-accent-50 border-accent"
                : step.color === "secondary"
                ? "bg-secondary-50 border-secondary"
                : "bg-green-50 border-green-600";

            return (
              <div key={step.id} className="relative">
                <div
                  className={`lg:mx-auto mb-6 w-16 h-16 ${badge} text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg hover:scale-110 transition-transform`}
                >
                  {step.id}
                </div>

                <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 ${topBorder}`}>
                  <h3 className={`text-xl font-bold ${title} mb-4 flex items-center gap-2`}>
                    <span className="text-3xl">{step.emoji}</span>
                    {step.title}
                  </h3>

                  <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>

                  <div className={`rounded-xl p-4 border-l-4 ${example}`}>
                    <p className="font-semibold text-sm mb-1">Пример:</p>
                    <p className="text-sm text-gray-700">{step.example}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 text-center shadow-lg">
          <h4 className="text-2xl font-bold mb-4">Результат</h4>
          <p className="text-lg mb-6 leading-relaxed">
            Понимаешь ПОЧЕМУ так называется.
            <br />
            Видишь систему вместо хаоса.
            <br />
            Можешь сам исследовать дальше.
          </p>
          <button
            type="button"
            onClick={scrollToEvents}
            className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
          >
            Попробовать на натурном уроке
          </button>
        </div>
      </div>
    </section>
  );
}
