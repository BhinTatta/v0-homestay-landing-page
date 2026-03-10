'use client'

import { MapPin, Clock, Camera } from 'lucide-react'

const attractions = [
  {
    name: 'Fun World Kufri',
    distance: '15 km',
    time: '30 mins',
    desc: 'Adventure park with rides, slides, and entertainment for the whole family.',
  },
  {
    name: 'Jakhoo Temple',
    distance: '12 km',
    time: '25 mins',
    desc: 'Historic temple perched on a hilltop with panoramic views and spiritual significance.',
  },
  {
    name: 'Kaifu Lake',
    distance: '8 km',
    time: '15 mins',
    desc: 'Serene lake surrounded by pine trees, perfect for peaceful walks and picnics.',
  },
  {
    name: 'Shimla Ridge Walk',
    distance: '18 km',
    time: '35 mins',
    desc: 'Famous scenic walking trail through heart of Shimla with shopping and dining.',
  },
  {
    name: 'Tattapani Hot Springs',
    distance: '22 km',
    time: '45 mins',
    desc: 'Natural hot water springs known for therapeutic properties and scenic surroundings.',
  },
  {
    name: 'Naldehra Golf Course',
    distance: '20 km',
    time: '40 mins',
    desc: 'Historic golf course set amidst deodar forests with stunning mountain vistas.',
  },
  {
    name: 'Chadwick Falls',
    distance: '10 km',
    time: '20 mins',
    desc: 'Beautiful waterfall nestled in pine forest, ideal for nature lovers and photographers.',
  },
  {
    name: 'Himachal State Museum',
    distance: '25 km',
    time: '50 mins',
    desc: 'Museum showcasing regional history, culture, and art of Himachal Pradesh.',
  },
]

export function AttractionsSection() {
  return (
    <section id="attractions" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Nearby Attractions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            Connected to Everything
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Located in Fagu with easy access to Shimla's best attractions. Explore mountains, adventure, history, and nature—all within short drives from our homestay.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {attractions.map((attraction) => (
            <div
              key={attraction.name}
              className="rounded-2xl bg-card border border-border/50 p-6 sm:p-7 transition-all hover:shadow-md hover:border-accent/50"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground max-w-xs">
                  {attraction.name}
                </h3>
                <Camera className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {attraction.desc}
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {attraction.distance}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {attraction.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 rounded-3xl bg-accent/5 border border-accent/20 p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
              Perfect Location for Exploration
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our homestay in Fagu is ideally situated to explore all of Shimla's major attractions. Whether you're looking for adventure, nature, history, or simply peaceful moments—everything is just a short drive away.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
