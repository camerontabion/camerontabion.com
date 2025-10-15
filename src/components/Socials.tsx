"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { CheckIcon, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
  <Link href="https://www.linkedin.com/in/camerontabion/" target="_blank">
    <GlassContainer
      className="flex items-center justify-center p-2 pl-2.5"
      type="button"
    >
      <div className="relative size-8">
        <Image
          priority
          src="/InBug-White.png"
          alt="LinkedIn"
          className="absolute inset-0"
          fill
          sizes="100vw"
        />
      </div>
    </GlassContainer>
  </Link>
);

export const GithubButton = () => (
  <Link href="https://github.com/camerontabion" target="_blank">
    <GlassContainer
      className="flex items-center justify-center p-2"
      type="button"
    >
      <SiGithub className="size-8" />
    </GlassContainer>
  </Link>
);
