import Intro from "@/components/landing/Intro";
import Logos from "@/components/landing/Logos";
import Opportunities from "@/components/landing/Opportunities";
import JoinUs from "@/components/landing/JoinUs";
import Events from "@/components/landing/Events";

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
