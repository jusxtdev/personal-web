import Background from "./components/Background";
import Hero from "./components/Hero";
import Explore from "./components/Explore";

export default async function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Background />
      <Hero />
      <div className="relative z-10 mx-auto h-px w-[calc(100%-3rem)] max-w-3xl bg-white/10" />
      <Explore />
      <div className="relative z-10 mx-auto h-px w-[calc(100%-3rem)] max-w-3xl bg-white/10" />
    </div>
  );
}
