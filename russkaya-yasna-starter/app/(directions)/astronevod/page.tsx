import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Астроневод — Русская Ясна",
  description: "Направление Астроневод в образовательном сообществе Русская Ясна",
};

export default function AstronevoдPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl font-bold text-primary mb-4">
          Астроневод
        </h1>
        <p className="text-lg text-gray-600">
          Страница направления в разработке
        </p>
      </div>
    </main>
  );
}
