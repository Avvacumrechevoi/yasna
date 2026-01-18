import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Русская Ясна — Русское учение о жизни",
    template: "%s — Русская Ясна",
  },
  description:
    "Образовательное сообщество для изучения русского языка, истории и культуры. 8 направлений исследований, встречи, натурные уроки, курсы.",
  keywords: [
    "русская культура",
    "русский язык",
    "история России",
    "традиции",
    "образование",
    "ясна",
  ],
  authors: [{ name: "Russkaya Yasna" }],
  openGraph: {
    title: "Русская Ясна — Русское учение о жизни",
    description: "Образовательное сообщество для изучения русского языка, истории и культуры",
    type: "website",
    locale: "ru_RU",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Русская Ясна — Русское учение о жизни",
    description: "Образовательное сообщество для изучения русского языка, истории и культуры",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased bg-background text-text`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
