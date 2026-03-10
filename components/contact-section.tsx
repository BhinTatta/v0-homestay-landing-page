import { Phone, MessageCircle, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            {"Let's Plan Your Stay"}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Reach out to us on WhatsApp or give us a call. We are happy to help
            you plan the perfect mountain getaway.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="rounded-2xl bg-card border border-border/50 p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-foreground">
              Phone
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              +91 8580607171
            </p>
          </div>

          <div className="rounded-2xl bg-card border border-border/50 p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10">
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-foreground">
              WhatsApp
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              +91 8580607171
            </p>
          </div>

          <div className="rounded-2xl bg-card border border-border/50 p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-foreground">
              Email
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              info@devashomestay.com
            </p>
          </div>

          <div className="rounded-2xl bg-card border border-border/50 p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-foreground">
              Check-in / Check-out
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              12:00 PM / 11:00 AM
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/918580607171"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-medium text-[#ffffff] shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
