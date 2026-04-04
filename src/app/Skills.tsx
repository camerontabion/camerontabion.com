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
import GlassContainer from "../components/GlassContainer";
import { Heading } from "../components/Heading";
import { Section } from "../components/Section";

interface SkillImageProps {
  src: string;
  alt: string;
  className?: string;
}

const SkillImage = ({ src, alt, className }: SkillImageProps) => (
  <div className="relative size-12 max-md:size-6">
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  </div>
);

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
  {
    name: "Next.js",
    icon: <SiNextdotjs className="size-12 max-md:size-6" />,
  },
  {
    name: "TanStack Start",
    icon: (
      <SkillImage
        src="/tanstack-start.png"
        alt="TanStack Start"
        className="size-full object-contain grayscale"
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
      <SkillImage
        src="/convex.svg"
        alt="Convex"
        className="size-full object-contain"
      />
    ),
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="size-12 max-md:size-6" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="size-12 max-md:size-6" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="size-12 max-md:size-6" />,
  },
  {
    name: "Python",
    icon: <SiPython className="size-12 max-md:size-6" />,
  },
  { name: "Go", icon: <SiGo className="size-12 max-md:size-6" /> },
  {
    name: "C++",
    icon: <SiCplusplus className="size-12 max-md:size-6" />,
  },
];

export default function Skills() {
  return (
    <Section ariaLabelledBy="skills-heading">
      <Heading title="SKILLS" align="right" id="skills-heading" />
      <div className="grid grid-cols-2 justify-items-stretch gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map(({ name, icon }) => (
          <GlassContainer
            key={name}
            className="flex flex-col items-center justify-center gap-2 p-4"
          >
            {icon}
            <p className="text-xs">{name}</p>
          </GlassContainer>
        ))}
      </div>
    </Section>
  );
}
