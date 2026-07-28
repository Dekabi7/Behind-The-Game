export function PlaceholderImage({
  label,
  aspect = "aspect-[4/5]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
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
