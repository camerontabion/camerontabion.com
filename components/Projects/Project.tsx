import styles from 'styles/Projects.module.css';

export const Project = ({
  name,
  description,
  image,
  links,
}: Props) => (
  <article className={styles.project}>
    <div
      className={styles.image}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
    <div className={styles.details}>
      <div className={styles.description}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
      <div className={styles.links}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  </article>
);

interface ILink {
  name: string;
  href: string;
}

interface Props {
  name: string;
  description: string;
  image: string;
  links: ILink[];
}
