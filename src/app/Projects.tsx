import { SiGithub } from "@icons-pack/react-simple-icons";
import Image from "next/image";
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
      "My personal website / portfolio showcasing my skills and projects.",
    image: "/camerontabion.png",
    link: "https://www.camerontabion.com",
  },
];

export default function Projects() {
  return (
    <Section>
      <Heading title="PROJECTS" />
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
              {image && (
                <Image
                  src={image}
                  alt={name}
                  className="rounded-md object-cover"
                  fill
                  sizes="100vw"
                />
              )}
            </GlassContainer>
            <div className="flex items-center justify-between gap-2">
              <a href={link} target="_blank" rel="noreferrer">
                <h3 className={cn("text-lg", link && "underline")}>{name}</h3>
              </a>
              {ghLink && (
                <a href={ghLink} target="_blank" rel="noreferrer">
                  <SiGithub />
                </a>
              )}
            </div>
            <p className="text-xs">{description}</p>
          </GlassContainer>
        ))}
      </div>
    </Section>
  );
}
