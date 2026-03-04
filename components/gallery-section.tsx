"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const galleryImages = [
  { src: "/images/mountain-valley-view.jpeg", alt: "Panoramic Himalayan mountain valley view" },
  { src: "/images/mountain-village-view.jpeg", alt: "Mountain village with terraced hillside" },
  { src: "/images/bedroom-double-bed.jpeg", alt: "Comfortable double bedroom" },
  { src: "/images/bedroom-view.jpeg", alt: "Cozy room with wooden interiors" },
  { src: "/images/room-interior.jpeg", alt: "Room with wooden panelling" },
  { src: "/images/room-tv.jpeg", alt: "In-room TV entertainment" },
  { src: "/images/hallway-corridor.jpeg", alt: "Warm wooden hallway" },
  { src: "/images/parking-area.jpeg", alt: "Covered guest parking" },
  { src: "/images/kitchen-lower.jpeg", alt: "Kitchen with granite counter" },
  { src: "/images/kitchen-upper.jpeg", alt: "Kitchen glass cabinets" },
  { src: "/images/bathroom.jpeg", alt: "Modern bathroom with geyser" },
]

export function GallerySection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }, [])

  const closeLightbox = useCallback(() => setLightboxOpen(false), [])

  const nextLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
  }, [])

  const prevLightbox = useCallback(() => {
    setLightboxIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    )
  }, [])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") nextLightbox()
      if (e.key === "ArrowLeft") prevLightbox()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightboxOpen, closeLightbox, nextLightbox, prevLightbox])

  return (
    <>
      <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
              Gallery
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
              Glimpses of Serenity
            </h2>
          </div>

          {/* Carousel */}
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start" }}
            className="relative w-full"
          >
            <CarouselContent className="-ml-3 sm:-ml-4">
              {galleryImages.map((img, i) => (
                <CarouselItem
                  key={i}
                  className="pl-3 sm:pl-4 basis-[80%] sm:basis-1/2 lg:basis-1/3"
                >
                  <button
                    onClick={() => openLightbox(i)}
                    className="relative block h-56 sm:h-72 w-full overflow-hidden rounded-xl group cursor-pointer"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/10 rounded-xl" />
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={() => api?.scrollPrev()}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
                aria-label="Previous gallery image"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-1">
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 bg-primary"
                        : "w-1.5 bg-border"
                    }`}
                    aria-label={`Go to gallery image ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => api?.scrollNext()}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
                aria-label="Next gallery image"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/20 text-primary-foreground transition-colors hover:bg-background/40"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevLightbox()
            }}
            className="absolute left-3 sm:left-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/20 text-primary-foreground transition-colors hover:bg-background/40"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div
            className="relative h-[70vh] sm:h-[80vh] w-[90vw] sm:w-[80vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextLightbox()
            }}
            className="absolute right-3 sm:right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/20 text-primary-foreground transition-colors hover:bg-background/40"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-primary-foreground/70">
            {lightboxIndex + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </>
  )
}
