import type { MetadataRoute } from "next";

const siteUrl =
  process.env.VERCEL_ENV === "production"
    ? "https://camerontabion.com"
    : "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
