"use client";

import { ReactNode, useState } from "react";

interface Props {
  name: string;
  icon: ReactNode;
}

export default function Skill({ name, icon }: Props) {
  const [animating, setAnimating] = useState(false);
  const toggleAnimating = () => setAnimating(!animating);

  return (
    <div className="flex flex-col items-center">
      <div
        className={`${animating && "animate-wiggle"}`}
        onMouseEnter={toggleAnimating}
        onAnimationEnd={toggleAnimating}
      >
        {icon}
      </div>
      <p>{name}</p>
    </div>
  );
}
