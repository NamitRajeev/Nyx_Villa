import Image from "next/image";

import { ActionLink } from "@/components/ui/action-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const experienceNotes = [
  "Time together, in a setting that is entirely your own",
  "Unhurried days and evenings without the usual routine",
  "A private escape for couples, families, friends, and celebrations",
];

export function Experience() {
  return (
    <section
      className="bg-nyx-ivory py-20 sm:py-28 lg:py-40"
      id="villa"
    >
      <div className="section-shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            description="NYX is a space to step away from the ordinary and spend time the way you want to. Whether it is a quiet evening for two, a relaxed gathering with family and friends, or a celebration worth remembering, the villa gives you the privacy and freedom to make the experience your own."
            eyebrow="The NYX experience"
            title="Come together. Slow down. Make it yours."
          />

          <ul className="mt-10 border-t border-nyx-ink/15">
            {experienceNotes.map((note, index) => (
              <li
                className="flex items-center gap-5 border-b border-nyx-ink/15 py-5 text-sm leading-6 text-nyx-ink/72"
                key={note}
              >
                <span className="font-display text-2xl text-nyx-gold">
                  0{index + 1}
                </span>
                <span>{note}</span>
              </li>
            ))}
          </ul>

          <ActionLink
            className="mt-9"
            href="#gallery"
            variant="tertiary"
          >
            View gallery
          </ActionLink>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-nyx-walnut shadow-nyx-card">
              <Image
                alt="A warm bedroom with walnut fluting, marble detail, and amber lighting at NYX Pool Villa"
                className="object-cover transition duration-700 ease-out hover:scale-[1.025]"
                fill
                sizes="(max-width: 1024px) 100vw, 56vw"
                src="/images/nyx-bedroom-ember-wide.jpeg"
              />
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}