import axios from "axios";
import Background from "./components/Background";
import IntroText from "./components/IntroText";
import TestSection from "./components/TestSection";

export default async function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Background />
      <IntroText />
      <div className="relative z-10 mx-auto h-px w-[calc(100%-3rem)] max-w-3xl bg-white/10" />
      <TestSection />
    </div>
  );
}
