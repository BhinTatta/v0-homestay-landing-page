import { Mountain } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 px-4 sm:px-8 lg:px-16 bg-card">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-2">
            <Mountain className="h-5 w-5 text-primary" />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-base font-semibold text-foreground">
                {"Deva's"}
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                The Real Home Stay
              </span>
            </div>
          </div>

          <div className="text-sm text-muted-foreground leading-relaxed">
            <p>
              Bani, Theog, Shimla, Himachal Pradesh &middot; 171209
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </a>
            <a
              href="#rooms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Rooms
            </a>
            <a
              href="#gallery"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            {"© "}{new Date().getFullYear()}{" Deva's The Real Home Stay. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
