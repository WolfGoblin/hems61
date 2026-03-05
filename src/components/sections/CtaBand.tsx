import { Phone, Mail } from "lucide-react";

export default function CtaBand() {
    return (
        <section className="bg-red-600 text-white py-16 px-4 md:px-8 border-t-4 border-slate-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-0 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -z-0 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div className="space-y-3 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
                        Need Emergency Help on the Highway?
                    </h2>
                    <p className="text-red-100 font-medium text-lg leading-relaxed max-w-xl md:max-w-none">
                        Our world-class emergency fleet provides rapid, advanced medical response with an average response time of under 20 minutes.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto flex-shrink-0">
                    <a
                        href="tel:591"
                        className="flex items-center justify-center gap-2 bg-white text-red-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:-translate-y-1 shadow-xl uppercase tracking-wide"
                    >
                        <Phone size={20} className="fill-current" />
                        Call 591 Now
                    </a>
                    <a
                        href="#footer"
                        className="flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors uppercase tracking-wide"
                    >
                        <Mail size={20} />
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
