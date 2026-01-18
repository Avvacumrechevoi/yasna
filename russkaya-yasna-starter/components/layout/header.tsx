import Link from "next/link"

import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Neglinka", href: "/neglinka" },
  { label: "Litprosvet", href: "/litprosvet" },
  { label: "Astronevod", href: "/astronevod" },
  { label: "Prazdniki", href: "/prazdniki" },
  { label: "Dzhiva", href: "/dzhiva" },
  { label: "Marshruty", href: "/marshruty" },
  { label: "Izvod", href: "/izvod" },
  { label: "Teremok", href: "/teremok" },
]

export function Header() {
  return (
    <header className="border-b border-secondary-100 bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-primary">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold">
            RY
          </span>
          <span className="text-lg font-semibold tracking-tight">Russkaya Yasna</span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-gray-700 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button variant="secondary" size="sm" type="button">
          Join the community
        </Button>
      </div>
    </header>
  )
}
