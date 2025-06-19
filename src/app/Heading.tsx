import { cn } from "~/utils/cn";

interface Props {
  title: string;
  align?: "left" | "center" | "right";
}

export const Heading = ({ title, align = "left" }: Props) => (
  <div
    className={cn(
      "flex items-center gap-4 px-8",
      align === "left" && "justify-start",
      align === "center" && "justify-center",
      align === "right" && "justify-end",
    )}
  >
    {align !== "left" && <HeadingBar />}
    <h2 className="text-2xl uppercase">{title}</h2>
    {align !== "right" && <HeadingBar />}
  </div>
);

const HeadingBar = () => (
  <div className="flex items-center gap-2">
    <div className="h-0.25 w-24 bg-white" />
    <img
      src="/star.png"
      alt="Star"
      width={32}
      height={32}
      className="animate-pulse"
    />
    <div className="h-0.25 w-24 bg-white" />
  </div>
);
