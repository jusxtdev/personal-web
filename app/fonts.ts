import { Forum, Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

export const forum = Forum({
  weight: ["400"],
  style: ["normal"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});
