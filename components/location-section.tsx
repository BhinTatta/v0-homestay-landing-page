import { MapPin, Navigation } from "lucide-react"

export function LocationSection() {
  return (
    <section
      id="location"
      className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-secondary/50"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
              Find Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
              How to Reach Us
            </h2>

            <div className="mt-8 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Address</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {"Deva's The Real Home Stay"}
                  <br />
                  Bani, Theog
                  <br />
                  Shimla, Himachal Pradesh
                  <br />
                  PIN Code: 171209
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Navigation className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Getting Here</h3>
                <ul className="mt-1 text-sm text-muted-foreground leading-relaxed flex flex-col gap-1">
                  <li>
                    <span className="font-medium text-foreground">From Shimla:</span>{" "}
                    ~45 km via NH 5 towards Theog
                  </li>
                  <li>
                    <span className="font-medium text-foreground">From Chandigarh:</span>{" "}
                    ~160 km, approximately 5 hours drive
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Nearest Airport:</span>{" "}
                    Shimla (Jubbarhatti), ~55 km
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Nearest Railway:</span>{" "}
                    Shimla Station, ~45 km
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm">
            <iframe
              title="Deva's The Real Home Stay Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27206.75!2d77.35!3d31.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905799a9ff1c44b%3A0x2e2d3e7cf9f1c0e5!2sTheog%2C%20Himachal%20Pradesh%20171201!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
