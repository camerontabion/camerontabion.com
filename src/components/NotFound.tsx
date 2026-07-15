import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-background p-8 text-center text-foreground">
      <p className="font-display text-lg text-primary-soft italic">404</p>
      <h1 className="font-display font-medium text-4xl tracking-tight">
        Page not found
      </h1>
      <p className="max-w-sm text-muted text-sm leading-relaxed">
        That URL doesn&apos;t exist. Head back home and try again.
      </p>
      <Link
        to="/"
        className="group hover:-translate-y-0.5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-primary-foreground text-sm transition duration-200 ease-out hover:bg-primary-soft motion-reduce:transition-none motion-reduce:hover:transform-none"
      >
        <ArrowLeft className="group-hover:-translate-x-0.5 size-4 transition-transform duration-200 ease-out motion-reduce:transition-none" />
        Back home
      </Link>
    </main>
  );
}
