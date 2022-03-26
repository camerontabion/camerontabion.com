import styles from 'styles/Projects.module.css';
import { projects } from 'data/projects';
import { Project } from 'components/Projects/Project';

const Projects = () => (
  <section id="projects" className={styles.section}>
    <h2>Projects</h2>
    <div className={styles.projects}>
      {projects.map(({
        name,
        description,
        image,
        links,
      }) => (
        <Project
          key={name}
          name={name}
          description={description}
          image={image}
          links={links}
        />
      ))}
    </div>
  </section>
);

export default Projects;
