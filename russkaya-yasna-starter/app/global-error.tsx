"use client";

import * as React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="ru">
      <body className="bg-background text-text">
        <main className="flex min-h-screen items-center justify-center px-6 py-20">
          <div className="max-w-xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-secondary-700">Ошибка</p>
            <h1 className="mt-3 text-3xl font-semibold text-primary">Не удалось загрузить сайт</h1>
            <p className="mt-4 text-sm text-text/70">
              Попробуйте перезагрузить страницу. Если ошибка повторяется, свяжитесь с нами.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={reset}
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95"
              >
                Перезагрузить
              </button>
              <a
                href="/#join"
                className="rounded-full border border-primary-100 px-6 py-3 text-sm font-semibold text-text/80 transition-transform hover:scale-[1.02] active:scale-95"
              >
                Оставить заявку
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
