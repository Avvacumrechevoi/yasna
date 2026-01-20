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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 opacity-60" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center justify-center mb-8 animate-fade-in">
          <div className="px-6 py-2.5 rounded-full bg-white/60 backdrop-blur-xl border border-gray-200/50 shadow-sm">
            <span className="text-sm font-medium text-gray-700 tracking-wide">
              Познание через родной язык
            </span>
          </div>
        </div>

        <h1 className="mb-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <span className="block text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 tracking-tight leading-none mb-4">
            Русская Ясна
          </span>
        </h1>

        <p
          className="mx-auto max-w-3xl mb-12 text-xl md:text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed tracking-tight animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          Восстанавливаем утраченные знания
          <br className="hidden sm:block" />
          русского народа через родной язык
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <button
            type="button"
            onClick={() => scrollToSection("directions")}
            className="group relative px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl"
          >
            <span className="relative z-10">Выбрать направление</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("about-project")}
            className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-gray-900 hover:scale-[1.02] transition-all hover:shadow-xl backdrop-blur-sm"
          >
            Узнать больше
          </button>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-12 justify-center items-center text-center animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <div className="group cursor-default">
            <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">
              8
            </div>
            <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
              направлений
            </div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-gray-200" />

          <div className="group cursor-default">
            <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">
              200+
            </div>
            <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
              участников
            </div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-gray-200" />

          <div className="group cursor-default">
            <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">
              5
            </div>
            <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
              лет практики
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full mx-auto animate-scroll" />
        </div>
      </div>
    </section>
  );
}
