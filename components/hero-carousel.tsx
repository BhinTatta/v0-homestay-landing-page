"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const heroImages = [
  { src: "/images/mountain-valley-view.jpeg", alt: "Panoramic view of Himalayan mountain valley from the homestay" },
  { src: "/images/mountain-village-view.jpeg", alt: "Mountain village with terraced hillside and pine trees in Bani, Theog" },
  { src: "/images/bedroom-double-bed.jpeg", alt: "Spacious bedroom with comfortable double bed and floral wallpaper" },
  { src: "/images/bedroom-view.jpeg", alt: "Cozy bedroom with warm wooden interiors and curtains" },
  { src: "/images/room-interior.jpeg", alt: "Room interior with wooden panelling and amenities" },
  { src: "/images/room-tv.jpeg", alt: "In-room smart TV entertainment setup" },
  { src: "/images/hallway-corridor.jpeg", alt: "Well-lit hallway with warm wooden panelling" },
  { src: "/images/parking-area.jpeg", alt: "Covered parking area for guests" },
  { src: "/images/kitchen-lower.jpeg", alt: "Fully equipped kitchen with granite countertop" },
  { src: "/images/kitchen-upper.jpeg", alt: "Kitchen with glass-door cabinets and storage" },
  { src: "/images/bathroom.jpeg", alt: "Clean bathroom with geyser and modern fittings" },
]

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  // Auto-play
  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [api])

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = useCallback(() => api?.scrollNext(), [api])

  return (
    <section id="home" className="relative pt-16">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        className="relative w-full"
      >
        <CarouselContent className="ml-0">
          {heroImages.map((img, i) => (
            <CarouselItem key={i} className="pl-0">
              <div className="relative h-[60vh] sm:h-[75vh] lg:h-[85vh] w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Nav arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/30 backdrop-blur-sm text-primary-foreground transition-colors hover:bg-background/50"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/30 backdrop-blur-sm text-primary-foreground transition-colors hover:bg-background/50"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </Carousel>

      {/* Overlay content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-8 sm:px-8 sm:pb-12 lg:px-16 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 flex items-center gap-1.5 text-xs sm:text-sm tracking-[0.15em] uppercase text-primary-foreground/80">
            <MapPin className="h-3.5 w-3.5" />
            Bani, Theog &middot; Shimla, Himachal Pradesh
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-semibold leading-tight text-primary-foreground text-balance">
            {"Deva's The Real"} <br className="hidden sm:block" />
            Home Stay
          </h1>
          <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-primary-foreground/80">
            Nestled in the quiet hills of Theog, wake up to misty mornings,
            birdsong, and panoramic views of the Himalayan ranges. A home away
            from home.
          </p>

          {/* Dots */}
          <div className="mt-6 flex items-center gap-1.5">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-primary-foreground"
                    : "w-1.5 bg-primary-foreground/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
