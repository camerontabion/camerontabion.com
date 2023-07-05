import Image from "next/image";
import profilePic from "public/me.jpg";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export default function Hero() {
  return (
    <main className="flex flex-col h-screen p-8 text-white bg-primary">
      <header className="flex items-center justify-between gap-6">
        <div className="flex gap-4">
          <a href="https://github.com/camerontabion" target="_blank" rel="noopener noreferrer">
            <IconBrandGithub className="w-8 h-8" />
          </a>
          <a href="mailto:contact@camerontabion.com" target="_blank" rel="noopener noreferrer">
            <IconMail className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/camerontabion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin className="w-8 h-8" />
          </a>
        </div>
        <nav className="flex gap-4">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
        </nav>
      </header>
      <div className="flex flex-col grow">
        <div className="flex items-center justify-center gap-32 grow">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl">Cameron Keokolo Tabion</h1>
            <div className="w-10/12 h-1 bg-white" />
            <h2 className="text-lg">Full Stack Software Engineer</h2>
          </div>
          <div className="relative w-64 h-64 overflow-hidden border-2 border-white rounded-full">
            <Image
              src={profilePic}
              alt="Me"
              placeholder="blur"
              priority
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
        </div>
        <a href="#about">
          <ChevronDownIcon className="w-12 h-12 m-auto animate-bounce" />
        </a>
      </div>
    </main>
  );
}
