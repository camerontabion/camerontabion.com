import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import appCss from "../styles.css?url";

const siteUrl = "https://camerontabion.com";
const siteTitle = "Cameron Keokolo Tabion";
const siteDescription =
  "Full stack engineer focused on web and mobile. Open to full-time and freelance / contract work. React, TypeScript, and modern product development.";

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
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/icon.png" },
      { rel: "canonical", href: siteUrl },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-primary-foreground antialiased [overflow-wrap:anywhere]">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
