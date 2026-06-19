import type { Metadata } from "next";
import { instrumentSerif } from "../fonts";

export const metadata: Metadata = {
  title: "Scenery | Dev Prajapati",
  description: "A collection of wallpapers and landscapes captured and curated by Dev Prajapati.",
  openGraph: {
    title: "Scenery | Dev Prajapati",
    description: "A collection of wallpapers and landscapes captured and curated by Dev Prajapati.",
    type: "website",
    images: [
      {
        url: "/wallpapers/websitePFP.jpg",
        width: 1200,
        height: 630,
        alt: "Scenery Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scenery | Dev Prajapati",
    description: "A collection of wallpapers and landscapes captured and curated by Dev Prajapati.",
    images: ["/wallpapers/websitePFP.jpg"],
  },
};

export default function SceneryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
