import type { Metadata } from "next";
import { geistMono, geistSans, instrumentSerif } from "./fonts";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Dev Prajapati",
  description: "Backend systems, distributed architecture, and occasional photography.",
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
