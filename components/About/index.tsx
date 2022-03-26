import { Skill } from 'components/About/Skill';
import styles from 'styles/About.module.css';
import { title, paragraphs } from 'data/about';
import { skills } from 'data/skills';

const About = () => (
  <section id="about" className={styles.section}>
    <div className={styles.bio}>
      <h2>{title}</h2>
      {paragraphs.map((text) => <p key={text}>{text}</p>)}
    </div>
    <div className={styles.skills}>
      <h3>Skills</h3>
      <ol>
        {skills.map(({ name, icon }) => (
          <li key={name}>
            <Skill name={name} icon={icon} />
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default About;
