interface DirectionPageProps {
  title: string
  tagline: string
  description: string
}

export function DirectionPage({ title, tagline, description }: DirectionPageProps) {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto w-full max-w-3xl space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
          Direction
        </p>
        <div className="space-y-3">
          <h1 className="text-4xl font-serif text-primary">{title}</h1>
          <p className="text-lg text-gray-700">{tagline}</p>
        </div>
        <div className="rounded-xl border border-secondary-100 bg-white p-6 text-sm text-gray-600">
          {description}
        </div>
      </div>
    </main>
  )
}
