"use client";

import Image, { type ImageProps } from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

type ParallaxImageProps = ImageProps & {
  className?: string;
};

export function ParallaxImage({
  className = "",
  ...props
}: ParallaxImageProps) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 700], [0, 90]);
  const scale = useTransform(scrollY, [0, 700], [1, 1.06]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{ y, scale }}
    >
      <Image
        {...props}
        className={className}
      />
    </motion.div>
  );
}