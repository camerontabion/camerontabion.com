import type { MetadataRoute } from "next";

const siteUrl =
  process.env.VERCEL_ENV === "production"
    ? "https://camerontabion.com"
    : "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
