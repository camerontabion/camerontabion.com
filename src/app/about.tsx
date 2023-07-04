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
          I am a full stack developer with a passion for creating clean and effective web apps using
          modern technologies.
        </p>
        <p className="text-lg">
          Currently, I am a full-time student finishing up my bachelor's degree in Computer Science
          at the University of Nevada, Las Vegas. I am working as a frontend developer at Harpie,
          building out several components for their React web app. I also work part-time as a
          software developer in UNLV's DataX Lab under Dr. Mingon Kang and as a tutor for the LVSP
          scholarship cohort under Dr. Sarah Harris.
        </p>
        <p className="text-lg">
          If you are interested in working with me, feel free to shoot me an email at:
          contact@camerontabion.com
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
