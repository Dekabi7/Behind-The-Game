import Image from "next/image";

export function PlaceholderImage({
  label,
  src,
  aspect = "aspect-[4/5]",
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
}: {
  label: string;
  src?: string;
  aspect?: string;
  className?: string;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden border border-border bg-surface ${aspect} ${className}`}>
        <Image src={src} alt={label} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center border border-dashed border-border bg-surface ${aspect} ${className}`}
    >
      <span className="px-4 text-center text-xs font-medium uppercase tracking-wide text-text-muted">
        {label}
      </span>
    </div>
  );
}
