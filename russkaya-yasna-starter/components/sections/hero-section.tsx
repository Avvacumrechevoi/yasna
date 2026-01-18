import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Educational community
          </p>
          <h1 className="text-4xl font-serif text-primary sm:text-6xl">
            Russkaya Yasna
          </h1>
          <p className="max-w-2xl text-lg text-gray-700">
            A space for learning the Russian language, history, and culture
            through eight research directions, gatherings, and field lessons.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button type="button">Join the community</Button>
          <Button variant="secondary" type="button">
            Get program updates
          </Button>
        </div>
      </div>
    </section>
  )
}
