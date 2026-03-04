import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { AboutSection } from "@/components/about-section"
import { RoomsSection } from "@/components/rooms-section"
import { GallerySection } from "@/components/gallery-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <RoomsSection />
      <GallerySection />
      <AmenitiesSection />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
