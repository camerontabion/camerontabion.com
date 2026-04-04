import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { NotFoundPage } from "~/components/NotFound";
import appCss from "../styles.css?url";

const siteUrl = "https://camerontabion.com";
const siteTitle = "Cameron Keokolo Tabion";
const siteDescription =
  "Full stack engineer focused on web and mobile. Open to full-time and freelance / contract work. React, TypeScript, and modern product development.";

const personLdJson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cameron Keokolo Tabion",
  url: siteUrl,
  jobTitle: "Full stack software engineer",
  sameAs: [
    "https://github.com/camerontabion",
    "https://www.linkedin.com/in/camerontabion/",
  ],
} as const;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: siteTitle },
      { name: "description", content: siteDescription },
      {
        name: "keywords",
        content:
          "Cameron Keokolo Tabion, full stack software engineer, web developer, mobile developer, freelance developer, React, TypeScript, open to work",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: siteTitle },
      { property: "og:title", content: siteTitle },
      { property: "og:description", content: siteDescription },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: `${siteUrl}/me.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: siteTitle },
      { name: "twitter:description", content: siteDescription },
      { name: "twitter:image", content: `${siteUrl}/me.png` },
      {
        name: "theme-color",
        content: "#0b0d14",
      },
      { "script:ld+json": personLdJson },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/icon.png" },
      { rel: "canonical", href: siteUrl },
    ],
  }),
  notFoundComponent: NotFoundPage,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-primary-foreground antialiased [overflow-wrap:anywhere]">
        <a
          href="#main-content"
          className="absolute top-0 left-[-9999px] z-[100] rounded-lg bg-white px-4 py-2 font-medium text-background text-sm shadow-lg focus:top-4 focus:left-4 focus:outline focus:outline-2 focus:outline-offset-2"
        >
          Skip to main content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
