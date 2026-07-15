import { cn } from "~/utils/cn";
import { Star } from "./Star";

interface Props {
  title: string;
  eyebrow?: string;
  id?: string;
  className?: string;
}

export const Heading = ({ title, eyebrow, id, className }: Props) => (
  <div className={cn("flex flex-col gap-4", className)}>
    {eyebrow && (
      <span className="flex items-center gap-2 font-display text-base text-primary-soft italic">
        <Star className="size-3.5" />
        {eyebrow}
      </span>
    )}
    <div className="flex items-center gap-5">
      <h2
        id={id}
        className="font-display font-medium text-3xl text-foreground tracking-tight md:text-4xl"
      >
        {title}
      </h2>
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-gradient-to-r from-border-strong to-transparent"
      />
      <Star className="size-4 shrink-0 text-primary-soft/70" />
    </div>
  </div>
);
