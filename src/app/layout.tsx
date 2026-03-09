import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "~/utils/cn";

import "~/globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

const siteUrl =
  process.env.VERCEL_ENV === "production"
    ? "https://camerontabion.com"
    : "http://localhost:3000";

const siteTitle = "Cameron Keokolo Tabion";
const siteDescription =
  "Full stack software engineer building clean, effective, and high-performing web applications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: siteTitle }],
  creator: siteTitle,
  keywords: [
    "Cameron Keokolo Tabion",
    "full stack engineer",
    "software engineer portfolio",
    "Next.js developer",
    "React developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    images: [
      {
        url: "/me.png",
        width: 512,
        height: 512,
        alt: "Portrait of Cameron Keokolo Tabion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/me.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.className)}>
      <body className="bg-background text-primary-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
