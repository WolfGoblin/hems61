import { Ambulance, Stethoscope, GraduationCap, Hospital, Activity, Map, Scan, Home, Calendar, Trophy } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "24/7 Nationwide Accident Response",
            description: "Highway coverage, rapid deployment from 17+ bases. Main benefit is ~20-minute average response time.",
            icon: Ambulance,
        },
        {
            title: "Certified Trauma Specialists",
            description: "Paramedics and doctors focused on trauma and critical care. Advanced life support provided on-scene.",
            icon: Stethoscope,
        },
        {
            title: "Professional First Aid Training",
            description: "Comprehensive training for corporates, schools, and drivers. Endorsed with internationally recognized certification.",
            icon: GraduationCap,
        },
        {
            title: "Intercity Medical Transfers",
            description: "Reliable transfers between cities and hospitals (e.g., Marondera to Harare) ensuring patient stability throughout the journey.",
            icon: Map,
        },
        {
            title: "Procedure & Diagnostic Calls",
            description: "Medically supervised transport for essential scans, MRIs, and X-rays for patients requiring continuous monitoring.",
            icon: Scan,
        },
        {
            title: "Primary Home Calls",
            description: "Immediate emergency response directly to your home for medical crises, ensuring rapid stabilization and transport.",
            icon: Home,
        },
        {
            title: "Corporate & Social Event Covers",
            description: "On-site medical standby for corporate functions and social gatherings to ensure the safety of all attendees.",
            icon: Calendar,
        },
        {
            title: "Sports Match Covers",
            description: "Professional medical coverage for Football and Rugby matches at all levels, including schools and age groups.",
            icon: Trophy,
        },
        {
            title: "Secure Hospital Transfers",
            description: "Safe, medically supervised inter-facility transfers tailored for both private patients and hospitals.",
            icon: Hospital,
        },
    ];

    return (
        <section id="services" className="py-24 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16 pt-12">
                    <div className="inline-flex items-center gap-2 text-red-500 font-bold tracking-widest uppercase text-sm mb-4">
                        <Activity size={20} /> Expert Ambulance Services
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-[#0e172c]">
                        Comprehensive Emergency <span className="text-red-500">Care</span>
                    </h2>
                    <p className="text-lg text-slate-700 font-medium leading-relaxed">
                        Delivering critical care when every second counts.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col group h-full relative overflow-hidden">
                            {/* Hover Accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

                            <div className="bg-red-50 text-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                <service.icon size={32} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight leading-snug group-hover:text-red-600 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-600 font-medium leading-relaxed flex-grow text-sm">
                                {service.description}
                            </p>

                            <div className="mt-8 pt-4 border-t border-slate-100 hidden">
                                {/* Optional learn more link area */}
                                <a href="#contact" className="text-red-600 font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">Read More →</a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features sub-strip */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-shadow flex items-center justify-center text-center">
                        <span className="font-bold text-lg uppercase tracking-wider">Enhanced Patient Safety</span>
                    </div>
                    <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-center">
                        <span className="font-bold text-lg text-slate-900 uppercase tracking-wider">Road Accidents</span>
                    </div>
                    <div className="bg-gradient-to-bl from-slate-800 to-slate-900 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-shadow flex items-center justify-center text-center">
                        <span className="font-bold text-lg uppercase tracking-wider">Emergency Situation</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
