import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SignupModalProvider } from "@/components/forms/SignupModal";
import { PageTransition } from "@/components/layout/PageTransition";

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

const siteName = "Русская Ясна";
const siteDescription =
  "Образовательное сообщество для изучения русского языка, истории и культуры. 8 направлений исследований, встречи, натурные уроки и курсы.";

export const metadata: Metadata = {
  title: {
    default: `${siteName} — русское учение о жизни`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "русская культура",
    "русский язык",
    "история России",
    "традиции",
    "образование",
    "ясна",
  ],
  authors: [{ name: siteName }],
  openGraph: {
    title: `${siteName} — русское учение о жизни`,
    description: siteDescription,
    type: "website",
    locale: "ru_RU",
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — русское учение о жизни`,
    description: siteDescription,
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
        <SignupModalProvider>
          <PageTransition>{children}</PageTransition>
          <Analytics />
        </SignupModalProvider>
      </body>
    </html>
  );
}
