import {
  IconBrandCpp,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconBrandTypescript,
} from "@tabler/icons-react";
import Skill from "components/skill";

export const skills = [
  { name: "HTML", icon: <IconBrandHtml5 className="w-12 h-12" /> },
  { name: "CSS", icon: <IconBrandCss3 className="w-12 h-12" /> },
  { name: "JavaScript", icon: <IconBrandJavascript className="w-12 h-12" /> },
  { name: "TypeScript", icon: <IconBrandTypescript className="w-12 h-12" /> },
  { name: "React", icon: <IconBrandReact className="w-12 h-12" /> },
  { name: "Node", icon: <IconBrandNodejs className="w-12 h-12" /> },
  { name: "Python", icon: <IconBrandPython className="w-12 h-12" /> },
  { name: "C++", icon: <IconBrandCpp className="w-12 h-12" /> },
];

export default function About() {
  return (
    <section id="about" className="p-28">
      <h2 className="mb-12 text-4xl text-center">Hello, I'm Cam!</h2>
      <div className="flex flex-col max-w-4xl gap-4 mx-auto mb-20">
        <p className="text-lg">
          I am a full stack software engineer with a passion for creating clean and effective web
          apps using modern technologies.
        </p>
        <p className="text-lg">
          Currently, I am working as a Full Stack Software Engineer at Harpie; working on several
          mission-critical features for their advanced security products, many of which I have led
          development on. I also work part-time as a Computer Science and Math tutor for the LVSP
          scholarship cohort under Dr. Sarah Harris.
        </p>
      </div>

      <h3 className="mb-8 text-3xl text-center">Skills</h3>
      <ol className="flex items-center justify-center gap-8">
        {skills.map(({ name, icon }) => (
          <li key={name}>
            <Skill name={name} icon={icon} />
          </li>
        ))}
      </ol>
    </section>
  );
}
