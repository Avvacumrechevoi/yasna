export function CommunitySection() {
  return (
    <section id="community" className="px-6 py-16">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Community
          </p>
          <h2 className="text-3xl font-serif text-primary">
            Learn together and share knowledge
          </h2>
          <p className="max-w-2xl text-base text-gray-600">
            We bring together researchers, educators, and families for study
            circles, field lessons, and collaborative projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {["Study circles", "Field lessons", "Community library"].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-secondary-100 bg-white p-6"
            >
              <p className="text-lg font-semibold text-primary">{item}</p>
              <p className="mt-2 text-sm text-gray-600">
                Curated sessions that deepen understanding through guided
                practice and shared discussion.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
