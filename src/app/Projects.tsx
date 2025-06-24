import { SiGithub } from "@icons-pack/react-simple-icons";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GlassContainer from "../components/GlassContainer";
import { Heading } from "../components/Heading";
import { Section } from "../components/Section";

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

export default function Projects() {
  return (
    <Section>
      <Heading title="PROJECTS" />
      <div className="flex items-stretch gap-4 max-md:flex-col">
        {projects.map(({ name, description, image, links }) => (
          <GlassContainer
            key={name}
            className="flex w-1/4 flex-col justify-between gap-4 p-4 max-md:w-full"
          >
            <div>
              <GlassContainer
                className="relative mb-4 h-40 w-full"
                hoverEffect={false}
                shadowIntensity={1}
              >
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
                  className="hover:text-white/80 active:scale-95"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </GlassContainer>
        ))}
      </div>
    </Section>
  );
}
