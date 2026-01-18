import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/Header";
import { EventsSection } from "@/components/sections/events";
import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/Hero";
import { JoinSection } from "@/components/sections/join";
import { ParticipationSection } from "@/components/sections/participation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ParticipationSection />
        <EventsSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
