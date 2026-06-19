import type { Metadata } from "next";
import { geistMono, geistSans, instrumentSerif } from "./fonts";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dev Prajapati",
    template: "%s | Dev Prajapati",
  },
  description: "Backend systems, distributed architecture, and occasional photography.",
  openGraph: {
    title: "Dev Prajapati",
    description: "Backend systems, distributed architecture, and occasional photography.",
    type: "website",
    url: "https://devprajapati-eta.vercel.app/",
    siteName: "Dev Prajapati",
    images: [
      {
        url: "https://i.postimg.cc/8zV0F87F/661-1x-shots-so.png",
        width: 1200,
        height: 630,
        alt: "Dev Prajapati",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Prajapati",
    description: "Backend systems, distributed architecture, and occasional photography.",
    site: "@jusxtdev",
    creator: "@jusxtdev",
    images: {
      url: "https://i.postimg.cc/8zV0F87F/661-1x-shots-so.png",
      alt: "Dev Prajapati",
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <ReactLenis root>
        <body className="min-h-full flex flex-col bg-black">
          {children}
          <div className="relative z-10 mx-auto h-px w-[calc(100%-3rem)] max-w-3xl bg-white/10" />
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
