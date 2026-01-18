import { Button } from "@/components/ui/button";

const title = "Астроневод";
const description =
  "Наблюдения за небом, календарные циклы и символика для понимания природного ритма.";

export default function AstronevodPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary-700">
          Направление
        </p>
        <h1 className="text-4xl font-semibold text-primary">{title}</h1>
        <p className="text-lg text-text/80">{description}</p>
        <div className="flex flex-wrap gap-4">
          <Button>Записаться</Button>
          <Button variant="secondary">Программа</Button>
        </div>
      </div>
    </main>
  );
}
