import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
  title: "Русская Ясна — Русское учение о жизни",
  description: "Образовательное сообщество для изучения русского языка, истории и культуры. 8 направлений исследований, встречи, натурные уроки, курсы. Присоединяйтесь!",
  keywords: "русская культура, русский язык, история России, традиции, образование, ясна",
  openGraph: {
    title: "Русская Ясна — Русское учение о жизни",
    description: "Образовательное сообщество для изучения русского языка, истории и культуры",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
