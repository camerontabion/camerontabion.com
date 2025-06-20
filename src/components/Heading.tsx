import { cn } from "~/utils/cn";
import { Star } from "./Star";

interface Props {
  title: string;
  align?: "left" | "center" | "right";
}

export const Heading = ({ title, align = "left" }: Props) => (
  <div
    className={cn(
      "flex items-center gap-4",
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
    <div className="h-0.25 w-8 bg-white sm:w-24" />
    <Star />
    <div className="h-0.25 w-8 bg-white sm:w-24" />
  </div>
);
