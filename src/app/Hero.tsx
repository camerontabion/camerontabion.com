import GlassContainer from "~/components/GlassContainer";
import { Socials } from "~/components/Socials";
import { StarBackground } from "~/components/Star";
import useCopyToClipboard from "~/hooks/useCopyToClipboard";
import { cn } from "~/utils/cn";

export default function Hero() {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <section className="mx-auto flex max-w-2xl flex-col gap-4">
      <Socials isCopied={isCopied} copyToClipboard={copyToClipboard} />
      <GlassContainer className="relative flex flex-col gap-4 p-8 md:gap-12">
        <StarBackground />
        <img
          src="/hero-icon.svg"
          alt="Cameron Tabion logo"
          width={100}
          height={100}
          loading="eager"
          decoding="async"
        />
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase">Full stack software engineer</p>
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
    I build clean and effective web apps. If you&apos;re interested in working
    together, contact me at{" "}
    <button
      type="button"
      onClick={() => copyToClipboard("cameronktabion@gmail.com")}
      aria-label="Copy Cameron Tabion's email address"
      title="Copy email address"
      className="cursor-pointer font-bold transition-transform duration-200 ease-out hover:text-white/80 hover:underline active:scale-95"
    >
      cameronktabion@gmail.com
    </button>
    .
  </p>
);
