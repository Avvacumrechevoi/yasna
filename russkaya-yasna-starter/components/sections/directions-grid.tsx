import Link from "next/link"

const directions = [
  {
    title: "Neglinka",
    slug: "neglinka",
    description: "City layers, hidden rivers, and urban memory.",
  },
  {
    title: "Litprosvet",
    slug: "litprosvet",
    description: "Literacy, reading circles, and storytelling practice.",
  },
  {
    title: "Astronevod",
    slug: "astronevod",
    description: "Night sky navigation, calendars, and celestial lore.",
  },
  {
    title: "Prazdniki",
    slug: "prazdniki",
    description: "Seasonal rituals, community gatherings, and traditions.",
  },
  {
    title: "Dzhiva",
    slug: "dzhiva",
    description: "Living practices, crafts, and mindful routines.",
  },
  {
    title: "Marshruty",
    slug: "marshruty",
    description: "Field routes, expeditions, and cultural journeys.",
  },
  {
    title: "Izvod",
    slug: "izvod",
    description: "Language research, etymology, and spoken heritage.",
  },
  {
    title: "Teremok",
    slug: "teremok",
    description: "Family learning, games, and early education.",
  },
]

export function DirectionsGrid() {
  return (
    <section id="directions" className="bg-white/70 px-6 py-16">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Directions
          </p>
          <h2 className="text-3xl font-serif text-primary">
            Eight paths of study
          </h2>
          <p className="max-w-2xl text-base text-gray-600">
            Each direction focuses on a unique aspect of language, culture, and
            lived experience. Explore the themes and join the circles that
            resonate with you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {directions.map((direction) => (
            <Link
              key={direction.slug}
              href={`/${direction.slug}`}
              className="group rounded-xl border border-secondary-100 bg-white p-5 transition hover:-translate-y-1 hover:border-secondary-300 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-primary transition-colors group-hover:text-primary-700">
                {direction.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {direction.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
