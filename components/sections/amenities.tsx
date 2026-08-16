import {
  Bath,
  BedDouble,
  LampWallUp,
  Waves,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { amenities } from "@/lib/site-data";

const amenityIcons: Record<(typeof amenities)[number]["icon"], LucideIcon> = {
  Waves,
  BedDouble,
  Bath,
  LampWallUp,
};

export function Amenities() {
  return (
    <section
      className="bg-nyx-ivory py-20 sm:py-28 lg:py-40"
      id="amenities"
    >
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            description="From the private indoor pool to immersive sound and a personal cinema experience, NYX brings together the features that make your stay distinctly your own."
            eyebrow="Made for your stay"
            title="Everything you need to settle in."
          />
        </Reveal>

        <div className="mt-14 grid border-t border-nyx-ink/15 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {amenities.map((amenity, index) => {
            const Icon = amenityIcons[amenity.icon];

            return (
              <Reveal
                className="border-b border-nyx-ink/15 py-8 md:border-r md:px-7 md:py-10 md:first:pl-0 lg:last:border-r-0"
                delay={index * 0.05}
                key={amenity.title}
              >
                <span className="font-display text-2xl text-nyx-gold">
                  0{index + 1}
                </span>

                <Icon
                  aria-hidden="true"
                  className="mt-8 size-6 text-nyx-deep-water"
                  strokeWidth={1.35}
                />

                <h3 className="mt-8 font-display text-3xl leading-none tracking-[-0.025em] text-nyx-ink">
                  {amenity.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-nyx-ink/66">
                  {amenity.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}