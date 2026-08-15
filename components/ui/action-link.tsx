import { ArrowUpRight } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

type ActionLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "tertiary";
  showIcon?: boolean;
};

const variants = {
  primary:
    "bg-nyx-gold text-nyx-ink shadow-nyx-gold hover:bg-nyx-pale-gold",
  secondary:
    "border border-nyx-gold/70 bg-transparent text-nyx-ivory hover:border-nyx-pale-gold hover:bg-nyx-pale-gold hover:text-nyx-ink",
  tertiary:
    "border-b border-nyx-gold/60 px-0 text-nyx-ink hover:border-nyx-ink hover:text-nyx-deep-water",
} as const;

export function ActionLink({
  children,
  className = "",
  showIcon = true,
  variant = "primary",
  ...props
}: ActionLinkProps) {
  const isTertiary = variant === "tertiary";

  return (
    <a
      className={`group inline-flex items-center justify-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.16em] transition duration-200 focus-visible:outline-nyx-pale-gold ${
        isTertiary ? "py-2" : "min-h-12 px-5"
      } ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showIcon ? (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.6}
        />
      ) : null}
    </a>
  );
}
