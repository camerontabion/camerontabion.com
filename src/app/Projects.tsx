import { SiGithub } from "@icons-pack/react-simple-icons";
import { cn } from "~/utils/cn";
import GlassContainer from "../components/GlassContainer";
import { Heading } from "../components/Heading";
import { Section } from "../components/Section";

interface Project {
  name: string;
  description: string;
  image: string;
  link?: string;
  ghLink?: string;
}

const projects: Project[] = [
  {
    name: "Lexsy",
    description:
      "Legal AI for attorneys—think research, drafting, and the repetitive parts of practice, handled with software instead of busywork. I was a founding engineer at Lexsy, shipping product across the stack.",
    image: "/lexsy.png",
    link: "https://www.lexsy.ai/",
  },
  {
    name: "Harpie",
    description:
      "A suite of security products for your web3 wallet. I was the Lead Full Stack Engineer at Harpie.",
    image: "/harpie.png",
  },
  {
    name: "Coop Do",
    description:
      "A modern workspace that brings your projects, tasks, and team together. Create, organize, and collaborate in one beautifully designed platform.",
    image: "/coop-do.png",
    link: "https://coopdo.com",
  },
  {
    name: "Healage",
    description:
      "A dashboard for managing patients, prescriptions, and medication reminders. Created in partnership with the Kirk Kerkorian School of Medicine at UNLV.",
    image: "/healage.png",
  },
  {
    name: "Official LVSP Website",
    description: "The official website for the Las Vegas Scholars Program.",
    image: "/lvsp.png",
    link: "https://lvsp.camerontabion.com",
    ghLink: "https://github.com/camerontabion/lvsp-website",
  },
  {
    name: "Personal Website",
    description:
      "This portfolio—TanStack Start, Vite, React, and Tailwind—where I iterate on performance, a11y, and small UX details.",
    image: "/camerontabion.png",
    link: "https://www.camerontabion.com",
  },
];

export default function Projects() {
  return (
    <Section ariaLabelledBy="projects-heading">
      <Heading title="PROJECTS" id="projects-heading" />
      <div className="flex flex-wrap items-stretch justify-center gap-4 max-md:flex-col">
        {projects.map(({ name, description, image, link, ghLink }) => (
          <GlassContainer
            key={name}
            className="flex w-1/4 flex-col gap-3 p-4 max-md:w-full"
          >
            <GlassContainer
              className="relative h-40 w-full"
              hoverEffect={false}
              shadowIntensity={1}
            >
              <img
                src={image}
                alt={`${name} project preview`}
                className="absolute inset-0 size-full rounded-md object-cover"
                loading="lazy"
                decoding="async"
              />
            </GlassContainer>
            <div className="flex items-center justify-between gap-2">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  <h3 className={cn("text-lg")}>{name}</h3>
                </a>
              ) : (
                <h3 className="text-lg">{name}</h3>
              )}
              {ghLink && (
                <a
                  href={ghLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${name} GitHub repository`}
                  title={`${name} GitHub repository`}
                >
                  <SiGithub />
                </a>
              )}
            </div>
            <p className="text-xs leading-relaxed">{description}</p>
          </GlassContainer>
        ))}
      </div>
    </Section>
  );
}
