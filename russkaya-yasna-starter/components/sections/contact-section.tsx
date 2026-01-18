import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="bg-primary-50 px-6 py-16">
      <div className="mx-auto w-full max-w-5xl space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Contact
          </p>
          <h2 className="text-3xl font-serif text-primary">Stay in touch</h2>
          <p className="max-w-2xl text-base text-gray-700">
            Share your interests and we will guide you to the right direction,
            upcoming gatherings, and learning circles.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button type="button">Request a welcome call</Button>
          <Button variant="ghost" type="button">
            Download the community guide
          </Button>
        </div>
      </div>
    </section>
  )
}
