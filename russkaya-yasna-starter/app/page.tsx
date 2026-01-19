import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/Header";
import { DirectionsSection } from "@/components/sections/DirectionsSection";
import { EventsCalendarSection } from "@/components/sections/EventsCalendar";
import { FAQSection } from "@/components/sections/FAQ";
import { HeroSection } from "@/components/sections/Hero";
import { HowToParticipateSection } from "@/components/sections/HowToParticipate";
import { JoinSection } from "@/components/sections/join";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { WhoIsThisForSection } from "@/components/sections/WhoIsThisFor";

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
