import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="about" className="px-6 pb-12 pt-16 md:pt-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <span className="rounded-full bg-secondary-100 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-secondary-700">
          Образовательное сообщество
        </span>

        <h1 className="mt-6 text-4xl font-bold text-primary md:text-6xl">
          Русская Ясна
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-text/80 md:text-xl">
          Исследуем язык, историю и культуру через практики, занятия и
          направления, которые объединяют людей вокруг русской традиции.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button>Записаться</Button>
          <Button variant="secondary">Узнать больше</Button>
        </div>
      </div>
    </section>
  );
}
