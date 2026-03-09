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
      "A suite of security products for web3 wallets, where I served as lead full stack engineer.",
    image: "/harpie.png",
  },
  {
    name: "Coop Do",
    description:
      "A modern workspace for projects, tasks, and collaboration in one polished platform.",
    image: "/coop-do.png",
    link: "https://coopdo.com",
  },
  {
    name: "Healage",
    description:
      "A healthcare dashboard for patients, prescriptions, and medication reminders built with UNLV's Kirk Kerkorian School of Medicine.",
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
      "My personal portfolio site showcasing selected projects, strengths, and technical skills.",
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
              <Image
                src={image}
                alt={`${name} project preview`}
                className="rounded-md object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
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
            <p className="text-xs">{description}</p>
          </GlassContainer>
        ))}
      </div>
    </Section>
  );
}
