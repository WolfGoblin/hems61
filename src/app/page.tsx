import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import StatsBanner from "@/components/sections/StatsBanner";
import AccidentGuidance from "@/components/sections/AccidentGuidance";
import TrustAndTeam from "@/components/sections/TrustAndTeam";
import InstagramPanel from "@/components/sections/InstagramPanel";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-slate-50 selection:bg-red-500 selection:text-white scroll-smooth cursor-default">
      <Header />

      <main className="flex-1 w-full flex flex-col">
        <Hero />
        
        {/* Main Content Area with Sidebar */}
        <div className="flex flex-col xl:flex-row w-full relative xl:max-w-[1600px] xl:mx-auto">
          {/* Left Content column */}
          <div className="flex-1 min-w-0 w-full xl:w-[calc(100%-350px)] flex flex-col">
            <StatsBanner />
            <AccidentGuidance />
            <TrustAndTeam />
          </div>

          {/* Right Instagram Panel */}
          <aside className="w-full xl:w-[350px] xl:sticky top-[80px] h-[550px] xl:h-[calc(100vh-80px)] shrink-0 z-30">
            <InstagramPanel />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
