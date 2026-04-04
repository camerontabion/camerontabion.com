import GlassContainer from "~/components/GlassContainer";
import { Socials } from "~/components/Socials";
import { StarBackground } from "~/components/Star";
import { CONTACT_EMAIL } from "~/constants/contact";
import useCopyToClipboard from "~/hooks/useCopyToClipboard";
import { cn } from "~/utils/cn";

export default function Hero() {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <section className="mx-auto flex max-w-2xl flex-col gap-5 md:gap-6">
      <Socials isCopied={isCopied} copyToClipboard={copyToClipboard} />
      <GlassContainer
        className="relative flex flex-col gap-5 p-8 md:gap-12 md:p-10"
        hoverStrength={1}
      >
        <StarBackground />
        <img
          src="/hero-icon.svg"
          alt="Cameron Tabion logo"
          width={100}
          height={100}
          loading="eager"
          decoding="async"
        />
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-wide">
            Full stack · Web &amp; mobile
          </p>
          <h1 className="text-xl uppercase md:text-3xl">
            Cameron Keokolo Tabion
          </h1>
          <About
            copyToClipboard={copyToClipboard}
            className="w-2/3 max-md:hidden"
          />
        </div>
        <img
          src="/me.png"
          alt="Portrait of Cameron Keokolo Tabion"
          width={150}
          height={150}
          className="-right-0.5 -bottom-0.5 absolute rounded-br-lg max-sm:hidden"
          loading="eager"
          decoding="async"
        />
        <GlassContainer className="absolute top-3 right-3 bg-transparent p-2 backdrop-blur-none sm:hidden">
          <img
            src="/me.png"
            alt="Portrait of Cameron Keokolo Tabion"
            width={70}
            height={70}
            loading="eager"
            decoding="async"
          />
        </GlassContainer>
      </GlassContainer>
      <About copyToClipboard={copyToClipboard} className="w-full md:hidden" />
    </section>
  );
}

interface AboutProps {
  copyToClipboard: (text: string) => void;
  className?: string;
}

const About = ({ copyToClipboard, className }: AboutProps) => (
  <p className={cn("text-xs leading-relaxed", className)}>
    I build clean, effective web and mobile software end to end, with a growing
    focus on mobile. Open to full-time roles and selective freelance—say hello
    at{" "}
    <span className="inline-flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="font-bold underline-offset-2 transition-colors hover:text-white/80 hover:underline"
      >
        {CONTACT_EMAIL}
      </a>
      <button
        type="button"
        onClick={() => copyToClipboard(CONTACT_EMAIL)}
        aria-label="Copy email address to clipboard"
        title="Copy email address"
        className="text-[0.65rem] text-white/55 uppercase tracking-wide underline-offset-2 transition-colors hover:text-white/80 hover:underline"
      >
        Copy
      </button>
    </span>
    .
  </p>
);
