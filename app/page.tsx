import axios from "axios";
import Background from "./components/Background";
import IntroText from "./components/IntroText";

async function getUserDetails() {
  const response = await axios.get("https://httpbin.org/delay/5");
  return response.data;
}

export default async function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Background />
      <IntroText />
    </div>
  );
}
