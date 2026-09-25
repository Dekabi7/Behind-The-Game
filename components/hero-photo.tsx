import { PlaceholderImage } from "@/components/placeholder-image";

/**
 * A hero photo with three layered motions. Each transform animation gets its own
 * element — CSS only lets one animation drive `transform` on a given node, so
 * stacking them would make the last one silently win:
 *
 *   outer   `rise`  — staggered entrance, plays once
 *   middle  `sway`  — perpetual vertical drift
 *   <img>   `pan`   — slow Ken Burns inside the frame
 *
 * `reverse` counter-phases the two, so one lifts while the other settles and the
 * pair reads as parallax without a scroll listener. Everything is pure CSS, so
 * this stays a server component.
 */
export function HeroPhoto({
  label,
  src,
  sizes,
  delay = 0,
  reverse = false,
  className = "",
}: {
  label: string;
  src: string;
  sizes: string;
  delay?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`group animate-rise motion-reduce:animate-none ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`${reverse ? "animate-sway-alt" : "animate-sway"} motion-reduce:animate-none`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <PlaceholderImage
          label={label}
          src={src}
          aspect="aspect-[3/4]"
          sizes={sizes}
          className="transition-colors duration-500 group-hover:border-accent"
          imageClassName={[
            reverse ? "animate-pan-alt" : "animate-pan",
            // Hovering pauses the drift so the photo can actually be looked at.
            "group-hover:[animation-play-state:paused]",
            "transition-[filter] duration-700 group-hover:brightness-110",
            "motion-reduce:animate-none",
          ].join(" ")}
        />
      </div>
    </div>
  );
}
