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
            description: "Call 591 (or 0808 0630) immediately.",
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
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="relative">
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
                                        Save 591 and 0808 0630 in your phone now.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="inline-flex items-center gap-2 text-slate-500 font-bold tracking-widest uppercase text-sm mb-4">
                            <AlertTriangle size={20} className="text-red-500" /> What to do in an accident
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-12 leading-tight">
                            Every Second <br /> <span className="text-red-600">Matters.</span>
                        </h2>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                            {steps.map((step, idx) => (
                                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group select-none">
                                    {/* Icon Node */}
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-slate-100 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 z-10 relative left-0 md:left-1/2 absolute top-1/2 -translate-y-1/2">
                                        <step.icon size={20} />
                                    </div>

                                    {/* Card */}
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-lg group-hover:border-red-100 transition-all duration-300 ml-4 md:ml-0">
                                        <div className="flex items-center gap-4 mb-2">
                                            <span className="text-4xl font-black text-slate-100 group-hover:text-red-50 transition-colors">0{idx + 1}</span>
                                            <h4 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">{step.title}</h4>
                                        </div>
                                        <p className="text-slate-600 font-medium leading-relaxed group-hover:text-slate-700">{step.description}</p>
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
