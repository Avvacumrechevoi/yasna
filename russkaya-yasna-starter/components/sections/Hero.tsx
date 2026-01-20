"use client";

import * as React from "react";

export function HeroSection() {
  const scrollToSection = React.useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-primary-50"
    >
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Познание через родной язык
          </span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-serif font-bold text-primary mb-8 leading-tight">
          Русская Ясна
        </h1>

        <p className="text-2xl lg:text-3xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
          Восстанавливаем утраченные знания
          <br />
          русского народа через родной язык
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            type="button"
            onClick={() => scrollToSection("directions")}
            className="px-10 py-5 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-600 transition-all shadow-xl"
          >
            Выбрать направление
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("about-project")}
            className="px-10 py-5 border-2 border-primary text-primary rounded-xl font-bold text-lg hover:bg-primary-50 transition-all"
          >
            Узнать больше
          </button>
        </div>

        <div className="flex gap-12 justify-center text-gray-600">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">8</div>
            <div className="text-sm">направлений</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">200+</div>
            <div className="text-sm">участников</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">5</div>
            <div className="text-sm">лет практики</div>
          </div>
        </div>
      </div>
    </section>
  );
}
