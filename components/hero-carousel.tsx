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
  { src: "/images/hero-1.jpg", alt: "Deva's The Real Home Stay exterior with mountain backdrop" },
  { src: "/images/hero-2.jpg", alt: "Panoramic Himalayan mountain view from the homestay" },
  { src: "/images/hero-3.jpg", alt: "Cozy bedroom with mountain views" },
  { src: "/images/hero-4.jpg", alt: "Warm living room with fireplace" },
  { src: "/images/hero-5.jpg", alt: "Stunning sunrise over the Himalayas" },
  { src: "/images/hero-6.jpg", alt: "Traditional breakfast spread" },
  { src: "/images/hero-7.jpg", alt: "Mountain-view balcony seating" },
  { src: "/images/hero-8.jpg", alt: "Beautiful garden with mountain backdrop" },
  { src: "/images/hero-9.jpg", alt: "Modern bathroom with amenities" },
  { src: "/images/hero-10.jpg", alt: "Magical night view of the homestay" },
  { src: "/images/hero-11.jpg", alt: "Scenic road through pine forests" },
  { src: "/images/hero-12.jpg", alt: "Comfortable twin bedroom" },
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
