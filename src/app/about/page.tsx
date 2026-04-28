import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutComponent from "@/components/sections/About";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans bg-slate-50 selection:bg-red-500 selection:text-white scroll-smooth cursor-default">
            <Header />

            <main className="flex-1 w-full flex flex-col pt-20 md:pt-24">
                {/* Page Hero/Banner */}
                <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                    <Image
                        src="/fleet-action.jpg"
                        alt="About HEMS"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/60" />
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">About Us</h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-medium">
                            Committed to saving lives across Zimbabwe&apos;s highways.
                        </p>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-7xl mx-auto py-12">
                    <AboutComponent />
                </div>
            </main>

            <Footer />
        </div>
    );
}
