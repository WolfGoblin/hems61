import { AlertTriangle, PhoneCall, MapPin, Heart, Shield } from "lucide-react";

export default function AccidentGuidance() {
    const steps = [
        {
            title: "Ensure Safety",
            description: "Ensure your safety and move away from immediate danger if possible.",
            icon: AlertTriangle,
        },
        {
            title: "Call HEMS Immediately",
            description: "Call 08080630 immediately.",
            icon: PhoneCall,
        },
        {
            title: "Share Location",
            description: "Share your exact location and any prominent landmarks.",
            icon: MapPin,
        },
        {
            title: "Assess Condition",
            description: "Stay calm, assess breathing and bleeding of victims.",
            icon: Heart,
        },
        {
            title: "Provide Reassurance",
            description: "Reassure victims and keep them calm until help arrives.",
            icon: Shield,
        },
    ];

    return (
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left — Emergency Checklist Card */}
                    <div className="relative lg:sticky lg:top-40">
                        <div className="bg-red-50 p-8 md:p-12 rounded-[40px] border border-red-100 shadow-2xl relative overflow-hidden">
                            {/* Decorative Background icon */}
                            <AlertTriangle size={300} className="absolute -right-20 -top-20 text-red-100/50 -rotate-12" />

                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                                    Emergency Checklist
                                </h3>
                                <p className="text-lg text-slate-600 font-medium mb-12">
                                    Follow these crucial steps to ensure the best possible outcome during a highway emergency.
                                </p>
                                <div className="bg-red-600 text-white rounded-3xl p-8 shadow-xl shadow-red-600/30 transform hover:scale-105 transition-transform">
                                    <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Prominent Reminder</p>
                                    <p className="text-2xl font-black leading-tight text-balance">
                                        Save 08080630 in your phone now.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — Steps Timeline */}
                    <div>
                        <div className="inline-flex items-center gap-2 text-slate-500 font-bold tracking-widest uppercase text-sm mb-4">
                            <AlertTriangle size={20} className="text-red-500" /> What to do in an accident
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-12 leading-tight">
                            Every Second <br /> <span className="text-red-600">Matters.</span>
                        </h2>

                        <div className="space-y-6">
                            {steps.map((step, idx) => (
                                <div key={idx} className="flex items-start gap-5 group">
                                    {/* Icon Node */}
                                    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl border-2 border-slate-100 bg-slate-50 text-slate-400 shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300">
                                        <step.icon size={24} />
                                    </div>

                                    {/* Card */}
                                    <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-md group-hover:border-red-100 transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="text-3xl font-black text-red-600 group-hover:text-red-700 transition-colors leading-none">0{idx + 1}</span>
                                            <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">{step.title}</h4>
                                        </div>
                                        <p className="text-slate-600 font-medium leading-relaxed text-sm group-hover:text-slate-700 pl-12">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
