import dynamic from "next/dynamic";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { DirectionsSection } from "@/components/sections/DirectionsSection";
import { FAQSection } from "@/components/sections/FAQ";
import { HeroSection } from "@/components/sections/Hero";
import { HowToParticipateSection } from "@/components/sections/HowToParticipate";
import { JoinSection } from "@/components/sections/join";
import { WhoIsThisForSection } from "@/components/sections/WhoIsThisFor";

const TestimonialsSection = dynamic(
  () =>
    import("@/components/sections/Testimonials").then((mod) => mod.TestimonialsSection),
  { ssr: false, loading: () => <div className="h-24" aria-hidden="true" /> }
);

const EventsCalendarSection = dynamic(
  () =>
    import("@/components/sections/EventsCalendar").then((mod) => mod.EventsCalendarSection),
  { ssr: false, loading: () => <div className="h-24" aria-hidden="true" /> }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <main>
        <HeroSection />
        <WhoIsThisForSection />
        <DirectionsSection />
        <HowToParticipateSection />
        <TestimonialsSection />
        <FAQSection />
        <EventsCalendarSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
