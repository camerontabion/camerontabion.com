import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "../utils/cn";

import "../globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_ENV === "production"
      ? "https://camerontabion.com"
      : "http://localhost:3000",
  ),
  title: "Cameron Keokolo Tabion",
  description: "Cameron Keokolo Tabion's personal portfolio website.",
  openGraph: {
    title: "Cameron Keokolo Tabion",
    description: "Cameron Keokolo Tabion's personal portfolio website.",
    url: "https://camerontabion.com",
    siteName: "Cameron Keokolo Tabion",
  },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.className)}>
      <body className="bg-background text-primary-foreground">{children}</body>
    </html>
  );
}
