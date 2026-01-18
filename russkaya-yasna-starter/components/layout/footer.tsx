import Link from "next/link";

const links = [
  { href: "/neglinka", label: "Направления" },
  { href: "/prazdniki", label: "Календарь" },
  { href: "/marshruty", label: "Маршруты" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-text/70">
          © {year} Русская Ясна. Образовательное сообщество.
        </p>

        <div className="flex flex-wrap gap-4 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text/70 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
