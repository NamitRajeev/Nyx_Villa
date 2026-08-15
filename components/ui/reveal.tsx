"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

type RevealProps = Omit<
  HTMLMotionProps<"div">,
  "animate" | "initial" | "transition" | "viewport" | "whileInView"
> & {
  delay?: number;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  ...props
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ amount: 0.2, once: true }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
