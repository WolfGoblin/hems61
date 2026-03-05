import { Users } from "lucide-react";
import Image from "next/image";

export default function TrustAndTeam() {
    const team = [
        { name: "[Paramedic Name]", role: "Trauma Paramedic", image: "/team-1.jpg" },
        { name: "[Doctor Name]", role: "Emergency Physician", image: "/team-2.jpg" },
        { name: "[Dispatcher Name]", role: "Dispatch Coordinator", image: "/team-3.jpg" },
    ];

    return (
        <section id="team" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-1/4 -right-1/4 w-[50%] h-[50%] bg-red-600 rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-sm mb-4">
                        <Users size={20} /> Our Trained Members
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Real Professionals. <br className="hidden md:block" /> Real Fleet. Real Emergency Response.
                    </h2>
                    <p className="text-lg/relaxed text-slate-600 font-medium max-w-2xl mx-auto text-balance">
                        Our trauma specialists, rapid response unit, and advanced ambulance fleet stand ready 24/7 to deliver life-saving care on Zimbabwe&apos;s highways.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, idx) => (
                        <div key={idx} className="group relative">
                            <div className="aspect-[3/4] bg-slate-200 rounded-3xl overflow-hidden mb-6 relative">
                                <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-black text-slate-900 mb-1">{member.name}</h3>
                                <p className="text-red-600 font-bold uppercase tracking-widest text-sm">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
