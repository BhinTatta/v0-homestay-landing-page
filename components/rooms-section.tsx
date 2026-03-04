import Image from "next/image"
import { Users, Maximize2, BedDouble } from "lucide-react"

const rooms = [
  {
    name: "Mountain View Suite",
    desc: "Spacious room with a private balcony overlooking the Himalayan range. King-size bed, modern bathroom, and all-day mountain views.",
    price: "2,500",
    image: "/images/hero-3.jpg",
    guests: "2 Guests",
    size: "300 sq ft",
    bed: "King Bed",
  },
  {
    name: "Pine Valley Room",
    desc: "A cozy retreat nestled among pine trees. Wake up to birdsong and dappled sunlight filtering through the forest canopy.",
    price: "2,000",
    image: "/images/hero-12.jpg",
    guests: "2 Guests",
    size: "250 sq ft",
    bed: "Twin Beds",
  },
  {
    name: "Family Retreat",
    desc: "Perfect for families. A spacious room with extra bedding, a warm sitting area, and views of the apple orchards and valley.",
    price: "3,500",
    image: "/images/hero-4.jpg",
    guests: "4 Guests",
    size: "450 sq ft",
    bed: "King + Twin",
  },
]

export function RoomsSection() {
  return (
    <section id="rooms" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-secondary/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Our Rooms
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            Rest Well, Dream Deep
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Each room is thoughtfully designed for comfort, with natural
            materials, warm lighting, and views that make you never want to
            leave.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="group rounded-2xl overflow-hidden bg-card border border-border/50 transition-shadow hover:shadow-lg"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {room.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {room.desc}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" /> {room.guests}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize2 className="h-3.5 w-3.5" /> {room.size}
                  </span>
                  <span className="flex items-center gap-1">
                    <BedDouble className="h-3.5 w-3.5" /> {room.bed}
                  </span>
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <span className="font-serif text-2xl font-semibold text-foreground">
                      {"₹"}{room.price}
                    </span>
                    <span className="text-xs text-muted-foreground"> / night</span>
                  </div>
                  <a
                    href="#contact"
                    className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
