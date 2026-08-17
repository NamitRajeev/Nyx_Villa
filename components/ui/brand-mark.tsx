import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
};

export function BrandMark({
  className = "",
  priority = false,
}: BrandMarkProps) {
  return (
    <div
      className={`relative h-11 w-32 overflow-hidden ${className}`}
      role="img"
      aria-label="NYX Pool Villa"
    >
      <Image
        src="/images/nyx-logo1.png"
        alt=""
        aria-hidden="true"
        width={165}
        height={165}
        priority={priority}
        sizes="165px"
        className="pointer-events-none absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}