import { BookOpen, CalendarDays, Compass, Stars } from "lucide-react";

const features = [
  {
    title: "8 направлений",
    description: "Исследуйте традицию через литпросвет, астроневод и другие пути.",
    icon: BookOpen,
  },
  {
    title: "Живые встречи",
    description: "Натурные уроки, городские маршруты и совместные праздники.",
    icon: CalendarDays,
  },
  {
    title: "Путь и поддержка",
    description: "Наставники, сообщества и практики для устойчивого роста.",
    icon: Compass,
  },
  {
    title: "Культура и смыслы",
    description: "Глубокое погружение в язык, историю и мировоззрение.",
    icon: Stars,
  },
];

export function FeaturesSection() {
  return (
    <section id="directions" className="px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-1" aria-hidden="true">
          <span id="direction-neglinka" className="block scroll-mt-28" />
          <span id="direction-litprosvet" className="block scroll-mt-28" />
          <span id="direction-astronevod" className="block scroll-mt-28" />
          <span id="direction-prazdniki" className="block scroll-mt-28" />
          <span id="direction-dzhiva" className="block scroll-mt-28" />
          <span id="direction-marshruty" className="block scroll-mt-28" />
          <span id="direction-izvod" className="block scroll-mt-28" />
          <span id="direction-teremok" className="block scroll-mt-28" />
        </div>
        <div className="mb-10 flex flex-col gap-3 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary-700">
            Что внутри
          </p>
          <h2 className="text-3xl font-semibold text-primary md:text-4xl">
            Пространство для обучения и практики
          </h2>
          <p className="text-text/70">
            Соединяем знания, опыт и вдохновение в едином образовательном
            поле.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-50">
                  <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-text">{feature.title}</h3>
                <p className="mt-2 text-sm text-text/70">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
