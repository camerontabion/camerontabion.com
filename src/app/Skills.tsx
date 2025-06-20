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
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import GlassContainer from "../components/GlassContainer";
import { Heading } from "../components/Heading";
import { Section } from "../components/Section";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="size-12" /> },
  { name: "CSS", icon: <SiCss className="size-12" /> },
  { name: "JavaScript", icon: <SiJavascript className="size-12" /> },
  { name: "TypeScript", icon: <SiTypescript className="size-12" /> },
  { name: "React", icon: <SiReact className="size-12" /> },
  { name: "Next.js", icon: <SiNextdotjs className="size-12" /> },
  { name: "Node.js", icon: <SiNodedotjs className="size-12" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="size-12" /> },
  { name: "MongoDB", icon: <SiMongodb className="size-12" /> },
  { name: "Python", icon: <SiPython className="size-12" /> },
  { name: "Go", icon: <SiGo className="size-12" /> },
  { name: "C++", icon: <SiCplusplus className="size-12" /> },
];

export default function Skills() {
  return (
    <Section>
      <Heading title="SKILLS" align="right" />
      <div className="grid grid-cols-6 gap-4 max-md:grid-cols-3">
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
  );
}
