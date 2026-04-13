import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { BounceCastles } from "@/components/bounce-castles"
import { FunFoodMachines } from "@/components/fun-food-machines"
import { EventModules } from "@/components/event-modules"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <BounceCastles />
      <FunFoodMachines />
      <EventModules />
      <ContactSection />
      <Footer />
    </main>
  )
}
