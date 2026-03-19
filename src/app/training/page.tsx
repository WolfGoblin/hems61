import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImpactComponent from "@/components/sections/Impact";
import PartnershipsComponent from "@/components/sections/Partnerships";
import Image from "next/image";

export default function TrainingPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans bg-slate-50 selection:bg-red-500 selection:text-white scroll-smooth cursor-default">
            <Header />

            <main className="flex-1 w-full flex flex-col pt-20 md:pt-24">
                {/* Page Hero/Banner */}
                <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                    <Image
                        src="/gallery-new-3.jpg"
                        alt="HEMS Training & Impact"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/60" />
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Training & Impact</h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-medium">
                            First Aid certification, community impact, and strategic partnerships.
                        </p>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-7xl mx-auto py-12 flex flex-col gap-16">
                    <section id="training" className="px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                                Professional <span className="text-red-500">First Aid Training</span>
                            </h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                We offer comprehensive training for corporates, schools, and professional drivers. Our courses are endorsed with internationally recognized certification and focus on lifesaving skills required in critical situations.
                            </p>
                            <div className="mt-8 relative rounded-3xl overflow-hidden aspect-[16/9] shadow-2xl border-4 border-white max-w-4xl mx-auto">
                                <Image
                                    src="/gallery-new-4.jpg"
                                    alt="Training Session"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    <ImpactComponent />
                    
                    <div className="w-full h-px bg-slate-200 my-8"></div>
                    
                    <PartnershipsComponent />
                </div>
            </main>

            <Footer />
        </div>
    );
}
