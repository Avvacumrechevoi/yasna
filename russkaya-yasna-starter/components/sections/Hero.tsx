"use client";

import * as React from "react";

const buildings = [1, 2, 3, 4, 5];

const exampleCards = [
  {
    emoji: "📖",
    title: "\"Сутки\" = стык",
    description: "Со-стыковка дня и ночи",
    tone: "from-primary-50 to-primary-100",
    text: "text-gray-900",
  },
  {
    emoji: "🌳",
    title: "\"Крест\" = ветвь",
    description: "Ветвь дерева с ответвлениями",
    tone: "from-accent-50 to-accent-100",
    text: "text-gray-900",
  },
  {
    emoji: "☁️",
    title: "\"Район\" = облако",
    description: "Территория под облаком-куполом",
    tone: "from-primary to-accent",
    text: "text-white",
    isHighlight: true,
  },
];

export function HeroSection() {
  const scrollToSection = React.useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-background via-primary-50 to-background relative overflow-hidden" id="about">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              Познание через родной язык
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-primary leading-tight">
            Ответы о мире<br />
            записаны в словах
          </h1>

          <div className="space-y-4">
            <p className="text-2xl lg:text-3xl text-gray-700 font-light leading-relaxed">
              Почему территория — "район"?<br />
              Почему день и ночь — "сутки"?
            </p>
            <p className="text-xl text-gray-600">
              Русский язык отвечает сам.<br />
              Разбираем слово — получаем ответ.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-l-4 border-primary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Каждое русское слово объясняет само себя.</strong>
              <br />
              Нужно только знать КАК его разобрать.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Интерактивный пример
              </p>
            </div>

            <div className="mb-6 relative h-32 bg-gradient-to-b from-blue-100 to-green-50 rounded-xl overflow-hidden">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 group-hover:scale-110 transition-transform duration-500">
                <svg width="120" height="60" viewBox="0 0 120 60">
                  <ellipse cx="35" cy="35" rx="25" ry="20" fill="#E0E7FF" opacity="0.9" />
                  <ellipse cx="60" cy="30" rx="30" ry="25" fill="#DDD6FE" opacity="0.9" />
                  <ellipse cx="85" cy="35" rx="25" ry="20" fill="#E0E7FF" opacity="0.9" />
                </svg>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-16 bg-green-200 flex items-center justify-center">
                <div className="flex gap-2">
                  {buildings.map((item) => (
                    <div key={item} className="w-4 h-6 bg-gray-600 rounded-t" />
                  ))}
                </div>
              </div>

              <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-semibold">
                ☁️ Облако
              </div>
              <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-semibold">
                🏘️ Территория
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="text-2xl">☁️</span>
                "Район" = территория под одним облаком
              </p>

              <p className="text-gray-700">
                Раньше территорию называли по <strong>облаку</strong>, которое её накрывает как
                купол.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-semibold text-gray-800 mb-2">🔗 Видишь связь?</p>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>• <strong>Rain</strong> (англ. дождь) = вода из облака-района</p>
                  <p>• <strong>Область</strong> = облачность (много облаков)</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-accent font-bold text-center text-lg">
                ✨ Слово само объяснило себя!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={() => scrollToSection("method")}
              className="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-600 transition-all shadow-lg"
            >
              Узнать метод
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("directions")}
              className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary-50 transition-all"
            >
              Смотреть примеры
            </button>
          </div>

          <div className="flex gap-8 pt-6 text-sm">
            <div className="text-center">
              <div className="font-bold text-3xl text-primary mb-1">8</div>
              <div className="text-gray-600">направлений</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-3xl text-primary mb-1">200+</div>
              <div className="text-gray-600">участников</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-3xl text-primary mb-1">5</div>
              <div className="text-gray-600">лет практики</div>
            </div>
          </div>
        </div>

        <div className="relative lg:pl-8">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Это работает для любого слова
            </h3>

            <div className="space-y-4 mb-8">
              {exampleCards.map((card) => (
                <div
                  key={card.title}
                  className={`p-5 bg-gradient-to-r ${card.tone} rounded-xl hover:shadow-md transition-all cursor-pointer ${card.isHighlight ? "text-white shadow-lg hover:shadow-xl" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{card.emoji}</div>
                    <div>
                      <div className={`font-bold mb-1 text-lg ${card.text}`}>{card.title}</div>
                      <div className={`text-sm ${card.isHighlight ? "text-white/90" : "text-gray-700"}`}>
                        {card.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl p-6">
              <p className="text-center font-semibold text-gray-800 text-lg">
                Таких слов в русском языке — тысячи
              </p>
              <p className="text-center text-sm text-gray-600 mt-2">
                Каждое слово — ключ к пониманию мира
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
