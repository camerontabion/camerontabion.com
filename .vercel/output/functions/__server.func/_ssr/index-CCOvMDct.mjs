import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as cx } from "../_libs/class-variance-authority.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as SiGithub, a as SiHtml5, b as SiCss, c as SiJavascript, d as SiTypescript, e as SiReact, f as SiNextdotjs, g as SiTailwindcss, h as SiPostgresql, i as SiMongodb, j as SiNodedotjs, k as SiPython, l as SiGo, m as SiCplusplus } from "../_libs/icons-pack__react-simple-icons.mjs";
import { C as Check, M as Mail } from "../_libs/lucide-react.mjs";
import "../_libs/clsx.mjs";
const cn = (...inputs) => twMerge(cx(inputs));
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
}) => {
  const [mousePosition, setMousePosition] = reactExports.useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = reactExports.useState({ width: 0, height: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = reactExports.useState(false);
  const containerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
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
  reactExports.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);
  const handleMouseMove = (e) => {
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
    const sizeFactor = Math.min(containerSize.width, containerSize.height) / baseSize;
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
    className
  );
  const elementProps = {
    ...props,
    ref: containerRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      transform: hoverEffect && !prefersReducedMotion ? `perspective(1000px) rotateX(${mousePosition.y * getScaledStrength()}deg) rotateY(${mousePosition.x * -getScaledStrength()}deg)` : "none",
      boxShadow: `0 0 10px rgba(0,0,0,${shadowIntensity})`,
      ...style
    }
  };
  if (asChild && reactExports.isValidElement(children)) {
    const child = children;
    return reactExports.cloneElement(child, {
      ...elementProps,
      className: cn(glassClasses, child.props.className)
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: glassClasses, ...elementProps, children });
};
const Socials = ({ isCopied, copyToClipboard }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-stretch gap-4 self-end", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(EmailButton, { isCopied, copyToClipboard }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LinkedInButton, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(GithubButton, {})
] });
const EmailButton = ({
  isCopied,
  copyToClipboard
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(GlassContainer, { type: "button", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "button",
  {
    type: "button",
    onClick: () => copyToClipboard("cameronktabion@gmail.com"),
    "aria-label": isCopied ? "Email address copied to clipboard" : "Copy email address",
    title: isCopied ? "Email copied" : "Copy email address",
    className: "relative flex items-center justify-center p-2",
    children: [
      isCopied && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "-translate-y-1/2 absolute animate-copied text-white text-xs", children: "Copied!" }),
      isCopied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-8" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-8" })
    ]
  }
) });
const LinkedInButton = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "a",
  {
    href: "https://www.linkedin.com/in/camerontabion/",
    target: "_blank",
    rel: "noreferrer",
    "aria-label": "Open Cameron Tabion's LinkedIn profile",
    title: "LinkedIn",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      GlassContainer,
      {
        className: "flex items-center justify-center p-2 pl-2.5",
        type: "button",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative size-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/InBug-White.png",
            alt: "LinkedIn",
            width: "32",
            height: "32",
            className: "absolute inset-0 size-full",
            loading: "eager",
            decoding: "async"
          }
        ) })
      }
    )
  }
);
const GithubButton = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "a",
  {
    href: "https://github.com/camerontabion",
    target: "_blank",
    rel: "noreferrer",
    "aria-label": "Open Cameron Tabion's GitHub profile",
    title: "GitHub",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      GlassContainer,
      {
        className: "flex items-center justify-center p-2",
        type: "button",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiGithub, { className: "size-8" })
      }
    )
  }
);
const Star = ({
  size = 32,
  animation = true,
  animationDelay = "0s",
  animationDuration = "2s",
  className,
  style,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      ...props,
      src: "/star.png",
      alt: "",
      "aria-hidden": "true",
      width: size,
      height: size,
      loading: "eager",
      decoding: "async",
      className: cn(
        animation && "animate-pulse motion-reduce:animate-none",
        className
      ),
      style: {
        animationDelay,
        animationDuration,
        ...style
      }
    }
  );
};
const StarBackground = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 max-sm:opacity-20", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      size: 64,
      className: "absolute bottom-1/2 left-1/2 max-md:bottom-1/3 max-md:left-1/2",
      animationDelay: "0s",
      animationDuration: "2s"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      size: 44,
      className: "absolute top-1/3 right-1/6",
      animationDelay: "0.3s",
      animationDuration: "3.2s"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      size: 32,
      className: "absolute top-1/6 left-1/3",
      animationDelay: "1.2s",
      animationDuration: "2.6s"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      size: 48,
      className: "absolute top-1/6 right-1/3",
      animationDelay: "0.7s",
      animationDuration: "2.9s"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      size: 24,
      className: "absolute top-8 left-1/2",
      animationDelay: "1.8s",
      animationDuration: "2.4s"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      size: 40,
      className: "absolute top-8 right-1/2",
      animationDelay: "0.4s",
      animationDuration: "3.1s"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      size: 56,
      className: "absolute top-1/4 left-2/3 max-md:top-1/2 max-md:left-4/5",
      animationDelay: "1.1s",
      animationDuration: "2.7s"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      size: 20,
      className: "absolute top-1/4 right-2/3",
      animationDelay: "0.9s",
      animationDuration: "2.3s"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      size: 36,
      className: "absolute right-1/4 bottom-1/3",
      animationDelay: "0.6s",
      animationDuration: "3.3s"
    }
  )
] });
function useCopyToClipboard() {
  const [isCopied, setIsCopied] = reactExports.useState(false);
  const timeoutRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setIsCopied(false);
        timeoutRef.current = null;
      }, 2e3);
    } catch {
      setIsCopied(false);
    }
  };
  return { isCopied, copyToClipboard };
}
function Hero() {
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto flex max-w-2xl flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Socials, { isCopied, copyToClipboard }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassContainer, { className: "relative flex flex-col gap-4 p-8 md:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StarBackground, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/hero-icon.svg",
          alt: "Cameron Tabion logo",
          width: 100,
          height: 100,
          loading: "eager",
          decoding: "async"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase", children: "Full stack software engineer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl uppercase md:text-3xl", children: "Cameron Keokolo Tabion" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          About,
          {
            copyToClipboard,
            className: "w-2/3 max-md:hidden"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/me.png",
          alt: "Portrait of Cameron Keokolo Tabion",
          width: 150,
          height: 150,
          className: "-right-0.5 -bottom-0.5 absolute rounded-br-lg max-sm:hidden",
          loading: "eager",
          decoding: "async"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlassContainer, { className: "absolute top-3 right-3 bg-transparent p-2 backdrop-blur-none sm:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/me.png",
          alt: "Portrait of Cameron Keokolo Tabion",
          width: 70,
          height: 70,
          loading: "eager",
          decoding: "async"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, { copyToClipboard, className: "w-full md:hidden" })
  ] });
}
const About = ({ copyToClipboard, className }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: cn("text-xs leading-relaxed", className), children: [
  "I build clean and effective web apps. If you're interested in working together, contact me at",
  " ",
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: () => copyToClipboard("cameronktabion@gmail.com"),
      "aria-label": "Copy Cameron Tabion's email address",
      title: "Copy email address",
      className: "cursor-pointer font-bold transition-transform duration-200 ease-out hover:text-white/80 hover:underline active:scale-95",
      children: "cameronktabion@gmail.com"
    }
  ),
  "."
] });
const Heading = ({ title, align = "left" }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "div",
  {
    className: cn(
      "flex items-center gap-4",
      align === "left" && "justify-start",
      align === "center" && "justify-center",
      align === "right" && "justify-end"
    ),
    children: [
      align !== "left" && /* @__PURE__ */ jsxRuntimeExports.jsx(HeadingBar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl uppercase", children: title }),
      align !== "right" && /* @__PURE__ */ jsxRuntimeExports.jsx(HeadingBar, {})
    ]
  }
);
const HeadingBar = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.25 w-8 bg-white sm:w-24" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.25 w-8 bg-white sm:w-24" })
] });
const Section = ({ children, className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "section",
  {
    className: cn(
      "mx-auto flex w-full max-w-screen-2xl flex-col gap-8",
      className
    ),
    children
  }
);
const projects = [
  {
    name: "Lexsy",
    description: "Currently building at Lexsy, an AI-powered legal platform built to make legal work feel simpler and more accessible.",
    image: "/lexsy.png",
    link: "https://www.lexsy.ai/"
  },
  {
    name: "Harpie",
    description: "A suite of security products for your web3 wallet. I was the Lead Full Stack Engineer at Harpie.",
    image: "/harpie.png"
  },
  {
    name: "Coop Do",
    description: "A modern workspace that brings your projects, tasks, and team together. Create, organize, and collaborate in one beautifully designed platform.",
    image: "/coop-do.png",
    link: "https://coopdo.com"
  },
  {
    name: "Healage",
    description: "A dashboard for managing patients, prescriptions, and medication reminders. Created in partnership with the Kirk Kerkorian School of Medicine at UNLV.",
    image: "/healage.png"
  },
  {
    name: "Official LVSP Website",
    description: "The official website for the Las Vegas Scholars Program.",
    image: "/lvsp.png",
    link: "https://lvsp.camerontabion.com",
    ghLink: "https://github.com/camerontabion/lvsp-website"
  },
  {
    name: "Personal Website",
    description: "My personal website / portfolio showcasing my skills and projects.",
    image: "/camerontabion.png",
    link: "https://www.camerontabion.com"
  }
];
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { title: "PROJECTS" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-stretch justify-center gap-4 max-md:flex-col", children: projects.map(({ name, description, image, link, ghLink }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      GlassContainer,
      {
        className: "flex w-1/4 flex-col gap-3 p-4 max-md:w-full",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            GlassContainer,
            {
              className: "relative h-40 w-full",
              hoverEffect: false,
              shadowIntensity: 1,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: image,
                  alt: `${name} project preview`,
                  className: "absolute inset-0 size-full rounded-md object-cover",
                  loading: "lazy",
                  decoding: "async"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            link ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: link,
                target: "_blank",
                rel: "noreferrer",
                className: "underline underline-offset-4",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: cn("text-lg"), children: name })
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg", children: name }),
            ghLink && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: ghLink,
                target: "_blank",
                rel: "noreferrer",
                "aria-label": `${name} GitHub repository`,
                title: `${name} GitHub repository`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiGithub, {})
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed", children: description })
        ]
      },
      name
    )) })
  ] });
}
const SkillImage = ({ src, alt, className }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative size-12 max-md:size-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  "img",
  {
    src,
    alt,
    className,
    loading: "lazy",
    decoding: "async"
  }
) });
const skills = [
  { name: "HTML", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SiHtml5, { className: "size-12 max-md:size-6" }) },
  { name: "CSS", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SiCss, { className: "size-12 max-md:size-6" }) },
  {
    name: "JavaScript",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SiJavascript, { className: "size-12 max-md:size-6" })
  },
  {
    name: "TypeScript",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SiTypescript, { className: "size-12 max-md:size-6" })
  },
  { name: "React", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SiReact, { className: "size-12 max-md:size-6" }) },
  {
    name: "Next.js",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SiNextdotjs, { className: "size-12 max-md:size-6" })
  },
  {
    name: "TanStack Start",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SkillImage,
      {
        src: "/tanstack-start.png",
        alt: "TanStack Start",
        className: "size-full object-contain grayscale"
      }
    )
  },
  {
    name: "Tailwind",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SiTailwindcss, { className: "size-12 max-md:size-6" })
  },
  {
    name: "Convex",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SkillImage,
      {
        src: "/convex.svg",
        alt: "Convex",
        className: "size-full object-contain"
      }
    )
  },
  {
    name: "PostgreSQL",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SiPostgresql, { className: "size-12 max-md:size-6" })
  },
  {
    name: "MongoDB",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SiMongodb, { className: "size-12 max-md:size-6" })
  },
  {
    name: "Node.js",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SiNodedotjs, { className: "size-12 max-md:size-6" })
  },
  {
    name: "Python",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SiPython, { className: "size-12 max-md:size-6" })
  },
  { name: "Go", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SiGo, { className: "size-12 max-md:size-6" }) },
  {
    name: "C++",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SiCplusplus, { className: "size-12 max-md:size-6" })
  }
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { title: "SKILLS", align: "right" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-4", children: skills.map(({ name, icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      GlassContainer,
      {
        className: "flex w-1/7 flex-col items-center justify-center gap-2 p-4 max-md:w-1/4",
        children: [
          icon,
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: name })
        ]
      },
      name
    )) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "flex items-center justify-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
    "© ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " Cameron Keokolo Tabion"
  ] }) });
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative flex w-full flex-col gap-24 overflow-hidden p-8 text-white md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 z-10 size-full animate-fade-out bg-black motion-reduce:animate-none motion-reduce:opacity-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-z-10 absolute inset-0 size-full animate-pulse-background bg-[url('/star.png')] bg-center bg-size-[48px] bg-repeat motion-reduce:animate-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  HomePage as component
};
