"use client";

import { Phone, ShieldAlert } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
    const images = [
        { src: "/IMG_2261.JPG", alt: "HEMS Headquarters" },
        { src: "/hero-2.jpg", alt: "HEMS Emergency Fleet in Action" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    const renderHeroImage = (className: string) => (
        <div className={`relative z-10 block w-full animate-in fade-in lg:slide-in-from-right-8 slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both ${className}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-200 border-4 lg:border-8 border-white group">
                {images.map((image, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            idx === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={idx === 0}
                        />
                    </div>
                ))}
                {/* Optional gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                
                {/* Slider Indicators */}
                <div className="absolute bottom-4 right-4 flex gap-2 z-30">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                idx === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-4 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 sm:gap-4 animate-bounce hover:animate-none duration-1000 scale-90 sm:scale-100 origin-bottom-left z-20" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 text-green-600 p-3 rounded-full flex-shrink-0">
                    <Phone size={24} className="fill-current" />
                </div>
                <div>
                    <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Emergency Hotlines</p>
                    <p className="font-black text-slate-900 text-2xl leading-none mt-1">08080630</p>
                </div>
            </div>
        </div>
    );

    return (
        <section id="home" className="relative pt-52 pb-20 md:pt-64 md:pb-28 overflow-hidden bg-slate-50 min-h-[90vh] flex items-center border-b border-slate-200">
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
                        World-class Emergency Fleet, Saving Lives on <span className="text-[#e80009]">Zimbabwe&apos;s Highways.</span>
                    </h1>

                    {/* Mobile Image (Visible only on small screens, sliding directly under the main headline) */}
                    {renderHeroImage("lg:hidden mt-8 mb-12")}

                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 ease-out fill-mode-both text-pretty">
                        Providing rapid, advanced emergency medical response on major highways in Zimbabwe.
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
                            Toll-free emergency number <strong className="text-red-600 ml-1 bg-red-50 px-2 py-0.5 rounded border border-red-200">08080630</strong> from any network
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 ease-out fill-mode-both">
                        <a
                            href="tel:08080630"
                            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-lg font-medium transition-all text-lg flex items-center justify-center gap-3 w-full sm:w-auto shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] group relative overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                            <Phone className="animate-pulse" size={24} />
                            Call 08080630 Now
                        </a>

                    </div>
                </div>

                {/* Right Image / Graphics (Visible only on lg screens) */}
                {renderHeroImage("hidden lg:block")}
            </div>
        </section>
    );
}
