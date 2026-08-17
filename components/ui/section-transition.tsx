type SectionTransitionProps = {
  from: "light" | "dark";
  to: "light" | "dark";
};

export function SectionTransition({
  from,
  to,
}: SectionTransitionProps) {
  const fromColor =
    from === "light" ? "var(--nyx-ivory)" : "var(--nyx-ink)";

  const toColor =
    to === "light" ? "var(--nyx-ivory)" : "var(--nyx-ink)";

  return (
    <div
      aria-hidden="true"
      className="relative z-10 h-10"
      style={{
        background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
      }}
    />
  );
}