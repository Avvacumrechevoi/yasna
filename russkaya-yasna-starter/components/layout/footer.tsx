import Link from "next/link"

const footerLinks = [
  { label: "Directions", href: "/#directions" },
  { label: "Community", href: "/#community" },
  { label: "Contact", href: "/#contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-secondary-100 bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-base font-semibold text-primary">Russkaya Yasna</p>
          <p>Educational community for language, culture, and tradition.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
