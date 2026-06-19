import Background from "./components/Background";
import IntroText from "./components/IntroText";
import Connect from "./components/Connect";
import Explore from "./components/Explore";

export default async function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Background />
      <IntroText />
      <div className="relative z-10 mx-auto h-px w-[calc(100%-3rem)] max-w-3xl bg-white/10" />
      <Explore />
      <div className="relative z-10 mx-auto h-px w-[calc(100%-3rem)] max-w-3xl bg-white/10" />
      <Connect />
    </div>
  );
}
