import Image from 'next/image';
import { Link } from 'react-scroll';
import styles from 'styles/Hero.module.css';
import profilePic from 'public/me.jpg';
import { socials } from 'data/socials';
import { DownArrowIcon } from 'components/icons';
import { Social } from 'components/Hero/Social';

const Hero = () => (
  <main className={styles.hero}>
    <header className={styles.header}>
      <ol className={styles.socials}>
        {socials.map(({ href, icon }) => (
          <li key={href}>
            <Social href={href} icon={icon} />
          </li>
        ))}
      </ol>
      <nav className={styles.nav}>
        <Link to="about" smooth offset={16}>About</Link>
        <Link to="projects" smooth offset={16}>Projects</Link>
      </nav>
    </header>
    <div className={styles.main}>
      <div className={styles.name}>
        <h1>Cameron Keokolo Tabion</h1>
        <div className={styles.separator} />
        <h2>Full Stack Developer</h2>
      </div>
      <div className={styles['profile-pic']}>
        <Image
          src={profilePic}
          alt="Me"
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
          placeholder="blur"
          priority
        />
      </div>
    </div>
    <div className={styles['arrow-down']}>
      <DownArrowIcon />
    </div>
  </main>
);

export default Hero;
