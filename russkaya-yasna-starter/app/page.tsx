import { CommunitySection } from "@/components/sections/community-section"
import { ContactSection } from "@/components/sections/contact-section"
import { DirectionsGrid } from "@/components/sections/directions-grid"
import { HeroSection } from "@/components/sections/hero-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <DirectionsGrid />
      <CommunitySection />
      <ContactSection />
    </main>
  )
}
