import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DirectionCTA } from "@/components/direction-page/DirectionCTA";
import { DirectionContent } from "@/components/direction-page/DirectionContent";
import { DirectionHero } from "@/components/direction-page/DirectionHero";
import { directionsData } from "@/lib/directions-data";
import { eventsData } from "@/lib/events-data";

type DirectionPageProps = {
  params: { slug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return directionsData.map((direction) => ({ slug: direction.slug }));
}

export function generateMetadata({ params }: DirectionPageProps): Metadata {
  const direction = directionsData.find((item) => item.slug === params.slug);
  if (!direction) {
    return {};
  }

  const canonical = `https://russkaya-yasna.ru/${direction.slug}`;

  return {
    title: direction.seo.title,
    description: direction.seo.description,
    alternates: { canonical },
    openGraph: {
      title: direction.seo.title,
      description: direction.seo.description,
      type: "article",
      url: canonical,
      images: direction.seo.ogImage ? [direction.seo.ogImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: direction.seo.title,
      description: direction.seo.description,
    },
  };
}

export default function DirectionPage({ params }: DirectionPageProps) {
  const direction = directionsData.find((item) => item.slug === params.slug);
  if (!direction) {
    notFound();
  }

  const event = eventsData.find((item) => item.direction === direction.name);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Русская Ясна",
      url: "https://russkaya-yasna.ru",
      sameAs: [
        "https://t.me/russkaya_yasna",
        "https://vk.com",
        "https://dzen.ru",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: direction.name,
      description: direction.seo.description,
      provider: {
        "@type": "Organization",
        name: "Русская Ясна",
        url: "https://russkaya-yasna.ru",
      },
    },
    event
      ? {
          "@context": "https://schema.org",
          "@type": "Event",
          name: event.title,
          startDate: `${event.date}T${event.time}`,
          eventAttendanceMode: event.location.toLowerCase().includes("онлайн")
            ? "https://schema.org/OnlineEventAttendanceMode"
            : "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: event.location,
          },
          organizer: {
            "@type": "Organization",
            name: "Русская Ясна",
          },
          url: event.link ?? "https://russkaya-yasna.ru",
        }
      : null,
  ].filter(Boolean);

  return (
    <>
      <DirectionHero direction={direction} />
      <DirectionContent direction={direction} />
      <DirectionCTA direction={direction} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
