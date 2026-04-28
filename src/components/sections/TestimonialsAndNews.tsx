import { Quote, MessageSquare, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function TestimonialsAndNews() {
    const testimonials = [
        {
            quote: "HEMS responded in less than 20 minutes to an accident on the Harare road. Their trauma team was exceptional.",
            name: "Tariro M.",
            role: "Commuter"
        },
        {
            quote: "As a trucking company, HEMS nationwide coverage gives us peace of mind knowing our drivers are protected.",
            name: "John D.",
            role: "Logistics Manager"
        }
    ];

    const news = [
        {
            title: "Road Safety Tips for the Festive Season",
            date: "Nov 15, 2026",
            category: "Safety",
            image: "/news-1.jpg"
        },
        {
            title: "HEMS launches new first aid training modules",
            date: "Oct 28, 2026",
            category: "Training",
            image: "/about-image.jpg"
        },
        {
            title: "Expanding operations: 3 new highway bases",
            date: "Sep 10, 2026",
            category: "Partnerships",
            image: "/hems-hero.jpg"
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Testimonials */}
                    <div>
                        <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-sm mb-4">
                            <MessageSquare size={20} /> Testimonials
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12">
                            Patients Trust Us.
                        </h2>
                        <div className="space-y-6">
                            {testimonials.map((t, idx) => (
                                <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-red-100 hover:shadow-lg transition-all duration-300 relative group">
                                    <Quote size={48} className="absolute top-4 right-4 text-red-100 group-hover:text-red-200 transition-colors" />
                                    <p className="text-lg text-slate-700 font-medium leading-relaxed italic mb-6 relative z-10 text-balance">
                                        &quot;{t.quote}&quot;
                                    </p>
                                    <div>
                                        <span className="block font-black text-slate-900 text-lg">{t.name}</span>
                                        <span className="block text-red-600 font-bold uppercase tracking-widest text-xs">{t.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* News / Blog */}
                    <div>
                        <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-sm mb-4">
                            <Quote size={20} className="hidden" /> Media & Journal
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12">
                            News & Updates
                        </h2>
                        <div className="space-y-6">
                            {news.map((item, idx) => (
                                <a href="#" key={idx} className="block group">
                                    <div className="flex items-center gap-6 p-6 rounded-2xl border border-slate-100 hover:border-red-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white relative overflow-hidden">
                                        {/* Hover Accent */}
                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

                                        <div className="hidden sm:block aspect-square w-24 bg-slate-100 rounded-xl relative overflow-hidden group-hover:shadow-inner">
                                            <Image src={item.image} alt={item.title} fill className="object-cover" sizes="96px" />
                                        </div>

                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-2 py-1 rounded">{item.category}</span>
                                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{item.date}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-red-700 transition-colors">{item.title}</h3>
                                            <button className="text-red-600 font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                                                Read <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
