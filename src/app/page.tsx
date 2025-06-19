"use client";

import {
  SiCplusplus,
  SiCss,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { CheckIcon, LinkIcon, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useCopyToClipboard from "~/hooks/useCopyToClipboard";
import GlassContainer from "./GlassContainer";
import { Heading } from "./Heading";
import { Section } from "./Section";

const projects = [
  {
    name: "Harpie",
    description:
      "A suite of security products for your web3 wallet. I was the Lead Full Stack Engineer at Harpie.",
    image: "/harpie.png",
    links: [],
  },
  {
    name: "Healage",
    description:
      "A dashboard for managing patients, prescriptions, and medication reminders. Created in partnership with the Kirk Kerkorian School of Medicine at UNLV.",
    image: "/healage.png",
    links: [],
  },
  {
    name: "Official LVSP Website",
    description: "The official website for the Las Vegas Scholars Program.",
    image: "/lvsp.png",
    links: [
      {
        name: "View Website",
        href: "https://lvsp.camerontabion.com",
        icon: <LinkIcon className="size-6" />,
      },
      {
        name: "GitHub Repo",
        href: "https://github.com/camerontabion/lvsp-website",
        icon: <SiGithub className="size-6" />,
      },
    ],
  },
  {
    name: "Personal Website",
    description:
      "My personal website / portfolio showcasing my skills and projects.",
    image: "/camerontabion.png",
    links: [
      {
        name: "View Website",
        href: "https://www.camerontabion.com",
        icon: <LinkIcon className="size-6" />,
      },
      {
        name: "GitHub Repo",
        href: "https://github.com/camerontabion/camerontabion.com",
        icon: <SiGithub className="size-6" />,
      },
    ],
  },
];

const skills = [
  { name: "HTML", icon: <SiHtml5 className="h-12 w-12" /> },
  { name: "CSS", icon: <SiCss className="h-12 w-12" /> },
  { name: "JavaScript", icon: <SiJavascript className="h-12 w-12" /> },
  { name: "TypeScript", icon: <SiTypescript className="h-12 w-12" /> },
  { name: "React", icon: <SiReact className="h-12 w-12" /> },
  { name: "Next.js", icon: <SiNextdotjs className="h-12 w-12" /> },
  { name: "Node.js", icon: <SiNodedotjs className="h-12 w-12" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="h-12 w-12" /> },
  { name: "MongoDB", icon: <SiMongodb className="h-12 w-12" /> },
  { name: "Python", icon: <SiPython className="h-12 w-12" /> },
  { name: "Go", icon: <SiGo className="h-12 w-12" /> },
  { name: "C++", icon: <SiCplusplus className="h-12 w-12" /> },
];

export default function App() {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <main className="flex w-full flex-col gap-24 py-24">
      {/* HERO */}
      <section className="mx-auto flex w-2xl flex-col gap-4">
        <div className="flex items-stretch gap-4 self-end">
          <GlassContainer type="button" asChild>
            <button
              type="button"
              onClick={() => copyToClipboard("cameronktabion@gmail.com")}
              className="relative flex items-center justify-center p-2"
            >
              {isCopied && (
                <p className="-translate-y-1/2 absolute animate-copied text-white/80 text-xs">
                  copied
                </p>
              )}
              {isCopied ? (
                <CheckIcon className="size-8" />
              ) : (
                <MailIcon className="size-8" />
              )}
            </button>
          </GlassContainer>
          <Link
            href="https://www.linkedin.com/in/camerontabion/"
            target="_blank"
          >
            <GlassContainer
              className="flex items-center justify-center p-2 pl-2.5"
              type="button"
            >
              <div className="relative size-8">
                <img
                  src="/InBug-White.png"
                  alt="LinkedIn"
                  className="absolute inset-0"
                />
              </div>
            </GlassContainer>
          </Link>
          <Link href="https://github.com/camerontabion" target="_blank">
            <GlassContainer
              className="flex items-center justify-center p-2"
              type="button"
            >
              <SiGithub className="size-8" />
            </GlassContainer>
          </Link>
        </div>
        <div className="relative">
          {/* BACKGROUND STARS */}
          <img
            src="/star.png"
            alt="Symbol In the middle of the page"
            width={64}
            height={64}
            className="absolute bottom-1/2 left-1/2 animate-pulse"
            style={{ animationDelay: "0s", animationDuration: "2s" }}
          />
          <img
            src="/star.png"
            alt="Symbol In the middle of the page"
            width={44}
            height={44}
            className="absolute top-1/3 right-1/6 animate-pulse"
            style={{ animationDelay: "0.3s", animationDuration: "3.2s" }}
          />
          <img
            src="/star.png"
            alt="Symbol In the middle of the page"
            width={32}
            height={32}
            className="absolute top-1/6 left-1/3 animate-pulse"
            style={{ animationDelay: "1.2s", animationDuration: "2.6s" }}
          />
          <img
            src="/star.png"
            alt="Symbol In the middle of the page"
            width={48}
            height={48}
            className="absolute top-1/6 right-1/3 animate-pulse"
            style={{ animationDelay: "0.7s", animationDuration: "2.9s" }}
          />
          <img
            src="/star.png"
            alt="Symbol In the middle of the page"
            width={24}
            height={24}
            className="absolute top-8 left-1/2 animate-pulse"
            style={{ animationDelay: "1.8s", animationDuration: "2.4s" }}
          />
          <img
            src="/star.png"
            alt="Symbol In the middle of the page"
            width={40}
            height={40}
            className="absolute top-8 right-1/2 animate-pulse"
            style={{ animationDelay: "0.4s", animationDuration: "3.1s" }}
          />
          <img
            src="/star.png"
            alt="Symbol In the middle of the page"
            width={56}
            height={56}
            className="absolute top-1/4 left-2/3 animate-pulse"
            style={{ animationDelay: "1.1s", animationDuration: "2.7s" }}
          />
          <img
            src="/star.png"
            alt="Symbol In the middle of the page"
            width={20}
            height={20}
            className="absolute top-1/4 right-2/3 animate-pulse"
            style={{ animationDelay: "0.9s", animationDuration: "2.3s" }}
          />
          <img
            src="/star.png"
            alt="Symbol In the middle of the page"
            width={36}
            height={36}
            className="absolute right-1/4 bottom-1/3 animate-pulse"
            style={{ animationDelay: "0.6s", animationDuration: "3.3s" }}
          />
          <GlassContainer className="relative flex flex-col gap-12 p-8">
            <Image
              priority
              src="/hero-icon.svg"
              alt="Symbol In the middle of the page"
              width={100}
              height={100}
            />
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase">FULL STACK SOFTWARE ENGINEER</p>
              <h1 className="text-3xl uppercase">CAMERON KEOKOLO TABION</h1>
              <p className="w-2/3 text-xs">
                I build clean and effective web apps. If you're interested in
                working together, contact me at{" "}
                <button
                  type="button"
                  onClick={() => copyToClipboard("cameronktabion@gmail.com")}
                  className="cursor-pointer font-bold transition-transform duration-200 ease-out hover:text-white/80 hover:underline active:scale-95"
                >
                  cameronktabion@gmail.com
                </button>
              </p>
            </div>
            <Image
              priority
              src="/me.png"
              alt="Cameron Keokolo Tabion"
              width={150}
              height={150}
              className="-right-0.5 -bottom-0.5 absolute rounded-br-lg"
            />
          </GlassContainer>
        </div>
      </section>
      {/* PROJECTS */}
      <Section>
        <Heading title="PROJECTS" />
        <div className="flex items-stretch gap-4 px-8">
          {projects.map(({ name, description, image, links }) => (
            <GlassContainer
              key={name}
              className="flex w-1/4 flex-col justify-between gap-4 p-4"
            >
              <div>
                <GlassContainer className="relative mb-4 h-40 w-full">
                  {image && (
                    <Image
                      src={image}
                      alt={name}
                      layout="fill"
                      className="rounded-md object-cover"
                    />
                  )}
                </GlassContainer>
                <h3 className="mb-2 text-lg">{name}</h3>
                <p className="text-xs">{description}</p>
              </div>
              <div className="flex items-center gap-2">
                {links.map(({ name, href, icon }) => (
                  <Link
                    key={name}
                    title={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </GlassContainer>
          ))}
        </div>
      </Section>
      {/* SKILLS */}
      <Section>
        <Heading title="SKILLS" align="right" />
        <div className="grid grid-cols-6 gap-4 px-8">
          {skills.map(({ name, icon }) => (
            <GlassContainer
              key={name}
              className="flex grow flex-col items-center justify-center gap-2 p-4"
            >
              {icon}
              <p className="text-xs">{name}</p>
            </GlassContainer>
          ))}
        </div>
      </Section>
      {/* FOOTER */}
      <footer className="flex items-center justify-center gap-2">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Cameron Keokolo Tabion
        </p>
      </footer>
    </main>
  );
}
