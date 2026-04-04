import { Link } from "@tanstack/react-router";

export function NotFoundPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-background p-8 text-center text-primary-foreground">
      <p className="text-white/60 text-xs uppercase tracking-wide">404</p>
      <h1 className="text-2xl uppercase">Page not found</h1>
      <p className="max-w-sm text-sm text-white/70">
        That URL doesn&apos;t exist. Head back home and try again.
      </p>
      <Link
        to="/"
        className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm uppercase tracking-wide transition-colors hover:bg-white/20"
      >
        Home
      </Link>
    </main>
  );
}
