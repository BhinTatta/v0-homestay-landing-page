'use client'

import { Shield, Heart, Users, Smile } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    desc: 'Families only. No party crowds. A peaceful environment perfect for children and parents.',
  },
  {
    icon: Heart,
    title: 'Genuine Care',
    desc: 'We treat your family like our own. Personalized attention and support throughout your stay.',
  },
  {
    icon: Users,
    title: 'Family Spaces',
    desc: 'Common areas designed for families to relax, play, and bond together.',
  },
  {
    icon: Smile,
    title: 'Kid-Friendly',
    desc: 'Safe premises with garden space, activities, and an environment perfect for children.',
  },
]

export function FamilySection() {
  return (
    <section id="family" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Families First
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            A Safe Haven for Families
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We believe in creating an environment where families feel secure, welcomed, and at home. Our homestay is exclusively for families seeking a peaceful mountain retreat away from typical hotel chaos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-card border border-border/50 p-6 sm:p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 rounded-3xl bg-accent/5 border border-accent/20 p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
              Your Comfort & Safety, Our Priority
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Experience the warmth of genuine hospitality in a family-only environment. We ensure that families with children, elderly members, or anyone seeking peaceful mountain living finds their perfect retreat with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
