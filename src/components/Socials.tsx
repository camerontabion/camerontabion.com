import { SiGithub } from "@icons-pack/react-simple-icons";
import { CheckIcon, MailIcon } from "lucide-react";
import GlassContainer from "~/components/GlassContainer";

interface SocialsProps {
  isCopied: boolean;
  copyToClipboard: (text: string) => void;
}

export const Socials = ({ isCopied, copyToClipboard }: SocialsProps) => (
  <div className="flex items-stretch gap-4 self-end">
    <EmailButton isCopied={isCopied} copyToClipboard={copyToClipboard} />
    <LinkedInButton />
    <GithubButton />
  </div>
);

interface EmailButtonProps {
  isCopied: boolean;
  copyToClipboard: (text: string) => void;
}

export const EmailButton = ({
  isCopied,
  copyToClipboard,
}: EmailButtonProps) => (
  <GlassContainer type="button" asChild>
    <button
      type="button"
      onClick={() => copyToClipboard("cameronktabion@gmail.com")}
      aria-label={
        isCopied ? "Email address copied to clipboard" : "Copy email address"
      }
      title={isCopied ? "Email copied" : "Copy email address"}
      className="relative flex items-center justify-center p-2"
    >
      {isCopied && (
        <p className="-translate-y-1/2 absolute animate-copied text-white text-xs">
          Copied!
        </p>
      )}
      {isCopied ? (
        <CheckIcon className="size-8" />
      ) : (
        <MailIcon className="size-8" />
      )}
    </button>
  </GlassContainer>
);

export const LinkedInButton = () => (
  <a
    href="https://www.linkedin.com/in/camerontabion/"
    target="_blank"
    rel="noreferrer"
    aria-label="Open Cameron Tabion's LinkedIn profile"
    title="LinkedIn"
  >
    <GlassContainer
      className="flex items-center justify-center p-2 pl-2.5"
      type="button"
    >
      <div className="relative size-8">
        <img
          src="/InBug-White.png"
          alt="LinkedIn"
          width="32"
          height="32"
          className="absolute inset-0 size-full"
          loading="eager"
          decoding="async"
        />
      </div>
    </GlassContainer>
  </a>
);

export const GithubButton = () => (
  <a
    href="https://github.com/camerontabion"
    target="_blank"
    rel="noreferrer"
    aria-label="Open Cameron Tabion's GitHub profile"
    title="GitHub"
  >
    <GlassContainer
      className="flex items-center justify-center p-2"
      type="button"
    >
      <SiGithub className="size-8" />
    </GlassContainer>
  </a>
);
