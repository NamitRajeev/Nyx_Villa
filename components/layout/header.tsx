import { BrandMark } from "@/components/ui/brand-mark";
import { siteConfig } from "@/lib/site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-nyx-ivory/10 bg-nyx-ink/90 backdrop-blur-md">
      <a
        className="sr-only z-[60] rounded-sm bg-nyx-pale-gold px-4 py-3 font-sans text-sm font-bold text-nyx-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        href="#main-content"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary navigation"
        className="section-shell flex h-[4.75rem] items-center justify-between gap-5"
      >
        <a href="#main-content" aria-label="NYX Pool Villa home">
          <BrandMark priority />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {siteConfig.navigation.map((item) => (
            <a
              className="font-sans text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-nyx-ivory/72 transition-colors duration-200 hover:text-nyx-pale-gold focus-visible:text-nyx-pale-gold"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          className="hidden border-b border-nyx-gold/70 pb-1 font-sans text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-nyx-ivory transition-colors duration-200 hover:border-nyx-pale-gold hover:text-nyx-pale-gold sm:inline-flex"
          href={siteConfig.bookingHref}
        >
          Check availability
        </a>

        <details className="relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-3 font-sans text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-nyx-ivory marker:hidden [&::-webkit-details-marker]:hidden">
            Menu
            <span className="grid size-8 place-items-center border border-nyx-gold/60" aria-hidden="true">
              <span className="h-px w-3.5 bg-nyx-pale-gold" />
            </span>
          </summary>
          <div className="absolute right-0 top-[3.75rem] flex w-64 flex-col border border-nyx-gold/30 bg-nyx-ink p-6 shadow-nyx-card">
            {siteConfig.navigation.map((item) => (
              <a
                className="border-b border-nyx-ivory/10 py-4 font-sans text-xs font-bold uppercase tracking-[0.14em] text-nyx-ivory transition-colors hover:text-nyx-pale-gold"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-6 inline-flex w-fit border-b border-nyx-gold/70 pb-1 font-sans text-xs font-bold uppercase tracking-[0.14em] text-nyx-ivory"
              href={siteConfig.bookingHref}
            >
              Check availability
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}
