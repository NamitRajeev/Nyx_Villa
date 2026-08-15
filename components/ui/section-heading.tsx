type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
}: SectionHeadingProps) {
  const copyColor = tone === "light" ? "text-nyx-ivory/76" : "text-nyx-ink/68";
  const titleColor = tone === "light" ? "text-nyx-ivory" : "text-nyx-ink";

  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <div className="mt-5 gold-rule" aria-hidden="true" />
      <h2
        className={`mt-6 font-display text-4xl leading-[0.94] tracking-[-0.035em] sm:text-5xl lg:text-6xl ${titleColor}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-6 max-w-xl text-pretty text-base leading-8 ${copyColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
