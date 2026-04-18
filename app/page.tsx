import { Header } from "@/components/d-garage/header"
import { Hero } from "@/components/d-garage/hero"
import { Diagnostics } from "@/components/d-garage/diagnostics"
import { Workshop } from "@/components/d-garage/workshop"
import { APK } from "@/components/d-garage/apk"
import { Location } from "@/components/d-garage/location"
import { Reviews } from "@/components/d-garage/reviews"
import { Footer } from "@/components/d-garage/footer"
import { MobileCTA } from "@/components/d-garage/mobile-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Diagnostics />
      <Workshop />
      <APK />
      <Location />
      <Reviews />
      <Footer />
      <MobileCTA />
    </main>
  )
}
