"use client";

import Script from "next/script";

export default function InstagramPanel() {
    return (
        <div className="flex flex-col h-full bg-slate-50 border-l border-slate-200 overflow-hidden shadow-[-4px_0_15px_-5px_rgba(0,0,0,0.05)] font-sans relative">
            <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
            
            <div className="flex-1 overflow-y-auto w-full h-full p-2 bg-white flex items-start justify-center">
                {/* Elfsight Instagram Feed */}
                <div 
                    className="elfsight-app-1c4751cb-3860-4c7c-933f-eb5dcb5fb825 w-full" 
                    data-elfsight-app-lazy="true" 
                />
            </div>
        </div>
    );
}
