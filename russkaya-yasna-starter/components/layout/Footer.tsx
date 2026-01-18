import Link from "next/link";

const footerLinks = {
  directions: [
    { name: "Неглинка", href: "/neglinka" },
    { name: "Литпросвет", href: "/litprosvet" },
    { name: "Астроневод", href: "/astronevod" },
    { name: "Праздники", href: "/prazdniki" },
    { name: "Джива", href: "/dzhiva" },
    { name: "Маршруты", href: "/marshruty" },
    { name: "Извод", href: "/izvod" },
    { name: "Теремок", href: "/teremok" },
  ],
  community: [
    { name: "О нас", href: "/about" },
    { name: "Контакты", href: "/contacts" },
    { name: "Мероприятия", href: "/events" },
  ],
  social: [
    { name: "Telegram", href: "#" },
    { name: "VK", href: "#" },
    { name: "YouTube", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-4">Русская Ясна</h3>
            <p className="text-primary-200 text-sm">
              Русское учение о жизни. Образовательное сообщество для изучения
              русского языка, истории и культуры.
            </p>
          </div>

          {/* Directions */}
          <div>
            <h4 className="font-semibold mb-4">Направления</h4>
            <ul className="space-y-2">
              {footerLinks.directions.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Directions */}
          <div>
            <h4 className="font-semibold mb-4">Ещё направления</h4>
            <ul className="space-y-2">
              {footerLinks.directions.slice(4).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community & Social */}
          <div>
            <h4 className="font-semibold mb-4">Сообщество</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold mt-6 mb-4">Мы в соцсетях</h4>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-400">
          <p className="text-center text-primary-200 text-sm">
            © {new Date().getFullYear()} Русская Ясна. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
