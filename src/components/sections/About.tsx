import { ShieldPlus, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-l-[100px] hidden lg:block" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left text */}
                <div className="space-y-8 relative z-10 p-6 lg:p-0">
                    <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-sm">
                        <ShieldPlus size={20} /> Who We Are
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                        Setting the <span className="text-red-600">Gold Standard</span> for Emergency Medical Response in Zimbabwe.
                    </h2>

                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        Our mission is to provide fast, professional, and compassionate emergency care on Zimbabwe&apos;s highways. We emphasize speed, skill, and compassion in every single call-out, ensuring that critical care reaches those who need it most.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-red-200 transition-colors">
                            <CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={20} />
                            <span className="font-semibold text-slate-700">17 fully equipped ambulances</span>
                        </li>
                        <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-red-200 transition-colors">
                            <CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={20} />
                            <span className="font-semibold text-slate-700">5 rapid response vehicles at strategic bases</span>
                        </li>
                        <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-red-200 transition-colors">
                            <CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={20} />
                            <span className="font-semibold text-slate-700">Highly trained trauma specialists and paramedics</span>
                        </li>
                        <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-red-200 transition-colors">
                            <CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={20} />
                            <span className="font-semibold text-slate-700">300+ patients assisted in the last month</span>
                        </li>
                    </ul>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                        <div className="bg-red-600 text-white p-6 rounded-2xl shadow-xl shadow-red-600/20 group hover:-translate-y-1 transition-transform">
                            <h3 className="font-bold text-xl mb-2 group-hover:text-red-100 transition-colors">Trauma-Focused Care</h3>
                            <p className="text-red-50 text-sm leading-relaxed font-medium">Providing advanced life support at the scene to stabilize patients immediately.</p>
                        </div>
                        <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl shadow-slate-900/20 group hover:-translate-y-1 transition-transform">
                            <h3 className="font-bold text-xl mb-2 group-hover:text-slate-200 transition-colors">Impeccable Safety</h3>
                            <p className="text-slate-300 text-sm leading-relaxed font-medium">Highlighting strict protocol adherence (100%) to guarantee patient safety at all times.</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                    <div className="aspect-[4/5] bg-red-50 rounded-3xl overflow-hidden relative shadow-2xl border flex items-center justify-center group text-red-300">
                        <Image
                            src="/gallery-new-1.jpg"
                            alt="About HEMS"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                </div>
            </div>
        </section>
    );
}
