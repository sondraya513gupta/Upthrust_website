import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { HeroGridBackground } from "./components/HeroGridBackground";
import { SocialProofBar } from "./components/SocialProofBar";
import { ServicesSection } from "./components/ServicesSection";
import { FooterSection } from "./components/FooterSection";

export default function Home() {
  return (
    <div className="bg-white text-neutral-900">
      <div className="relative flex min-h-screen flex-col">
        <HeroGridBackground />
        <Navbar />
        <HeroSection />
        <SocialProofBar />
      </div>

      <main className="block w-full">
        <ServicesSection />
        <FooterSection />
      </main>
    </div>
  );
}
