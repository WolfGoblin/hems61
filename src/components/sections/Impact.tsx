import { Activity, Clock, Users, ShieldCheck } from "lucide-react";

export default function Impact() {
    const metrics = [
        { number: "10+", label: "Calls Handled Daily", icon: Activity },
        { number: "~20 Min", label: "Average Response Time", icon: Clock },
        { number: "300+", label: "Patients Assisted Last Month", icon: Users },
        { number: "100%", label: "Protocol Adherence", icon: ShieldCheck },
    ];

    return (
        <section id="impact" className="py-24 bg-red-700 text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-800 to-transparent mix-blend-multiply opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
                        Measurable Impact. Unwavering Commitment.
                    </h2>
                    <p className="text-lg md:text-xl text-red-100 font-medium leading-relaxed">
                        Strict protocols ensure consistent, high-quality emergency care across Zimbabwe&apos;s highways.
                        We measure our success by the lives we save and the fast, efficient response we deliver every single day.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 hover:bg-white/15 cursor-default">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                <metric.icon size={32} className="text-white" />
                            </div>
                            <div className="text-4xl md:text-5xl font-black mb-3 tracking-tighter shadow-sm">{metric.number}</div>
                            <div className="font-semibold text-red-100 uppercase tracking-widest text-sm leading-tight text-balance">{metric.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
