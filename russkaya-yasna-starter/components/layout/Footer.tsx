import Link from 'next/link'

const footerLinks = {
  directions: [
    { name: 'Неглинка', href: '/neglinka' },
    { name: 'Литпросвет', href: '/litprosvet' },
    { name: 'Астроневод', href: '/astronevod' },
    { name: 'Праздники', href: '/prazdniki' },
  ],
  more: [
    { name: 'Джива', href: '/dzhiva' },
    { name: 'Маршруты', href: '/marshruty' },
    { name: 'Извод', href: '/izvod' },
    { name: 'Теремок', href: '/teremok' },
  ],
  social: [
    { name: 'Telegram', href: '#' },
    { name: 'VK', href: '#' },
    { name: 'YouTube', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold">Русская Ясна</span>
            </Link>
            <p className="mt-4 text-primary-200 text-sm leading-relaxed">
              Русское учение о жизни. Образовательное сообщество для изучения
              русского языка, истории и культуры.
            </p>
          </div>

          {/* Directions */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Направления</h3>
            <ul className="space-y-2">
              {footerLinks.directions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Ещё</h3>
            <ul className="space-y-2">
              {footerLinks.more.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Связаться</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-600">
          <p className="text-center text-primary-300 text-sm">
            © {new Date().getFullYear()} Русская Ясна. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
