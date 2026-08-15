import Image from "next/image";

import { ActionLink } from "@/components/ui/action-link";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-data";

export function BookingCta() {
  return (
    <section className="relative isolate overflow-hidden bg-nyx-deep-water py-20 sm:py-28 lg:py-40" id="availability">
      <Image
        alt="A blue-lit bedroom at NYX Pool Villa"
        className="object-cover object-[68%_center] opacity-40"
        fill
        sizes="100vw"
        src="/images/nyx-bedroom-teal-day.jpeg"
      />
      <div className="absolute inset-0 bg-nyx-ink/72" />
      <div className="section-shell relative z-10">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Plan your private stay</p>
          <div className="mt-5 gold-rule" aria-hidden="true" />
          <h2 className="mt-7 font-display text-5xl leading-[0.9] tracking-[-0.04em] text-nyx-ivory sm:text-6xl lg:text-7xl">
            Your evening at NYX begins here.
          </h2>
          <p className="mt-7 max-w-xl text-pretty text-base leading-8 text-nyx-ivory/76 sm:text-lg">
            Take the next step toward a stay shaped around privacy, warm light, and the quiet pull of water.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <ActionLink href={siteConfig.bookingHref}>Check availability</ActionLink>
            <ActionLink href="#villa" variant="secondary">
              Explore the villa
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
