import Project from "components/project";
import { IconLink, IconBrandGithubFilled } from "@tabler/icons-react";

export interface Project {
  name: string;
  description: string;
  image: string;
  links: {
    name: string;
    href: string;
    icon?: React.ReactNode;
  }[];
}

export const projects: Project[] = [
  {
    name: "Harpie",
    description:
      "Harpie is a powerful web3 security tool that protects users from phishing attacks and scams. Currently working as a Full Stack Software Engineer II at Harpie.",
    image: "/harpie.png",
    links: [
      {
        name: "View Website",
        href: "https://www.harpie.io",
        icon: <IconLink className="w-8 h-8" />,
      },
    ],
  },
  {
    name: "Healage",
    description:
      "Patient dashboard for managing patients, prescriptions, and medication reminders. Reminders are displayed on a FitBit watch app. Created in partnership with the Kirk Kerkorian School of Medicine at UNLV.",
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
        icon: <IconLink className="w-8 h-8" />,
      },
      {
        name: "GitHub Repo",
        href: "https://github.com/camerontabion/lvsp-website",
        icon: <IconBrandGithubFilled className="w-8 h-8" />,
      },
    ],
  },
  {
    name: "Personal Website",
    description: "My personal/portfolio website showcasing my skills and projects.",
    image: "/camerontabion.png",
    links: [
      {
        name: "View Website",
        href: "https://www.camerontabion.com",
        icon: <IconLink className="w-8 h-8" />,
      },
      {
        name: "GitHub Repo",
        href: "https://github.com/camerontabion/camerontabion.com",
        icon: <IconBrandGithubFilled className="w-8 h-8" />,
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="text-white p-28 bg-primary">
      <h2 className="mb-12 text-4xl text-center">Projects</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {projects.map(({ name, description, image, links }) => (
          <Project key={name} name={name} description={description} image={image} links={links} />
        ))}
      </div>
    </section>
  );
}
