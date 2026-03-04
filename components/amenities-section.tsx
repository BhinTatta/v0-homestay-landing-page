import {
  Wifi,
  Mountain,
  Car,
  UtensilsCrossed,
  Flame,
  ShowerHead,
  TreePine,
  Coffee,
} from "lucide-react"

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi", desc: "Stay connected with high-speed internet" },
  { icon: Mountain, label: "Mountain View", desc: "Panoramic Himalayan views from every room" },
  { icon: Car, label: "Free Parking", desc: "Secure parking space for your vehicle" },
  { icon: UtensilsCrossed, label: "Home-Cooked Meals", desc: "Authentic Himachali breakfast & dinner" },
  { icon: Flame, label: "Room Heater", desc: "Stay warm with in-room heating" },
  { icon: ShowerHead, label: "Hot Water", desc: "24/7 hot water for a refreshing experience" },
  { icon: TreePine, label: "Garden Access", desc: "Lush green garden with seating areas" },
  { icon: Coffee, label: "Tea & Coffee", desc: "Complimentary chai and coffee all day" },
]

export function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-secondary/50"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Amenities
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            Everything You Need
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We have taken care of every little detail so you can simply relax and
            enjoy the mountains.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {amenities.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center rounded-2xl bg-card border border-border/50 p-5 sm:p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-sm sm:text-base font-semibold text-foreground">
                {item.label}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
