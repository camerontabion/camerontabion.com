import Image, { type ImageProps } from "next/image";
import { cn } from "~/utils/cn";

interface Props extends Omit<ImageProps, "src" | "alt"> {
  size?: number;
  animation?: boolean;
  animationDelay?: string;
  animationDuration?: string;
  priority?: boolean;
  className?: string;
}

export const Star = ({
  priority = false,
  size = 32,
  animation = true,
  animationDelay = "0s",
  animationDuration = "2s",
  className,
  ...props
}: Props) => {
  return (
    <Image
      {...props}
      src="/star.png"
      alt="Star"
      priority={priority}
      width={size}
      height={size}
      className={cn(animation && "animate-pulse", className)}
      style={{ animationDelay, animationDuration }}
    />
  );
};

export const StarBackground = () => (
  <div className="absolute inset-0 max-sm:opacity-20">
    <Star
      size={64}
      className="absolute bottom-1/2 left-1/2 max-md:bottom-1/3 max-md:left-1/2"
      animationDelay="0s"
      animationDuration="2s"
    />
    <Star
      size={44}
      className="absolute top-1/3 right-1/6"
      animationDelay="0.3s"
      animationDuration="3.2s"
    />
    <Star
      size={32}
      className="absolute top-1/6 left-1/3"
      animationDelay="1.2s"
      animationDuration="2.6s"
    />
    <Star
      size={48}
      className="absolute top-1/6 right-1/3"
      animationDelay="0.7s"
      animationDuration="2.9s"
    />
    <Star
      size={24}
      className="absolute top-8 left-1/2"
      animationDelay="1.8s"
      animationDuration="2.4s"
    />
    <Star
      size={40}
      className="absolute top-8 right-1/2"
      animationDelay="0.4s"
      animationDuration="3.1s"
    />
    <Star
      size={56}
      className="absolute top-1/4 left-2/3 max-md:top-1/2 max-md:left-4/5"
      animationDelay="1.1s"
      animationDuration="2.7s"
    />
    <Star
      size={20}
      className="absolute top-1/4 right-2/3"
      animationDelay="0.9s"
      animationDuration="2.3s"
    />
    <Star
      size={36}
      className="absolute right-1/4 bottom-1/3"
      animationDelay="0.6s"
      animationDuration="3.3s"
    />
  </div>
);
