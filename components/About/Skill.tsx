import { ReactNode, useState } from 'react';
import styles from 'styles/About.module.css';

export const Skill = ({ name, icon }: Props) => {
  const [animating, setAnimating] = useState(false);
  const toggleAnimating = () => setAnimating(!animating);

  return (
    <>
      <div
        className={animating ? styles.wiggle : ''}
        onMouseEnter={toggleAnimating}
        onAnimationEnd={toggleAnimating}
      >
        {icon}
      </div>
      <p>{name}</p>
    </>
  );
};

interface Props {
  name: string;
  icon: ReactNode;
}
