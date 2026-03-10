'use client'

import { Flower2, Ticket, MapPin, Gift } from 'lucide-react'

const experiences = [
  {
    icon: Flower2,
    title: 'Orchid Garden Visit',
    cost: 'FREE',
    desc: 'Explore the stunning local orchid gardens with guided tour. A serene experience in nature\'s lap.',
  },
  {
    icon: Gift,
    title: 'Activity Discounts',
    cost: 'UP TO 30%',
    desc: 'Exclusive discounts at Fun World Kufri, adventure parks, and local attractions.',
  },
  {
    icon: Ticket,
    title: 'Booking Assistance',
    cost: 'FREE',
    desc: 'We help you book future tickets and activities at best rates without any commission.',
  },
  {
    icon: MapPin,
    title: 'Guide & Tips',
    cost: 'FREE',
    desc: 'Our expert recommendations and tips for exploring the best hidden gems around Shimla.',
  },
]

export function ExperiencesSection() {
  return (
    <section id="experiences" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-secondary/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Included Experiences
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            Unforgettable Mountain Experiences
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            All included at no extra cost. We believe in making your mountain vacation truly special with curated experiences and expert guidance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="rounded-2xl bg-card border border-border/50 p-6 sm:p-8 transition-all hover:shadow-lg hover:border-accent/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <exp.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-semibold text-accent">{exp.cost}</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {exp.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground leading-relaxed">
            Our team is passionate about making your stay memorable. We provide personalized recommendations based on your interests, family size, and preferences.
          </p>
        </div>
      </div>
    </section>
  )
}
