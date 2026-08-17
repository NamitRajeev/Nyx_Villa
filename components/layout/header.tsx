import { BrandMark } from "@/components/ui/brand-mark";
import { siteConfig } from "@/lib/site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-y border-nyx-gold/20 bg-[#010F22] backdrop-blur-md">
      <a
        className="sr-only z-[60] rounded-sm bg-nyx-pale-gold px-4 py-3 font-sans text-sm font-bold text-nyx-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        href="#main-content"
      >
        Skip to content
      </a>

      <nav
        aria-label="Primary navigation"
        className="relative flex h-[5.5rem] w-full items-center px-7 sm:px-10 lg:px-[4.2vw]"
      >
        {/* Logo */}
        <a
          href="#main-content"
          aria-label="NYX Pool Villa home"
          className="absolute left-7 top-1/2 -translate-y-[46%] sm:left-10 lg:left-[4.2vw]"
        >
          <BrandMark priority />
        </a>

        {/* Desktop navigation */}
        <div className="mx-auto hidden items-center gap-12 lg:flex xl:gap-14">
          {siteConfig.navigation.map((item) => (
            <a
              className="font-sans text-base font-bold uppercase tracking-[0.14em] text-nyx-ivory/80 transition-colors duration-300 hover:text-nyx-pale-gold focus-visible:text-nyx-pale-gold"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Check availability */}
        <a
          className="absolute right-7 top-1/2 hidden -translate-y-1/2 border-b border-nyx-gold/70 pb-1 font-sans text-base font-bold uppercase tracking-[0.12em] text-nyx-ivory transition-colors duration-300 hover:border-nyx-pale-gold hover:text-nyx-pale-gold sm:inline-flex sm:right-10 lg:right-[4.2vw]"
          href={siteConfig.bookingHref}
        >
          Check availability
        </a>

        {/* Mobile menu */}
        <details className="relative ml-auto lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-3 font-sans text-sm font-bold uppercase tracking-[0.14em] text-nyx-ivory marker:hidden [&::-webkit-details-marker]:hidden">
            Menu

            <span
              className="grid size-9 place-items-center border border-nyx-gold/50"
              aria-hidden="true"
            >
              <span className="h-px w-4 bg-nyx-pale-gold" />
            </span>
          </summary>

          <div className="absolute right-0 top-[4.25rem] flex w-64 flex-col border border-nyx-gold/30 bg-[#010F22] p-6 shadow-nyx-card">
            {siteConfig.navigation.map((item) => (
              <a
                className="border-b border-nyx-ivory/10 py-4 font-sans text-sm font-bold uppercase tracking-[0.14em] text-nyx-ivory transition-colors hover:text-nyx-pale-gold"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            ))}

            <a
              className="mt-6 inline-flex w-fit border-b border-nyx-gold/70 pb-1 font-sans text-sm font-bold uppercase tracking-[0.14em] text-nyx-ivory"
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