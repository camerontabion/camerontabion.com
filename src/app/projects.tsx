import Project from "components/project";

export const projects = [
  {
    name: "Harpie",
    description:
      "Hired as a Frontend Developer for Harpie. Currently developing several high-performance React components for Harpie's web app.",
    image: "/harpie.png",
    links: [{ name: "View Website", href: "https://www.harpie.io" }],
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
      { name: "View Website", href: "https://lvsp.camerontabion.com" },
      { name: "GitHub Repo", href: "https://github.com/camerontabion/lvsp-website" },
    ],
  },
  {
    name: "Personal Website",
    description: "My personal/portfolio website showcasing my skills and projects.",
    image: "/camerontabion.png",
    links: [
      { name: "View Website", href: "https://www.camerontabion.com" },
      { name: "GitHub Repo", href: "https://github.com/camerontabion/camerontabion.com" },
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
