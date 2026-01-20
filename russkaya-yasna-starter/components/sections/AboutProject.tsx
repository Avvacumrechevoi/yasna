const starRays = [
  { angle: 0, label: "0", name: "Полночь", color: "#1e3a8a" },
  { angle: 30, label: "1", name: "Первый свет", color: "#1e40af" },
  { angle: 60, label: "2", name: "Заря", color: "#2563eb" },
  { angle: 90, label: "3", name: "Рассвет", color: "#3b82f6" },
  { angle: 120, label: "4", name: "Восход", color: "#60a5fa" },
  { angle: 150, label: "5", name: "Утро", color: "#93c5fd" },
  { angle: 180, label: "6", name: "Полдень", color: "#f59e0b" },
  { angle: 210, label: "7", name: "День", color: "#fbbf24" },
  { angle: 240, label: "8", name: "Вечер", color: "#fb923c" },
  { angle: 270, label: "9", name: "Закат", color: "#f97316" },
  { angle: 300, label: "10", name: "Сумерки", color: "#ea580c" },
  { angle: 330, label: "11", name: "Тьма", color: "#991b1b" },
];

export function AboutProjectSection() {
  return (
    <section
      id="about-project"
      className="py-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Как устроен мир по Ясне
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Любое явление можно разложить по 12 полочкам Ясной Звезды
          </p>
        </div>

        <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-2xl border border-blue-100">
          <div className="relative w-full max-w-4xl mx-auto aspect-square">
            <svg viewBox="0 0 600 600" className="w-full h-full">
              <circle
                cx="300"
                cy="300"
                r="60"
                fill="url(#centerGradient)"
                className="drop-shadow-lg"
              />
              <text
                x="300"
                y="310"
                textAnchor="middle"
                className="fill-white font-bold"
                style={{ fontSize: "24px" }}
              >
                ЯСНА
              </text>

              {starRays.map((ray, index) => {
                const angle = (ray.angle - 90) * (Math.PI / 180);
                const x1 = 300;
                const y1 = 300;
                const x2 = 300 + 180 * Math.cos(angle);
                const y2 = 300 + 180 * Math.sin(angle);
                const labelX = 300 + 230 * Math.cos(angle);
                const labelY = 300 + 230 * Math.sin(angle);

                return (
                  <g key={index} className="group cursor-pointer">
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={ray.color}
                      strokeWidth="3"
                      className="group-hover:stroke-[6] transition-all"
                      opacity="0.6"
                    />
                    <circle
                      cx={x2}
                      cy={y2}
                      r="12"
                      fill={ray.color}
                      className="group-hover:r-[20] transition-all drop-shadow-lg"
                    />
                    <text
                      x={x2}
                      y={y2 + 5}
                      textAnchor="middle"
                      className="fill-white font-bold pointer-events-none"
                      style={{ fontSize: "12px" }}
                    >
                      {ray.label}
                    </text>
                    <text
                      x={labelX}
                      y={labelY}
                      textAnchor="middle"
                      className="fill-slate-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                      style={{ fontSize: "14px" }}
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

          <div className="text-center mt-12">
            <p className="text-slate-600 text-lg">
              <span className="inline-block px-4 py-2 bg-blue-50 rounded-full text-blue-700 font-medium">
                Наведи на полочку, чтобы увидеть название
              </span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-blue-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18M3 12h18" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Крест Света</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              День и ночь, единство и борьба противоположностей
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-amber-100">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-amber-900 mb-3">Крест Управления</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Тепло и холод, рост и спад процессов
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-red-100">
            <div className="w-16 h-16 bg-gradient-to-br from-red-700 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-3">Крест Веры</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Духовное измерение, вера в завтрашний день
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="/about-method">
            <button className="px-10 py-5 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl">
              Узнать подробнее о методе →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
