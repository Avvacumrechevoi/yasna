import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-secondary-700">Ошибка 404</p>
        <h1 className="mt-3 text-3xl font-semibold text-primary">Страница не найдена</h1>
        <p className="mt-4 text-sm text-text/70">
          Такой страницы нет или она была перемещена. Попробуйте вернуться на главную или
          выбрать нужный раздел.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95"
          >
            На главную
          </Link>
          <Link
            href="/#directions"
            className="rounded-full border border-primary-100 px-6 py-3 text-sm font-semibold text-text/80 transition-transform hover:scale-[1.02] active:scale-95"
          >
            Направления
          </Link>
        </div>
      </div>
    </main>
  );
}
