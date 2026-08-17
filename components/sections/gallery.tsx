"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryImages } from "@/lib/site-data";

type Direction = 1 | -1;

export function Gallery() {
  const prefersReducedMotion = useReducedMotion();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalImages = galleryImages.length;

  const getIndex = (index: number) => {
    return (index + totalImages) % totalImages;
  };

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((index) => getIndex(index + 1));
  };

  const goPrevious = () => {
    setDirection(-1);
    setCurrentIndex((index) => getIndex(index - 1));
  };

  const previousIndex = getIndex(currentIndex - 1);
  const nextIndex = getIndex(currentIndex + 1);

  const currentImage = galleryImages[currentIndex];
  const previousImage = galleryImages[previousIndex];
  const nextImage = galleryImages[nextIndex];

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const swipeDistance = 70;

    if (info.offset.x < -swipeDistance) {
      goNext();
    }

    if (info.offset.x > swipeDistance) {
      goPrevious();
    }
  };

  useEffect(() => {
    if (!isFullscreen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreen(false);
      }

      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen]);

  const slideVariants = {
    enter: (slideDirection: Direction) => ({
      x: slideDirection > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.96,
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (slideDirection: Direction) => ({
      x: slideDirection > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <>
      <section
        className="overflow-hidden bg-nyx-ink py-20 sm:py-28 lg:py-40"
        id="gallery"
      >
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              description="A glimpse into the spaces, details, and atmosphere that make NYX feel unlike an ordinary stay."
              eyebrow="Inside NYX"
              title="The villa, at your pace."
              tone="light"
            />
          </Reveal>

          <div className="mt-14 sm:mt-16 lg:mt-20">
            <div className="relative h-[58vw] min-h-[310px] max-h-[650px] w-full sm:h-[52vw] lg:h-[540px]">
              {/* Previous image */}
              <SideImage
                image={previousImage}
                position="previous"
                onClick={goPrevious}
              />

              {/* Main image */}
              <motion.div
                className="absolute left-1/2 top-1/2 z-20 w-[76vw] max-w-[780px] -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing sm:w-[68vw] lg:w-[62vw]"
                drag={prefersReducedMotion ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
              >
                <div
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-nyx-deep-water shadow-2xl"
                  onClick={() => setIsFullscreen(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      setIsFullscreen(true);
                    }
                  }}
                  aria-label={`Open ${currentImage.label} in fullscreen`}
                >
                  <AnimatePresence
                    custom={direction}
                    initial={false}
                    mode="popLayout"
                  >
                    <motion.div
                      key={currentImage.src}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : {
                              duration: 0.65,
                              ease: [0.22, 1, 0.36, 1],
                            }
                      }
                      className="absolute inset-0"
                    >
                      <Image
                        alt={currentImage.alt}
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                        fill
                        draggable={false}
                        priority={currentIndex === 0}
                        sizes="(max-width: 640px) 76vw, (max-width: 1024px) 68vw, 62vw"
                        src={currentImage.src}
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-7">
                        <div>
                          <p className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.18em] text-nyx-pale-gold">
                            NYX Pool Villa
                          </p>

                          <p className="mt-2 font-display text-2xl text-nyx-ivory sm:text-3xl">
                            {currentImage.label}
                          </p>
                        </div>

                        <span className="rounded-full border border-nyx-ivory/40 px-4 py-2 font-sans text-[0.6rem] font-bold uppercase tracking-[0.15em] text-nyx-ivory">
                          View
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Next image */}
              <SideImage
                image={nextImage}
                position="next"
                onClick={goNext}
              />
            </div>

            {/* Gallery controls */}
            <div className="mt-7 flex items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={goPrevious}
                  aria-label="Previous gallery image"
                  className="grid size-10 place-items-center rounded-full border border-nyx-ivory/20 text-nyx-ivory/70 transition-all duration-300 hover:border-nyx-gold/70 hover:text-nyx-pale-gold"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next gallery image"
                  className="grid size-10 place-items-center rounded-full border border-nyx-ivory/20 text-nyx-ivory/70 transition-all duration-300 hover:border-nyx-gold/70 hover:text-nyx-pale-gold"
                >
                  →
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.17em] text-nyx-ivory/45">
                  Drag to explore
                </span>

                <span className="h-px w-8 bg-nyx-gold/50" />

                <span className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.17em] text-nyx-ivory/55">
                  <span className="text-nyx-pale-gold">
                    {String(currentIndex + 1).padStart(2, "0")}
                  </span>
                  {" / "}
                  {String(totalImages).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen gallery */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-nyx-ink/98 p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              aria-label="Close fullscreen gallery"
              className="absolute right-5 top-5 z-20 grid size-11 place-items-center rounded-full border border-nyx-ivory/25 text-xl text-nyx-ivory transition-colors hover:border-nyx-gold hover:text-nyx-pale-gold"
            >
              ×
            </button>

            {/* Previous */}
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 text-3xl text-nyx-ivory/60 transition-colors hover:text-nyx-pale-gold sm:block"
            >
              ←
            </button>

            {/* Image */}
            <motion.div
              key={currentImage.src}
              className="relative h-[80vh] w-full max-w-7xl"
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Next */}
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 text-3xl text-nyx-ivory/60 transition-colors hover:text-nyx-pale-gold sm:block"
            >
              →
            </button>

            {/* Bottom information */}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center text-center">
              <p className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-nyx-pale-gold">
                NYX Pool Villa
              </p>

              <p className="mt-2 font-display text-3xl text-nyx-ivory">
                {currentImage.label}
              </p>

              <p className="mt-2 font-sans text-[0.65rem] font-bold uppercase tracking-[0.16em] text-nyx-ivory/45">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(totalImages).padStart(2, "0")}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

type SideImageProps = {
  image: (typeof galleryImages)[number];
  position: "previous" | "next";
  onClick: () => void;
};

function SideImage({
  image,
  position,
  onClick,
}: SideImageProps) {
  const isPrevious = position === "previous";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        isPrevious
          ? "Show previous gallery image"
          : "Show next gallery image"
      }
      className={`group absolute top-1/2 z-10 hidden w-[42vw] max-w-[460px] -translate-y-1/2 overflow-hidden rounded-2xl opacity-40 transition-all duration-500 hover:scale-[1.02] hover:opacity-70 sm:block ${
        isPrevious
          ? "left-[-17vw] sm:left-[-13vw] lg:left-[-9vw]"
          : "right-[-17vw] sm:right-[-13vw] lg:right-[-9vw]"
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-nyx-deep-water">
        <Image
          src={image.src}
          alt=""
          fill
          sizes="35vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-nyx-ink/20 transition-colors duration-500 group-hover:bg-transparent" />
      </div>
    </button>
  );
}