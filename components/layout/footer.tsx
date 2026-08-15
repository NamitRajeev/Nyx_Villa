import { BrandMark } from "@/components/ui/brand-mark";
import { siteConfig } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-nyx-ink text-nyx-ivory">
      <div className="section-shell border-t border-nyx-gold/30 py-12 sm:py-16">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <BrandMark className="h-12 w-36" />
            <p className="mt-6 max-w-sm font-display text-2xl leading-tight text-nyx-ivory">
              Where luxury meets privacy.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-nyx-ivory/60">
              A premium indoor private pool villa designed for unhurried stays.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-4 sm:grid-cols-3">
            {siteConfig.navigation.map((item) => (
              <a
                className="text-xs font-bold uppercase tracking-[0.14em] text-nyx-ivory/70 transition-colors hover:text-nyx-pale-gold"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
            <a
              className="text-xs font-bold uppercase tracking-[0.14em] text-nyx-ivory/70 transition-colors hover:text-nyx-pale-gold"
              href={siteConfig.bookingHref}
            >
              Check availability
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-nyx-ivory/10 pt-6 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-nyx-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NYX Pool Villa</p>
          <p>Premium indoor private pool villa</p>
        </div>
      </div>
    </footer>
  );
}
