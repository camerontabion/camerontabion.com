import { cn } from "~/utils/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className }: Props) => (
  <section
    className={cn(
      "mx-auto flex w-full max-w-screen-2xl flex-col gap-8",
      className,
    )}
  >
    {children}
  </section>
);
