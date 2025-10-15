import {
  SiCplusplus,
  SiCss,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";
import GlassContainer from "../components/GlassContainer";
import { Heading } from "../components/Heading";
import { Section } from "../components/Section";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="size-12 max-md:size-6" /> },
  { name: "CSS", icon: <SiCss className="size-12 max-md:size-6" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="size-12 max-md:size-6" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="size-12 max-md:size-6" />,
  },
  { name: "React", icon: <SiReact className="size-12 max-md:size-6" /> },
  { name: "Next.js", icon: <SiNextdotjs className="size-12 max-md:size-6" /> },
  {
    name: "Tanstack Start",
    icon: (
      <Image
        src="/tanstack-start.png"
        alt="Tanstack Start"
        width={48}
        height={48}
        style={{
          maxWidth: "100%",
          height: "auto",
          filter: "grayscale(100%)",
        }}
        className="max-md:size-6"
      />
    ),
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="size-12 max-md:size-6" />,
  },
  {
    name: "Convex",
    icon: (
      <Image
        src="/convex.svg"
        alt="Convex"
        width={48}
        height={48}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        className="max-md:size-6"
      />
    ),
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="size-12 max-md:size-6" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="size-12 max-md:size-6" /> },
  { name: "Node.js", icon: <SiNodedotjs className="size-12 max-md:size-6" /> },
  { name: "Python", icon: <SiPython className="size-12 max-md:size-6" /> },
  { name: "Go", icon: <SiGo className="size-12 max-md:size-6" /> },
  { name: "C++", icon: <SiCplusplus className="size-12 max-md:size-6" /> },
];

export default function Skills() {
  return (
    <Section>
      <Heading title="SKILLS" align="right" />
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(({ name, icon }) => (
          <GlassContainer
            key={name}
            className="flex w-1/7 flex-col items-center justify-center gap-2 p-4 max-md:w-1/4"
          >
            {icon}
            <p className="text-xs">{name}</p>
          </GlassContainer>
        ))}
      </div>
    </Section>
  );
}
