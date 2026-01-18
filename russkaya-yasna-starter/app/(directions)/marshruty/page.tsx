import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Маршруты — Русская Ясна",
  description: "Направление Маршруты в образовательном сообществе Русская Ясна",
};

export default function MarshrutyPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl font-bold text-primary mb-4">
          Маршруты
        </h1>
        <p className="text-lg text-gray-600">
          Страница направления в разработке
        </p>
      </div>
    </main>
  );
}
