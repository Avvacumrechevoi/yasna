import { Button } from "@/components/ui/button";

const participationSteps = [
  {
    title: "Выберите формат",
    description: "Курсы, лекции, встречи или исследовательские группы.",
  },
  {
    title: "Подключитесь к сообществу",
    description: "Получайте поддержку наставников и единомышленников.",
  },
  {
    title: "Идите своим ритмом",
    description: "Гибкий график и практики для устойчивого развития.",
  },
];

export function ParticipationSection() {
  return (
    <section id="participation" className="px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary-700">
            Как участвовать
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-primary md:text-4xl">
            Начните путь вместе с Русской Ясной
          </h2>
          <p className="mt-3 text-text/70">
            Мы помогаем подобрать формат участия и поддерживаем на каждом
            этапе.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {participationSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm text-text/70">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="secondary">Получить консультацию</Button>
        </div>
      </div>
    </section>
  );
}
