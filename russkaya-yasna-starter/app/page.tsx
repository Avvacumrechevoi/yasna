export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl text-center space-y-8">
        <h1 className="font-serif text-6xl font-bold text-primary">
          Русская Ясна
        </h1>
        
        <p className="text-2xl text-gray-600 font-light">
          Русское учение о жизни
        </p>
        
        <div className="pt-8 space-y-4">
          <p className="text-lg text-gray-700">
            🚀 Проект готов к разработке!
          </p>
          <p className="text-md text-gray-600">
            Начните с <strong>ПРОМПТА 1</strong> из файла <code className="bg-gray-100 px-2 py-1 rounded">CURSOR_PROMPTS.md</code>
          </p>
        </div>

        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <div className="p-6 rounded-lg bg-primary-50 border border-primary-200">
            <h3 className="font-semibold text-primary mb-2">✅ Next.js 14</h3>
            <p className="text-sm text-gray-600">App Router готов</p>
          </div>
          
          <div className="p-6 rounded-lg bg-secondary-50 border border-secondary-200">
            <h3 className="font-semibold text-secondary-700 mb-2">✅ TypeScript</h3>
            <p className="text-sm text-gray-600">Строгая типизация</p>
          </div>
          
          <div className="p-6 rounded-lg bg-accent-50 border border-accent-200">
            <h3 className="font-semibold text-accent mb-2">✅ Tailwind CSS</h3>
            <p className="text-sm text-gray-600">Кастомные цвета</p>
          </div>
        </div>

        <div className="pt-8 text-sm text-gray-500">
          <p>Запустите <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code> для начала разработки</p>
        </div>
      </div>
    </main>
  );
}
