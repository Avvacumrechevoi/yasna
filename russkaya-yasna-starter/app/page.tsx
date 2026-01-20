import dynamic from "next/dynamic";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutProjectSection } from "@/components/sections/AboutProject";
import { DirectionsSection } from "@/components/sections/DirectionsSection";
import { FAQSection } from "@/components/sections/FAQ";
import { FinalCTASection } from "@/components/sections/FinalCTA";
import { HeroSection } from "@/components/sections/Hero";
import { WhoIsThisForSection } from "@/components/sections/WhoIsThisFor";

const TestimonialsSection = dynamic(
  () =>
    import("@/components/sections/Testimonials").then((mod) => mod.TestimonialsSection),
  { ssr: false, loading: () => <div className="h-24 rounded-2xl skeleton" aria-hidden="true" /> }
);

const EventsCalendarSection = dynamic(
  () =>
    import("@/components/sections/EventsCalendar").then((mod) => mod.EventsCalendarSection),
  { ssr: false, loading: () => <div className="h-24 rounded-2xl skeleton" aria-hidden="true" /> }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <main>
        <HeroSection />
        <AboutProjectSection />
        <WhoIsThisForSection />
        <DirectionsSection />
        <EventsCalendarSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
