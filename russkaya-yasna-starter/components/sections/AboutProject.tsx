export function AboutProjectSection() {
  return (
    <section id="about-project" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">О проекте</h2>
          <p className="text-xl text-gray-600">Три главных вопроса о Русской Ясне</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl hover:shadow-xl transition-all border border-gray-100">
            <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">📚</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Что это?</h3>
            <p className="text-gray-700 leading-relaxed">
              Восстанавливаем утраченные знания русского народа через изучение родного
              языка и первоисточников
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl hover:shadow-xl transition-all border border-gray-100">
            <div className="w-20 h-20 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-accent mb-4">Для кого?</h3>
            <p className="text-gray-700 leading-relaxed">
              Для тех, кто хочет понимать родную культуру, а не просто повторять
              традиции
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl hover:shadow-xl transition-all border border-gray-100">
            <div className="w-20 h-20 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="text-2xl font-bold text-secondary-700 mb-4">Как?</h3>
            <p className="text-gray-700 leading-relaxed">
              Натурные уроки по Москве, архивные исследования, встречи сообщества
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
