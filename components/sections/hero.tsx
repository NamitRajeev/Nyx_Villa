"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { ActionLink } from "@/components/ui/action-link";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-4.75rem)] items-end overflow-hidden bg-nyx-ink"
    >
      {/* Hero image — appears first */}
      <motion.div
        className="absolute inset-0"
        initial={
          prefersReducedMotion
            ? false
            : {
                opacity: 0,
                scale: 1.035,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : {
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }
        }
      >
        <Image
          alt="A teal bedroom at NYX Pool Villa illuminated by blue ambient light"
          className="object-cover object-[58%_center]"
          fill
          priority
          quality={88}
          sizes="100vw"
          src="/images/nyx-bedroom-teal-night.jpeg"
        />
      </motion.div>

      {/* Image overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,25,33,0.95)_0%,rgba(7,25,33,0.72)_42%,rgba(7,25,33,0.16)_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,25,33,0.68)_0%,transparent_38%)]" />

      {/* Hero text — appears slowly after image */}
      <div className="section-shell relative z-10 w-full pb-14 pt-24 sm:pb-20 lg:pb-24">
        <motion.div
          className="max-w-2xl"
          initial={
            prefersReducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 1.2,
                  delay: 1.25,
                  ease: [0.22, 1, 0.36, 1],
                }
          }
        >
          <p className="eyebrow">
            Premium indoor private pool villa
          </p>

          <div className="mt-5 gold-rule" aria-hidden="true" />

          <h1
            className="mt-7 max-w-xl font-display text-5xl leading-[0.88] tracking-[-0.045em] text-nyx-ivory sm:text-6xl lg:text-8xl"
            id="hero-heading"
          >
            Private. Gilded.{" "}
            <em className="font-medium text-nyx-pale-gold">
              Entirely yours.
            </em>
          </h1>

          <p className="mt-7 max-w-lg text-pretty text-base leading-8 text-nyx-ivory/78 sm:text-lg">
            From quiet evenings to shared celebrations, make the space
            entirely yours.
          </p>

          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row">
            <ActionLink href="#villa" variant="secondary">
              Explore the villa
            </ActionLink>
          </div>
        </motion.div>

        {/* Discover NYX — appears last */}
        <motion.a
          aria-label="Explore the NYX experience"
          className="mt-16 inline-flex items-center gap-3 font-sans text-[0.6875rem] font-bold uppercase tracking-[0.17em] text-nyx-ivory/66 transition-colors hover:text-nyx-pale-gold sm:mt-20"
          href="#villa"
          initial={
            prefersReducedMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          animate={{
            opacity: 1,
          }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 1,
                  delay: 2.5,
                  ease: "easeOut",
                }
          }
        >
          Discover NYX
          <ArrowDown
            aria-hidden="true"
            className="size-4"
            strokeWidth={1.5}
          />
        </motion.a>
      </div>
    </section>
  );
}