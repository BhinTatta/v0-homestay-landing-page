'use client'

import { Calendar, TrendingDown, Home, Users } from 'lucide-react'

const plans = [
  {
    name: 'Nightly Stay',
    price: '₹2,500',
    period: 'per night',
    discount: 'Standard rate',
    features: ['Best for short getaways', 'Full access to all amenities', 'Flexible dates', 'No long-term commitment'],
    icon: Calendar,
  },
  {
    name: 'Weekly Stay',
    price: '₹16,500',
    period: '7 nights (20% off)',
    discount: 'Save ₹3,500',
    features: ['Perfect for week-long escapes', 'Included weekly cleaning', 'Laundry services', 'Local tour discounts'],
    icon: TrendingDown,
  },
  {
    name: 'Monthly Stay',
    price: '₹35,000',
    period: '30 nights (50% off)',
    discount: 'Save ₹37,500',
    features: ['Ideal for remote workers', 'Included all utilities', 'Kitchen privileges', 'Flexible check-in/out', 'Discounted meals'],
    icon: Home,
  },
  {
    name: 'Extended Stay',
    price: 'Custom',
    period: '3+ months',
    discount: 'Negotiate rates',
    features: ['Special pricing available', 'Dedicated common spaces', 'Personalized services', 'Family long-term packages'],
    icon: Users,
  },
]

export function LongstaySection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-secondary/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Flexible Pricing
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            Stay Longer, Save More
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether it's a weekend escape or a multi-month retreat, we have flexible pricing options. Perfect for families, remote workers, or anyone looking to experience mountain living.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className="rounded-2xl bg-card border border-border/50 p-6 sm:p-8 transition-all hover:shadow-lg hover:border-primary/30 hover:bg-card/80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">{plan.discount}</p>
                <div className="mb-6">
                  <p className="font-serif text-3xl font-semibold text-foreground">
                    {plan.price}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{plan.period}</p>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 w-full rounded-full bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 inline-block text-center"
                >
                  {plan.name === 'Extended Stay' ? 'Inquire Now' : 'Book Now'}
                </a>
              </div>
            )
          })}
        </div>

        <div className="mt-12 sm:mt-16 rounded-3xl bg-accent/5 border border-accent/20 p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
              Special Rates for Extended Stays
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Planning a longer stay? Contact us directly for custom packages and special rates. We offer flexible terms for families, remote workers, seasonal visitors, and anyone seeking an extended mountain retreat.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
