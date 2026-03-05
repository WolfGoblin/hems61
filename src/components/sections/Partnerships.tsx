import { FileCheck, Shield, Award } from "lucide-react";

export default function Partnerships() {
    const partners = [
        {
            title: "Insurance Council of Zimbabwe (ICZ)",
            description: "Guaranteed response for insured vehicles, supports road safety campaigns, and significantly reduces the financial burden on accident victims.",
            icon: Shield,
        },
        {
            title: "Traffic Safety Council of Zimbabwe (TSCZ)",
            description: "Collaborating on driver education, nationwide safety campaigns, and rapid post-crash care to reduce fatalities on our highways.",
            icon: FileCheck,
        },
        {
            title: "Regulated and Certified",
            description: "Fully EMA regulated, AHPCZ registered, and advanced life support certified to ensure the highest standards of medical care.",
            icon: Award,
        },
    ];

    return (
        <section id="partnerships" className="py-24 bg-red-700 text-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjYjkxYzFjIiAvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iI2M1MzAzMCIgc3Ryb2tlLXdpZHRoPSIxIiAvPgo8L3N2Zz4=')] opacity-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        Official Partnerships & Governance
                    </h2>
                    <p className="text-lg/relaxed text-red-100 font-medium max-w-2xl mx-auto text-balance">
                        Working hand in hand with national bodies to ensure a safer Zimbabwe, compliant protocols, and comprehensive care for all.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {partners.map((partner, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner text-white">
                                <partner.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 tracking-tight leading-snug">
                                {partner.title}
                            </h3>
                            <p className="text-red-50 font-medium leading-relaxed opacity-90 text-sm">
                                {partner.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
