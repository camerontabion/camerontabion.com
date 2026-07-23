import { ChevronDown } from "lucide-react";
import { Card } from "~/components/Card";
import { Logo } from "~/components/Logo";
import { Socials } from "~/components/Socials";
import { StarField } from "~/components/Star";
import { CONTACT_EMAIL } from "~/constants/contact";
import useCopyToClipboard from "~/hooks/useCopyToClipboard";

export default function Hero() {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <section className="mx-auto w-full max-w-5xl animate-reveal">
      <Card
        interactive={false}
        className="relative overflow-hidden p-6 sm:p-8 md:p-12"
      >
        <div className="-top-24 -right-16 pointer-events-none absolute size-72 rounded-full bg-primary/15 blur-[100px]" />
        <StarField />
        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-10">
          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap items-center gap-4">
              <Logo className="h-9 w-auto animate-float text-foreground/90 motion-reduce:animate-none" />
              <StatusPill />
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-display text-lg text-primary-soft italic">
                Full stack engineer who likes building useful things.
              </p>
              <h1 className="font-display font-medium text-4xl text-foreground leading-[1.05] tracking-tight sm:text-5xl sm:leading-[1.02] md:text-6xl">
                Cameron Keokolo Tabion
              </h1>
              <About copyToClipboard={copyToClipboard} />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Socials isCopied={isCopied} copyToClipboard={copyToClipboard} />
            </div>
          </div>

          <Portrait />
        </div>
      </Card>
      <ScrollHint />
    </section>
  );
}

const ScrollHint = () => (
  <div className="mt-8 flex animate-scroll-hint justify-center opacity-0 motion-reduce:animate-none motion-reduce:opacity-70">
    <span
      aria-hidden="true"
      className="flex flex-col items-center gap-1.5 text-muted"
    >
      <span className="text-[0.7rem] uppercase tracking-[0.2em]">Scroll</span>
      <ChevronDown className="size-5 animate-bounce motion-reduce:animate-none" />
    </span>
  </div>
);

const Portrait = () => (
  <div className="relative mx-auto w-44 shrink-0 max-md:order-first md:w-56">
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20 blur-xl" />
    <div className="relative overflow-hidden rounded-3xl bg-surface-2">
      <img
        src="/me.jpg"
        alt="Portrait of Cameron Keokolo Tabion"
        width={240}
        height={276}
        className="w-full object-cover"
        loading="eager"
        decoding="async"
      />
    </div>
  </div>
);

const StatusPill = () => (
  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-foreground/80 text-xs">
    <span className="relative flex size-2">
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
      <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
    </span>
    Available for work
  </span>
);

interface AboutProps {
  copyToClipboard: (text: string) => void;
}

const About = ({ copyToClipboard }: AboutProps) => (
  <p className="max-w-xl text-base text-muted leading-relaxed">
    I design and build web and mobile apps that are fast, clean, and easy to
    use. Currently up for full-time work and the odd freelance project—find me
    at{" "}
    <button
      type="button"
      onClick={() => copyToClipboard(CONTACT_EMAIL)}
      aria-label="Copy email address to clipboard"
      title="Copy email address"
      className="text-foreground/90 underline decoration-border-strong underline-offset-4 transition-colors hover:text-primary-soft hover:decoration-primary-soft"
    >
      {CONTACT_EMAIL}
    </button>
    .
  </p>
);
