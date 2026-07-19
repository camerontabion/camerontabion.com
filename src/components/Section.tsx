import { cn } from "~/utils/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
  ariaLabelledBy?: string;
  id?: string;
}

export const Section = ({ children, className, ariaLabelledBy, id }: Props) => (
  <section
    id={id}
    aria-labelledby={ariaLabelledBy}
    className={cn(
      "mx-auto flex w-full max-w-5xl scroll-mt-24 flex-col gap-8",
      className,
    )}
  >
    {children}
  </section>
);
