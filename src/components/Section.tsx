import { cn } from "~/utils/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
  ariaLabelledBy?: string;
}

export const Section = ({ children, className, ariaLabelledBy }: Props) => (
  <section
    aria-labelledby={ariaLabelledBy}
    className={cn(
      "mx-auto flex w-full max-w-screen-2xl flex-col gap-8",
      className,
    )}
  >
    {children}
  </section>
);
