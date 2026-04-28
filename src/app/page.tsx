import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import StatsBanner from "@/components/sections/StatsBanner";
import AccidentGuidance from "@/components/sections/AccidentGuidance";
import TrustAndTeam from "@/components/sections/TrustAndTeam";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-slate-50 selection:bg-red-500 selection:text-white scroll-smooth cursor-default">
      <Header />

      <main className="flex-1 w-full flex flex-col">
        <Hero />
        
        {/* Main Content Area */}
        <div className="w-full xl:max-w-[1600px] xl:mx-auto">
          <div className="w-full flex flex-col">
            <StatsBanner />
            <AccidentGuidance />
            <TrustAndTeam />
          </div>
        </div>

        {/* Home Gallery Section */}
        <section className="w-full py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0e172c] mb-4">
              Our Team <span className="text-red-500">In Action</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Real-world medical emergency response and standby services across major Zimbabwean highways and events.
            </p>
          </div>
          
          <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-xl group">
              <Image
                src="/home-gallery-1.jpg"
                alt="HEMS Team responding"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-xl group">
              <Image
                src="/home-gallery-2.jpg"
                alt="HEMS Ambulance Standby"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
