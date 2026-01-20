import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const rays = Array.from({ length: 12 });

export default function AboutMethod() {
  return (
    <div className="min-h-screen bg-white text-text">
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-serif font-bold text-primary mb-6">
              Метод Русская Ясна
            </h1>
            <p className="text-2xl text-gray-700 leading-relaxed">
              Всеобщий структурный закон мира, открытый древними славянами
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary mb-8">Что такое Ясна?</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>Ясна</strong> — это способ описания природы. Древние славяне
                открыли, что внутреннее устройство всех явлений природы одинаково.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Любое явление можно <strong>"разложить по полочкам"</strong> — построить
                его Ясну. Ясная Звезда имеет 12 лучей — 12 полочек.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-12 my-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Ясная Звезда</h3>
                <p className="text-gray-700">12 полочек для разложения любого явления</p>
              </div>

              <div className="bg-white rounded-2xl p-12 shadow-lg">
                <div className="w-96 h-96 mx-auto relative">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
                    {rays.map((_, index) => {
                      const angle = (index * 30 - 90) * (Math.PI / 180);
                      const x2 = 100 + 80 * Math.cos(angle);
                      const y2 = 100 + 80 * Math.sin(angle);
                      return (
                        <line
                          key={index}
                          x1="100"
                          y1="100"
                          x2={x2}
                          y2={y2}
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      );
                    })}
                    <circle cx="100" cy="100" r="15" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Пример: Разбираем слово "СУТКИ"
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>🤷</span> Что обычно знаем
                </h3>
                <p className="text-gray-700">
                  "Сутки" — период из 24 часов, день и ночь вместе
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary-600 text-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>💡</span> Что раскрывает Ясна
                </h3>
                <p>
                  "Сутки" = <strong>СТЫК</strong> дня и ночи
                  <br />
                  Со-стыковка двух половин в одно целое
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h4 className="font-bold text-xl mb-4">🔗 Связи:</h4>
              <div className="space-y-3 text-gray-700">
                <p>• <strong>Стык</strong> — место соединения</p>
                <p>• <strong>Состыковка</strong> — соединение двух частей</p>
                <p>• <strong>Соткать</strong> — соединить нити в полотно</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Три Креста и Четыре Праны
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Три Креста</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-primary-50 rounded-xl">
                    <div className="font-bold text-primary mb-2">1. Крест Света (Бытия)</div>
                    <p className="text-sm text-gray-700">
                      День и ночь, свет и тьма, единство и борьба противоположностей
                    </p>
                  </div>

                  <div className="p-4 bg-accent-50 rounded-xl">
                    <div className="font-bold text-accent mb-2">
                      2. Крест Управления (Тепловой)
                    </div>
                    <p className="text-sm text-gray-700">
                      Тепло и холод, рост и спад, управление процессами
                    </p>
                  </div>

                  <div className="p-4 bg-secondary-50 rounded-xl">
                    <div className="font-bold text-secondary-700 mb-2">
                      3. Крест Веры (Духовный)
                    </div>
                    <p className="text-sm text-gray-700">
                      Духовное измерение, вера, надежда, любовь
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Четыре Праны</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-xl">
                    <div className="font-bold text-green-700 mb-2">ШЭ (Земля)</div>
                    <p className="text-sm text-gray-700">Устойчивость, твёрдость, основа</p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-xl">
                    <div className="font-bold text-blue-700 mb-2">ФО (Вода)</div>
                    <p className="text-sm text-gray-700">Спад, понижение, текучесть</p>
                  </div>

                  <div className="p-4 bg-sky-50 rounded-xl">
                    <div className="font-bold text-sky-700 mb-2">ЦИ (Воздух)</div>
                    <p className="text-sm text-gray-700">Покой неустойчивый, лёгкость</p>
                  </div>

                  <div className="p-4 bg-red-50 rounded-xl">
                    <div className="font-bold text-red-700 mb-2">ХА (Огонь)</div>
                    <p className="text-sm text-gray-700">Рост, повышение, энергия</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Попробуй метод на практике</h2>
            <p className="text-xl mb-8">
              Приходи на натурный урок — увидишь как работает Ясна
            </p>
            <Link
              href="/#directions"
              className="inline-flex px-10 py-5 bg-white text-primary rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              Выбрать направление
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
