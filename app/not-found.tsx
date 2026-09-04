import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center sm:py-32">
      <Image src="/images/logo.png" alt="Behind the Game" width={483} height={501} className="h-20 w-auto" />
      <span className="eyebrow mt-8 text-accent">404</span>
      <h1 className="mt-4 font-display text-3xl font-black tracking-tight sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-6 text-lg text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 bg-accent-strong px-8 py-4 text-sm font-semibold uppercase tracking-wide text-text transition-opacity hover:opacity-90"
      >
        Back to Home
      </Link>
    </div>
  );
}
