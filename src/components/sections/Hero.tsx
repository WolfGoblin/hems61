import { Phone, ArrowRight, ShieldAlert } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 min-h-[90vh] flex items-center border-b border-slate-200">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-50 to-white -z-10" />
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[120%] bg-red-600/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-2 gap-12 items-center">
                {/* Left text */}
                <div className="space-y-8 relative z-10 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-red-700 font-bold text-sm tracking-wide uppercase border border-red-200 animate-in fade-in slide-in-from-bottom-2 duration-700 ease-out fill-mode-both">
                        <ShieldAlert size={16} /> 24/7 Rapid Response
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0100bc] leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 ease-out fill-mode-both text-balance">
                        World-class Emergency Fleet, Saving Lives on <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Zimbabwe&apos;s Highways.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 ease-out fill-mode-both text-pretty">
                        Providing rapid, advanced emergency medical response on major highways in Zimbabwe, including Harare–Chirundu and other key routes.
                    </p>

                    <ul className="space-y-4 font-semibold text-slate-700 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 ease-out fill-mode-both">
                        <li className="flex items-center gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600">✓</span>
                            Average response time under 20 minutes
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600">✓</span>
                            24/7 nationwide emergency coverage
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600">✓</span>
                            Toll-free emergency number <strong className="text-red-600 ml-1 bg-red-50 px-2 py-0.5 rounded border border-red-200">591</strong> from any network
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 ease-out fill-mode-both">
                        <a
                            href="tel:591"
                            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg tracking-wide transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 active:translate-y-0 uppercase group"
                        >
                            <Phone size={20} className="fill-current group-hover:rotate-12 transition-transform" />
                            Call 591 Now
                        </a>
                        <a
                            href="#team"
                            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-slate-300 px-8 py-4 rounded-lg font-bold text-lg tracking-wide transition-all uppercase group"
                        >
                            Meet Our Team
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Right Image / Graphics */}
                <div className="relative z-10 hidden lg:block animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-200 border-8 border-white">
                        <Image
                            src="/hems-hero.jpg"
                            alt="HEMS Headquarters"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                        {/* Optional gradient overlay for contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce hover:animate-none duration-1000" style={{ animationDuration: '3s' }}>
                        <div className="bg-green-100 text-green-600 p-3 rounded-full">
                            <Phone size={24} className="fill-current" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Emergency Hotlines</p>
                            <p className="font-black text-slate-900 text-2xl leading-none mt-1">591 <span className="text-slate-300">|</span> 0808 0630</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
