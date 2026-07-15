import { ArrowRight } from "lucide-react";
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
        className="relative overflow-hidden p-8 md:p-12"
      >
        <div className="-top-24 -right-16 pointer-events-none absolute size-72 rounded-full bg-primary/15 blur-[100px]" />
        <StarField />
        <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap items-center gap-4">
              <Logo className="h-9 w-auto animate-float text-foreground/90 motion-reduce:animate-none" />
              <StatusPill />
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-display text-lg text-primary-soft italic">
                Full stack engineer, focused on web &amp; mobile
              </p>
              <h1 className="font-display font-medium text-5xl text-foreground leading-[1.02] tracking-tight md:text-6xl">
                Cameron Keokolo Tabion
              </h1>
              <About copyToClipboard={copyToClipboard} />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group hover:-translate-y-0.5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground text-sm shadow-[0_10px_30px_-12px_rgba(232,160,106,0.9)] transition duration-200 ease-out hover:bg-primary-soft motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                Get in touch
                <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </a>
              <Socials isCopied={isCopied} copyToClipboard={copyToClipboard} />
            </div>
          </div>

          <Portrait />
        </div>
      </Card>
    </section>
  );
}

const Portrait = () => (
  <div className="relative mx-auto w-44 shrink-0 max-md:order-first md:w-56">
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20 blur-xl" />
    <div className="relative overflow-hidden rounded-3xl bg-surface-2">
      <img
        src="/me.png"
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
    I build web and mobile apps, and I like sweating the small stuff that makes
    them feel good to use. Open to full-time roles and a bit of freelance—say
    hello at{" "}
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
