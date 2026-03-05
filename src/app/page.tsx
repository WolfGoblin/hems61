import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import StatsBanner from "@/components/sections/StatsBanner";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Impact from "@/components/sections/Impact";
import AccidentGuidance from "@/components/sections/AccidentGuidance";
import TrustAndTeam from "@/components/sections/TrustAndTeam";
import Partnerships from "@/components/sections/Partnerships";
import TestimonialsAndNews from "@/components/sections/TestimonialsAndNews";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-slate-50 selection:bg-red-500 selection:text-white scroll-smooth cursor-default">
      <Header />

      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <StatsBanner />
        <About />
        <Services />
        <Impact />
        <AccidentGuidance />
        <TrustAndTeam />
        <Partnerships />
        <TestimonialsAndNews />
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
