import Image from "next/image";
import Navbar from "./components/common/Navbar";
import Intro from "./components/landing/Intro";
import Logos from "./components/landing/Logos";
import Opportunities from "./components/landing/Opportunities";
import Events from "./components/landing/Events";
import JoinUs from "./components/landing/JoinUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Intro />
      <Logos />
      <Opportunities />
      <Events />
      <JoinUs />
    </main>
  );
}
