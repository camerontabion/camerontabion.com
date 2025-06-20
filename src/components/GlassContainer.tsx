"use client";

import type { HTMLAttributes, ReactElement, ReactNode } from "react";
import {
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "~/utils/cn";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  type?: "container" | "button";
  hoverStrength?: number;
  className?: string;
  asChild?: boolean;
}

const GlassContainer = ({
  children,
  className,
  asChild,
  type = "container",
  hoverStrength = 3,
  ...props
}: Props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const getScaledStrength = () => {
    const baseSize = 200;
    const sizeFactor =
      Math.min(containerSize.width, containerSize.height) / baseSize;
    return hoverStrength * (1 + (1 - sizeFactor) * 9);
  };

  const glassClasses = cn(
    "rounded-lg bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)] shadow-white/10 backdrop-blur-[2px]",
    "border-l-2 border-l-white/20",
    "border-t-2 border-t-white/20",
    "border-r-2 border-r-gray-800/20",
    "border-b-2 border-b-gray-800/20",
    type === "button" && "cursor-pointer hover:bg-white/20 active:scale-95",
    "transition-transform duration-200 ease-out",
    className,
  );

  const elementProps = {
    ...props,
    ref: containerRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      transform: `perspective(1000px) rotateX(${mousePosition.y * getScaledStrength()}deg) rotateY(${mousePosition.x * -getScaledStrength()}deg)`,
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
