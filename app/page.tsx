import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SocialProofBar } from "./components/SocialProofBar";
import { ServicesSection } from "./components/ServicesSection";
import { FooterSection } from "./components/FooterSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900 overflow-x-hidden">
      {/* Top Header */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex flex-1 flex-col justify-between">
        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* Section 1 Bottom: Brand Logos Bar */}
        <SocialProofBar />

        {/* Section 2: Services Showcase with Continuous 3D Pipe */}
        <ServicesSection />

        {/* Section 3: Footer, Brand Signature & Functional Newsletter Form */}
        <FooterSection />
      </main>
    </div>
  );
}
