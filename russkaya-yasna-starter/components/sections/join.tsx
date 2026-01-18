import { Button } from "@/components/ui/button";

export function JoinSection() {
  return (
    <section id="join" className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-8 py-12 text-center text-white md:px-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              Вступить
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Присоединяйтесь к Русской Ясне
            </h2>
            <p className="mt-3 text-white/80">
              Получите доступ к направлениям, встречам и поддержке сообщества.
            </p>
          </div>

          <Button className="rounded-full bg-white px-8 text-primary hover:bg-white/90">
            Оставить заявку
          </Button>
        </div>
      </div>
    </section>
  );
}
