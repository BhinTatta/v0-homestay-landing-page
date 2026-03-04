import { Trees, Heart, Sunrise, Home } from "lucide-react"

const highlights = [
  {
    icon: Trees,
    title: "In the Pines",
    desc: "Surrounded by towering deodar and pine forests at an elevation of 2,500m.",
  },
  {
    icon: Heart,
    title: "Warm Hospitality",
    desc: "Experience genuine Himachali warmth and home-cooked traditional meals.",
  },
  {
    icon: Sunrise,
    title: "Mountain Views",
    desc: "Wake up to breathtaking panoramic views of the Greater Himalayan range.",
  },
  {
    icon: Home,
    title: "Your Home Away",
    desc: "Comfortable rooms designed for rest, with all modern amenities you need.",
  },
]

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
              Welcome to our home
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance">
              A Peaceful Retreat in the Heart of Shimla Hills
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {
                "Deva's The Real Home Stay is a serene mountain retreat located in the picturesque village of Bani, Theog \u2014 just a scenic drive from Shimla. Perched amidst lush green forests and apple orchards, our homestay offers an authentic Himachali experience with the comfort of modern living."
              }
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you seek a quiet getaway from the city, a base for
              trekking adventures, or simply a place to reconnect with nature,
              our doors are always open. Come as a guest, leave as family.
            </p>
          </div>

          {/* Highlight grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-card border border-border/50 p-5 sm:p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-base sm:text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
