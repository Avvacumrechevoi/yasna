const events = [
  {
    title: "Открытая встреча «Русское слово»",
    date: "Февраль 2026",
    location: "Онлайн",
  },
  {
    title: "Маршрут по старой Москве",
    date: "Март 2026",
    location: "Москва",
  },
  {
    title: "Праздник весеннего круга",
    date: "Апрель 2026",
    location: "Подмосковье",
  },
];

export function EventsSection() {
  return (
    <section id="events" className="px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary-700">
            Мероприятия
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-primary md:text-4xl">
            Встречи и события сообщества
          </h2>
          <p className="mt-3 text-text/70">
            Регулярные события помогают жить традицией и встречаться вживую.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-secondary-700">
                {event.date}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-text">
                {event.title}
              </h3>
              <p className="mt-2 text-sm text-text/70">{event.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
