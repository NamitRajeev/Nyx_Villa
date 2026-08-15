import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
};

export function BrandMark({ className = "", priority = false }: BrandMarkProps) {
  return (
    <div
      className={`relative h-11 w-32 overflow-hidden ${className}`}
      role="img"
      aria-label="NYX Pool Villa"
    >
      <Image
        src="/images/nyx-logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-[47px] left-1/2 w-[168px] max-w-none -translate-x-1/2"
        height={168}
        priority={priority}
        sizes="128px"
        width={168}
      />
    </div>
  );
}
