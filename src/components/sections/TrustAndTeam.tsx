import { Users } from "lucide-react";

export default function TrustAndTeam() {
    return (
        <section id="team" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-1/4 -right-1/4 w-[50%] h-[50%] bg-red-600 rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
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
            </div>
        </section>
    );
}
