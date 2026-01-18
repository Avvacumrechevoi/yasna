import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
