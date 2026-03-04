import { Star } from "lucide-react"

const reviews = [
  {
    name: "Ananya Sharma",
    location: "Delhi",
    rating: 5,
    text: "An absolutely magical experience! The views from the balcony were breathtaking. The hosts treated us like family, and the home-cooked rajma-chawal was the best I've ever had. Can't wait to come back.",
  },
  {
    name: "Rohit Mehra",
    location: "Chandigarh",
    rating: 5,
    text: "We were looking for a peaceful getaway and this was exactly it. No crowds, no noise \u2014 just mountains, clean air, and warmth. The rooms were spotless and the chai was always ready. Highly recommend!",
  },
  {
    name: "Priya & Karthik",
    location: "Bangalore",
    rating: 5,
    text: "This homestay redefined our idea of a mountain holiday. The location is stunning, the food is incredible, and Deva ji's stories about the region made the trip so much more special. A hidden gem!",
  },
]

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Guest Stories
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl bg-card border border-border/50 p-6 sm:p-8 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="flex-1 text-sm sm:text-base text-muted-foreground leading-relaxed italic">
                {'"'}{review.text}{'"'}
              </p>
              <div className="mt-6 pt-4 border-t border-border/50">
                <p className="text-sm font-semibold text-foreground">
                  {review.name}
                </p>
                <p className="text-xs text-muted-foreground">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
