"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "~/utils/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li";
}

export const Reveal = ({
  children,
  className,
  delay = 0,
  as = "div",
}: Props) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "transition-none will-change-transform",
        visible ? "animate-reveal" : "opacity-0",
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};
