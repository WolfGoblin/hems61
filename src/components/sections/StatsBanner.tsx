export default function StatsBanner() {
    const stats = [
        { label: "Operation Bases", value: "17+", subtext: "Nationwide Coverage" },
        { label: "Patients Assisted", value: "300+", subtext: "Last Month" },
        { label: "Average Response", value: "~20 Min", subtext: "Rapid Service" },
        { label: "Toll-Free Access", value: "08080630", subtext: "Any Network" },
        { label: "Official Partners", value: "ICZ & TSCZ", subtext: "Trusted" },
    ];

    return (
        <div className="bg-red-700 text-white relative z-20 shadow-[0_-10px_40px_-15px_rgba(220,38,38,0.5)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 divide-x divide-red-500/30 text-center">
                    {stats.map((stat, idx) => (
                        <div key={idx} className={`flex flex-col items-center justify-center p-4 ${idx === 0 ? 'border-l-0' : ''} ${idx === 4 ? 'col-span-2 md:col-span-1 border-l-0 md:border-l' : ''}`}>
                            <div className="text-3xl lg:text-4xl font-black mb-1 bg-clip-text text-transparent bg-gradient-to-br from-white to-red-200">
                                {stat.value}
                            </div>
                            <div className="font-bold text-red-100 uppercase tracking-wider text-sm mb-1">{stat.label}</div>
                            <div className="text-xs text-red-300 font-medium uppercase tracking-widest">{stat.subtext}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
