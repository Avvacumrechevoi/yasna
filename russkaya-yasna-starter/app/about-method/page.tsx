import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function AboutMethod() {
  return (
    <div className="min-h-screen bg-white text-text">
      <Header />
      <main>
        <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
              Метод Русская Ясна
            </h1>
            <p className="text-2xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Всеобщий структурный закон мира,
              <br />
              открытый древними славянами
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Что такое Ясна?</h2>

            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
              <p>
                <strong>Ясна</strong> — это способ описания природы. Древние славяне
                открыли, что внутреннее устройство всех явлений природы одинаково.
              </p>

              <p>
                Любое явление можно <strong>"разложить по полочкам"</strong> — построить
                его Ясну. Ясная Звезда имеет 12 лучей — 12 полочек.
              </p>

              <p>
                Каждый луч — это одна грань явления. Когда все 12 граней разложены,
                явление становится <em>ясным</em> в понимании.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
              12 полочек Ясной Звезды
            </h2>

            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="text-center text-slate-500">
                [Здесь будет интерактивная схема]
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
              Пример: разбираем слово &quot;СУТКИ&quot;
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-3xl">🤷</span>
                  Что обычно знаем
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  <strong>&quot;Сутки&quot;</strong> — период из 24 часов, день и ночь
                  вместе.
                </p>
                <p className="text-sm text-slate-500 mt-2 italic">
                  Почему так называется — непонятно
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-3xl">💡</span>
                  Что раскрывает Ясна
                </h3>
                <p className="leading-relaxed">
                  <strong>&quot;Сутки&quot;</strong> = <strong>СТЫК</strong> дня и ночи
                </p>
                <p className="text-sm text-blue-100 mt-2">
                  Со-стыковка двух половин в одно целое
                </p>
              </div>
            </div>

            <div className="bg-white border border-blue-200 rounded-2xl p-8">
              <h4 className="font-bold text-xl mb-6 text-blue-900">
                🔗 Родственные слова:
              </h4>
              <div className="grid md:grid-cols-3 gap-6 text-slate-700">
                <div>
                  <div className="font-bold text-blue-700 mb-2">Стык</div>
                  <div className="text-sm">место соединения двух частей</div>
                </div>
                <div>
                  <div className="font-bold text-blue-700 mb-2">Состыковка</div>
                  <div className="text-sm">соединение, сборка частей</div>
                </div>
                <div>
                  <div className="font-bold text-blue-700 mb-2">Соткать</div>
                  <div className="text-sm">соединить нити в полотно</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Попробуй метод на практике</h2>
            <p className="text-xl mb-8 text-blue-100">
              Приходи на натурный урок — увидишь как работает Ясна
            </p>
            <Link
              href="/#directions"
              className="inline-flex px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:scale-105"
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
