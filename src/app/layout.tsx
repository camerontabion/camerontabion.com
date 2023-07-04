import { Metadata } from "next";
import { Roboto } from "next/font/google";
import "globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Cameron Keokolo Tabion",
  description: "Cameron Keokolo Tabion's personal portfolio website.",
  icons: ["icon.png"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.className} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
