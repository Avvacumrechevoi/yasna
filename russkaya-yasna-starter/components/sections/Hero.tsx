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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-amber-500 to-amber-300 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-red-800 to-red-600 rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
        <h1 className="mb-8 animate-fade-in-up">
          <span className="block text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent tracking-tight leading-none mb-4">
            Русская Ясна
          </span>
        </h1>

        <p
          className="mx-auto max-w-3xl mb-12 text-xl md:text-2xl lg:text-3xl text-slate-700 font-light leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          Древнее учение о мире,
          <br className="hidden sm:block" />
          записанное в русском языке
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <button
            type="button"
            onClick={() => scrollToSection("directions")}
            className="group relative px-10 py-5 bg-gradient-to-r from-blue-800 to-blue-700 text-white rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Выбрать направление
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <button
            type="button"
            onClick={() => window.location.assign("/about-method")}
            className="px-10 py-5 bg-white/80 backdrop-blur-sm text-blue-900 rounded-full font-semibold text-lg border-2 border-blue-200 hover:border-blue-800 hover:bg-white hover:scale-105 transition-all hover:shadow-xl"
          >
            Узнать о методе
          </button>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-12 justify-center items-center text-center animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="group cursor-default">
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-blue-900 to-blue-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              8
            </div>
            <div className="text-sm text-slate-600 uppercase tracking-wider font-medium">
              направлений
            </div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-amber-400 to-transparent" />

          <div className="group cursor-default">
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-blue-900 to-blue-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              200+
            </div>
            <div className="text-sm text-slate-600 uppercase tracking-wider font-medium">
              участников
            </div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-amber-400 to-transparent" />

          <div className="group cursor-default">
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-blue-900 to-blue-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              5
            </div>
            <div className="text-sm text-slate-600 uppercase tracking-wider font-medium">
              лет практики
            </div>
          </div>
        </div>

        <div className="mt-16 opacity-20 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <svg className="w-32 h-8 mx-auto" viewBox="0 0 200 40" fill="none">
            <path
              d="M10 20 Q 30 10, 50 20 T 90 20 T 130 20 T 170 20"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#d97706" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-800/30 rounded-full p-1">
          <div className="w-1 h-2 bg-gradient-to-b from-blue-800 to-amber-600 rounded-full mx-auto animate-scroll" />
        </div>
      </div>
    </section>
  );
}
