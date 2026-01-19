"use client";

import * as React from "react";

export function WhyWordsSection() {
  return (
    <section className="py-20 bg-white" id="why-words">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Почему именно через слова?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Потому что в русском языке каждое слово — ответ на вопрос "почему так устроено"
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-gray-200 transition-all">
              <span className="text-5xl">🤔</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Проблема</h3>
            <p className="text-gray-700 leading-relaxed">
              Много вопросов о мире остаются без ответа. Почему так называется? Откуда взялось?
            </p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-105 transition-all shadow-lg">
              <span className="text-5xl">💡</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Решение</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Русский язык хранит ответы.</strong> Разбираем слово — понимаем суть.
            </p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-green-200 transition-all">
              <span className="text-5xl">✨</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-green-700">Результат</h3>
            <p className="text-gray-700 leading-relaxed">
              Видишь логику там, где была загадка. Понимаешь систему вместо хаоса.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary-50 via-accent-50 to-primary-50 rounded-3xl p-10 lg:p-16 shadow-xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
              Разбираем слово "РАЙОН"
            </h3>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🤷</span>
                  <h4 className="font-bold text-xl text-gray-800">Что мы обычно знаем</h4>
                </div>
                <p className="text-gray-700 text-lg mb-3">
                  <strong>"Район"</strong> — участок города
                </p>
                <p className="text-sm text-gray-600 italic">Почему так называется — непонятно</p>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary-600 text-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">💡</span>
                  <h4 className="font-bold text-xl">Что раскрывает разбор</h4>
                </div>
                <p className="text-lg mb-3">
                  <strong>"Район"</strong> = территория под облаком
                </p>
                <p className="text-sm text-white/90">
                  Территорию называли по облаку-куполу над ней
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-l-4 border-accent shadow-md">
              <h4 className="font-bold text-xl text-gray-900 mb-6">
                🔗 Идём дальше — находим связи:
              </h4>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent font-bold">1</span>
                  </div>
                  <p className="text-gray-700">
                    Английское <strong>"rain"</strong> (дождь) = вода из облака-района
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent font-bold">2</span>
                  </div>
                  <p className="text-gray-700">
                    <strong>"Область"</strong> = облачность (несколько облаков)
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent font-bold">3</span>
                  </div>
                  <p className="text-gray-700">
                    Территория получила название по природному явлению
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-lg">
                <p className="text-2xl font-bold text-primary mb-2">
                  ✨ Одно слово раскрыло целую систему!
                </p>
                <p className="text-gray-600">Теперь понятно ПОЧЕМУ район = район</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
