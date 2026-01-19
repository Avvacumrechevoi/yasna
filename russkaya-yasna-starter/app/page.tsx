import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/Header";
import { DirectionsSection } from "@/components/sections/DirectionsSection";
import { EventsSection } from "@/components/sections/events";
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
        <EventsSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
