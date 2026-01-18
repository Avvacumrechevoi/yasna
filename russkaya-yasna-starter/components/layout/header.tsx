import Link from "next/link";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/neglinka", label: "Неглинка" },
  { href: "/litprosvet", label: "Литпросвет" },
  { href: "/astronevod", label: "Астроневод" },
  { href: "/prazdniki", label: "Праздники" },
  { href: "/dzhiva", label: "Джива" },
  { href: "/marshruty", label: "Маршруты" },
  { href: "/izvod", label: "Извод" },
  { href: "/teremok", label: "Теремок" },
];

export function Header() {
  return (
    <header className="border-b border-primary-100 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-primary">
          Русская Ясна
        </Link>

        <nav aria-label="Основная навигация" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-text/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm">Присоединиться</Button>
        </div>
      </div>
    </header>
  );
}
