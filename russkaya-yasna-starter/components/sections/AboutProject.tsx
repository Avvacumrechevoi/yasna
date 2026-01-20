const rays = [
  { angle: 90, num: "0", name: "Полночь", color: "#1e3a8a" },
  { angle: 60, num: "1", name: "Первый свет", color: "#1e40af" },
  { angle: 30, num: "2", name: "Заря", color: "#2563eb" },
  { angle: 0, num: "3", name: "Рассвет", color: "#3b82f6" },
  { angle: 330, num: "4", name: "Подъём", color: "#60a5fa" },
  { angle: 300, num: "5", name: "Утро", color: "#93c5fd" },
  { angle: 270, num: "6", name: "Полдень", color: "#f59e0b" },
  { angle: 240, num: "7", name: "День", color: "#fbbf24" },
  { angle: 210, num: "8", name: "Вечер", color: "#fb923c" },
  { angle: 180, num: "9", name: "Закат", color: "#f97316" },
  { angle: 150, num: "10", name: "Сумерки", color: "#ea580c" },
  { angle: 120, num: "11", name: "Тьма", color: "#991b1b" },
];

export function AboutProjectSection() {
  return (
    <section
      id="about-project"
      className="py-20 bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Пример: разбираем сутки
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Любое явление можно разложить по 12 полочкам и увидеть его структуру
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-blue-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <svg viewBox="0 0 500 500" className="w-full h-auto max-w-md mx-auto">
                <circle
                  cx="250"
                  cy="250"
                  r="45"
                  fill="url(#centerGradient)"
                  className="drop-shadow-lg"
                />
                <text
                  x="250"
                  y="258"
                  textAnchor="middle"
                  className="fill-white font-bold"
                  style={{ fontSize: "18px" }}
                >
                  ЯСНА
                </text>

                {rays.map((ray, index) => {
                  const angle = (ray.angle - 90) * (Math.PI / 180);
                  const x1 = 250;
                  const y1 = 250;
                  const x2 = 250 + 140 * Math.cos(angle);
                  const y2 = 250 + 140 * Math.sin(angle);
                  const labelX = 250 + 190 * Math.cos(angle);
                  const labelY = 250 + 190 * Math.sin(angle);

                  return (
                    <g key={index} className="group">
                      <line
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={ray.color}
                        strokeWidth="2.5"
                        opacity="0.7"
                      />

                      <circle cx={x2} cy={y2} r="14" fill={ray.color} className="drop-shadow-md" />
                      <text
                        x={x2}
                        y={y2 + 5}
                        textAnchor="middle"
                        className="fill-white font-bold pointer-events-none"
                        style={{ fontSize: "12px" }}
                      >
                        {ray.num}
                      </text>

                      <text
                        x={labelX}
                        y={labelY}
                        textAnchor="middle"
                        className="fill-slate-600 font-medium pointer-events-none"
                        style={{ fontSize: "11px" }}
                      >
                        {ray.name}
                      </text>
                    </g>
                  );
                })}

                <defs>
                  <radialGradient id="centerGradient">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            <div className="space-y-8">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  💡 Что даёт такое разложение
                </h3>
                <div className="text-slate-700 text-sm space-y-2 leading-relaxed">
                  <p>
                    Разложив <strong>сутки</strong> по 12 полочкам, мы видим, что каждое
                    время имеет свои качества
                  </p>
                  <p className="text-xs text-slate-600 mt-3">
                    <span className="inline-block px-2 py-1 bg-blue-100 rounded">0, 6</span>{" "}
                    — ключевые точки (полночь, полдень)
                    <br />
                    <span className="inline-block px-2 py-1 bg-amber-100 rounded mt-1">
                      3, 9
                    </span>{" "}
                    — переходы (рассвет, закат)
                    <br />
                    <span className="inline-block px-2 py-1 bg-slate-100 rounded mt-1">
                      1, 7
                    </span>{" "}
                    — начало изменений (свет, тепло)
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-4">📖 Примеры времён</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200">
                    <div className="w-3 h-3 rounded-full bg-blue-900 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-blue-900 text-sm mb-1">
                        Полночь (0)
                      </div>
                      <div className="text-xs text-slate-600">
                        Глубокая тьма, покой, середина ночи
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200">
                    <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-blue-700 text-sm mb-1">Рассвет (3)</div>
                      <div className="text-xs text-slate-600">
                        Солнце выходит, начало дня, резкий переход
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200">
                    <div className="w-3 h-3 rounded-full bg-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-amber-700 text-sm mb-1">Полдень (6)</div>
                      <div className="text-xs text-slate-600">
                        Солнце в зените, пик света и тепла
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200">
                    <div className="w-3 h-3 rounded-full bg-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-orange-700 text-sm mb-1">Закат (9)</div>
                      <div className="text-xs text-slate-600">
                        Солнце садится, переход к ночи
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 mb-3">
                  🔍 Видим закономерности
                </h3>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-700" />
                    <span>
                      <strong>0, 4, 8</strong> — устойчивые времена (долгие)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>
                      <strong>1, 5, 9</strong> — времена спада
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-sky-400" />
                    <span>
                      <strong>2, 6, 10</strong> — времена покоя
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>
                      <strong>3, 7, 11</strong> — времена роста (короткие)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-blue-100">
            <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">
                    Так можно разобрать любое явление
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    12 полочек помогают увидеть структуру: от простого слова до устройства
                    города. Раскладываем — понимаем.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-3 py-1.5 bg-white rounded-full text-blue-700 font-medium border border-blue-200">
                      Слово &quot;сутки&quot;
                    </span>
                    <span className="px-3 py-1.5 bg-white rounded-full text-blue-700 font-medium border border-blue-200">
                      Времена года
                    </span>
                    <span className="px-3 py-1.5 bg-white rounded-full text-blue-700 font-medium border border-blue-200">
                      Устройство Москвы
                    </span>
                    <span className="px-3 py-1.5 bg-white rounded-full text-blue-700 font-medium border border-blue-200">
                      Жизненный цикл
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/about-method">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl">
              Узнать больше о методе →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
