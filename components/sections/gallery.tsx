"use client";

import { useState } from "react";
import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryImages } from "@/lib/site-data";

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = galleryImages.length;

  const previousIndex =
    (currentIndex - 1 + totalImages) % totalImages;

  const nextIndex =
    (currentIndex + 1) % totalImages;

  const goToPrevious = () => {
    setCurrentIndex(previousIndex);
  };

  const goToNext = () => {
    setCurrentIndex(nextIndex);
  };

  const currentImage = galleryImages[currentIndex];
  const previousImage = galleryImages[previousIndex];
  const nextImage = galleryImages[nextIndex];

  return (
    <section
      className="bg-nyx-ink py-20 sm:py-28 lg:py-40"
      id="gallery"
    >
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            description="Explore the spaces, details, and atmosphere that make NYX a private retreat designed for slow, unhurried stays."
            eyebrow="Inside NYX"
            title="A closer look at NYX."
            tone="light"
          />
        </Reveal>

        <div className="mt-14 overflow-hidden sm:mt-16 lg:mt-20">
          <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            {/* Previous image */}
            <button
              type="button"
              onClick={goToPrevious}
              aria-label={`View ${previousImage.label}`}
              className="group relative hidden w-[22vw] max-w-[320px] shrink-0 cursor-pointer overflow-hidden rounded-2xl opacity-45 transition-all duration-500 hover:opacity-70 sm:block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-nyx-deep-water">
                <Image
                  src={previousImage.src}
                  alt={previousImage.alt}
                  fill
                  sizes="22vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-nyx-ink/25 transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            </button>

            {/* Main image */}
            <figure className="w-[82vw] shrink-0 sm:w-[54vw] lg:w-[48vw]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-nyx-deep-water shadow-nyx-card">
                <Image
                  key={currentImage.src}
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 54vw, 48vw"
                  className="object-cover"
                />
              </div>

              <figcaption className="mt-4 flex items-center justify-between gap-4 text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-nyx-ivory/58">
                <span>{currentImage.label}</span>
                <span className="text-nyx-gold">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>

            {/* Next image */}
            <button
              type="button"
              onClick={goToNext}
              aria-label={`View ${nextImage.label}`}
              className="group relative hidden w-[22vw] max-w-[320px] shrink-0 cursor-pointer overflow-hidden rounded-2xl opacity-45 transition-all duration-500 hover:opacity-70 sm:block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-nyx-deep-water">
                <Image
                  src={nextImage.src}
                  alt={nextImage.alt}
                  fill
                  sizes="22vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-nyx-ink/25 transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}