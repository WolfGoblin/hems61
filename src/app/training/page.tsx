import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImpactComponent from "@/components/sections/Impact";
import PartnershipsComponent from "@/components/sections/Partnerships";
import Image from "next/image";
import { Clock, CheckCircle2, Globe2, BookOpen, Users } from "lucide-react";

export default function TrainingPage() {
    const courses = [
        {
            title: "Basic First Aid Course",
            badges: ["Certified"],
            description: "A comprehensive one-day introduction to first aid essentials. Participants learn to assess emergencies, manage bleeding and burns, treat shock, and respond to choking and unconscious casualties. Ideal for workplaces, community groups, and individuals seeking a foundation in first aid.",
            duration: "1 day",
            tags: ["All settings", "No prior experience required"]
        },
        {
            title: "Basic First Aid for Child Minders",
            badges: ["Certified", "Shona"],
            description: "Specially designed for child minders and home-based caregivers, this course is delivered in Shona to ensure clarity and accessibility. Covers paediatric first aid priorities including infant choking, febrile convulsions, falls, and recognising signs of serious illness in young children. Particularly suited to those caring for infants and toddlers in home settings.",
            duration: "1 day",
            tags: ["Delivered in Shona", "Child-focused content"]
        },
        {
            title: "CPR Course",
            badges: ["Certified", "Can be tailored for new parents"],
            description: "A focused 2-hour course covering adult, child, and infant CPR techniques, use of an AED (Automated External Defibrillator), and the recovery position. The course can be adapted specifically for new parents, covering infant CPR and responding to breathing emergencies in newborns and babies. Practical, hands-on training using certified manikins.",
            duration: "2 hours",
            tags: ["Adults, children & infants covered", "AED training included"]
        },
        {
            title: "Advanced First Aid Course",
            badges: ["Certified by Examination"],
            description: "An in-depth programme for those requiring a higher level of first aid competence — including security personnel, sporting coaches, remote workers, and healthcare support staff. Duration is 3 to 5 days depending on the topics selected. Core modules include trauma management, wound care, fractures and dislocations, and medical emergencies. Optional specialist modules cover head and brain injuries, spinal injury management, and emergency scene assessment. Assessed by written and practical examination.",
            duration: "3–5 days",
            tags: ["Head & spinal injury modules available", "Written & practical exam"]
        },
        {
            title: "CPR Refresher",
            badges: ["Certified by Examination"],
            description: "Designed for those who have previously completed a CPR course and need to renew their certification or refresh their skills. This 2-hour session revisits current CPR guidelines, corrects common technique errors, and reintroduces AED use. Recommended annually or biennially to maintain confidence and compliance. Participants are assessed at the end of the session.",
            duration: "2 hours",
            tags: ["Prior CPR training required", "Practical assessment included"]
        }
    ];

    return (
        <div className="flex min-h-screen flex-col font-sans bg-slate-50 selection:bg-red-500 selection:text-white scroll-smooth cursor-default">
            <Header />

            <main className="flex-1 w-full flex flex-col pt-20 md:pt-24">
                {/* Page Hero/Banner */}
                <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                    <Image
                        src="/gallery-new-3.jpg"
                        alt="HEMS Training & Impact"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/60" />
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Training & Impact</h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-medium">
                            First Aid certification, community impact, and strategic partnerships.
                        </p>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-7xl mx-auto py-12 flex flex-col gap-16">
                    <section id="training" className="px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4 block">Professional Development</span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                                First Aid <span className="text-red-500">Training</span>
                            </h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                Accredited courses for individuals, caregivers, healthcare workers, and organizations. All programmes are led by certified instructors and tailored to your setting.
                            </p>
                        </div>

                        <div className="space-y-6 max-w-5xl mx-auto">
                            {courses.map((course, idx) => (
                                <div key={idx} className="bg-[#0e172c] rounded-2xl p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-all border border-white/5">
                                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                        <h3 className="text-xl md:text-2xl font-bold">{course.title}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {course.badges.map((badge, bIdx) => (
                                                <span key={bIdx} className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest ${
                                                    badge.includes("Certified") 
                                                    ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]" 
                                                    : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                                }`}>
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-300 mb-6 leading-relaxed text-sm md:text-base font-medium">
                                        {course.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-6 text-xs md:text-sm text-slate-400 font-bold uppercase tracking-wider">
                                        <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
                                            <Clock size={16} className="text-red-500" />
                                            <span>{course.duration}</span>
                                        </div>
                                        {course.tags.map((tag, tIdx) => (
                                            <div key={tIdx} className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
                                                <CheckCircle2 size={16} className="text-red-500/70" />
                                                <span>{tag}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className="bg-[#0e172c]/5 border-2 border-dashed border-[#0e172c]/10 rounded-2xl p-6 md:p-10 text-center mt-12">
                                <p className="text-[#0e172c] font-black text-xl md:text-2xl mb-2">
                                    Group & corporate bookings welcome.
                                </p>
                                <p className="text-slate-600 font-bold text-base md:text-lg max-w-2xl mx-auto">
                                    All courses can be brought to your location. Bespoke programmes and topic combinations are available on request.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4 block">Field Operations</span>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                                Training <span className="text-red-500">In Action</span>
                            </h2>
                            <p className="text-lg text-slate-600 font-medium">
                                Our teams provide real-world emergency support and training across Zimbabwe.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl group">
                                <Image
                                    src="/training/event-1.jpg"
                                    alt="HEMS Field Training 1"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl group">
                                <Image
                                    src="/training/event-2.jpg"
                                    alt="HEMS Field Training 2"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    </section>

                    <ImpactComponent />
                    
                    <div className="w-full h-px bg-slate-200 my-8"></div>
                    
                    <PartnershipsComponent />
                </div>
            </main>

            <Footer />
        </div>
    );
}
