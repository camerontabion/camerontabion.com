"use client";

import type {
  HTMLAttributes,
  MouseEvent,
  ReactElement,
  ReactNode,
} from "react";
import {
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "~/utils/cn";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  type?: "container" | "button";
  hoverEffect?: boolean;
  hoverStrength?: number;
  shadowIntensity?: number;
  className?: string;
  asChild?: boolean;
}

const GlassContainer = ({
  children,
  className,
  asChild,
  type = "container",
  hoverEffect = true,
  hoverStrength = 3,
  shadowIntensity = 0.1,
  style,
  ...props
}: Props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!hoverEffect || prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    if (!hoverEffect || prefersReducedMotion) return;
    setMousePosition({ x: 0, y: 0 });
  };

  const getScaledStrength = () => {
    const baseSize = 200;
    const sizeFactor =
      Math.min(containerSize.width, containerSize.height) / baseSize;
    return hoverStrength * (1 + (1 - sizeFactor) * 9);
  };

  const glassClasses = cn(
    "rounded-lg bg-white/10 backdrop-blur-[2px]",
    "border-l-2 border-l-white/20",
    "border-t-2 border-t-white/20",
    "border-r-2 border-r-gray-800/20",
    "border-b-2 border-b-gray-800/20",
    type === "button" && "cursor-pointer hover:bg-white/20 active:scale-95",
    "transition-transform duration-200 ease-out motion-reduce:transform-none",
    className,
  );

  const elementProps = {
    ...props,
    ref: containerRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      transform:
        hoverEffect && !prefersReducedMotion
          ? `perspective(1000px) rotateX(${mousePosition.y * getScaledStrength()}deg) rotateY(${mousePosition.x * -getScaledStrength()}deg)`
          : "none",
      boxShadow: `0 0 10px rgba(0,0,0,${shadowIntensity})`,
      ...style,
    },
  };

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<HTMLAttributes<HTMLElement>>;
    return cloneElement(child, {
      ...elementProps,
      className: cn(glassClasses, child.props.className),
    } as HTMLAttributes<HTMLElement>);
  }

  return (
    <div className={glassClasses} {...elementProps}>
      {children}
    </div>
  );
};

export default GlassContainer;
