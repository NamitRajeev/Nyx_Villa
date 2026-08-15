import Image from "next/image";

import { ActionLink } from "@/components/ui/action-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const experienceNotes = [
  "Deep-water tones and blue-hour calm",
  "Warm timber, marble, and amber light",
  "A private stay with an after-dark point of view",
];

export function Experience() {
  return (
    <section className="bg-nyx-ivory py-20 sm:py-28 lg:py-40" id="villa">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            description="NYX trades generic hotel formality for a more intimate rhythm. Here, material, light, and privacy are treated as part of the stay."
            eyebrow="The NYX experience"
            title="A villa designed for the evening ahead."
          />
          <ul className="mt-10 border-t border-nyx-ink/15">
            {experienceNotes.map((note, index) => (
              <li
                className="flex items-center gap-5 border-b border-nyx-ink/15 py-5 text-sm leading-6 text-nyx-ink/72"
                key={note}
              >
                <span className="font-display text-2xl text-nyx-gold">0{index + 1}</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
          <ActionLink className="mt-9" href="#gallery" variant="tertiary">
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
            <figcaption className="mt-4 flex items-center justify-between gap-4 text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-nyx-ink/55">
              <span>Warm material story</span>
              <span className="text-nyx-gold">01</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
