import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Неглинка — Русская Ясна",
  description: "Направление Неглинка в образовательном сообществе Русская Ясна",
};

export default function NeglinkaPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl font-bold text-primary mb-6">
          Неглинка
        </h1>
        <p className="text-lg text-gray-600">
          Страница направления в разработке...
        </p>
      </div>
    </main>
  );
}
