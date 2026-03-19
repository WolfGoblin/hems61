"use client";

import { Phone, Mail, Facebook, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Training", href: "/training" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex flex-col shadow-md">
            {/* Top bar */}
            <div className="bg-red-700 text-white text-xs md:text-sm py-2 px-4 md:px-8 flex justify-between items-center h-10">
                <div className="flex items-center space-x-4 md:space-x-6">
                    <span className="flex items-center gap-2 font-medium">
                        <Phone size={14} />
                        <span className="hidden sm:inline">Toll-free:</span> 08080630
                    </span>
                    <span className="hidden md:flex items-center gap-2 font-medium">
                        <Mail size={14} /> info@hems.co.zw
                    </span>
                </div>
                <div className="flex space-x-4 opacity-90">
                    <a href="https://www.facebook.com/hems.zw" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-red-200 transition-colors"><Facebook size={16} /></a>
                    <a href="https://www.instagram.com/hems_zw/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-red-200 transition-colors"><Instagram size={16} /></a>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="bg-white px-4 md:px-8 py-4 flex justify-between items-center h-20 md:h-24">
                {/* Logo */}
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <Image src="/hems-logo-v2.png" alt="HEMS Logo" width={240} height={70} className="h-10 md:h-14 w-auto object-contain" priority />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-slate-700 hover:text-red-600 font-semibold text-[15px] transition-colors uppercase tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="tel:08080630"
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl shadow-red-600/30 flex items-center gap-2 uppercase animate-pulse hover:animate-none"
                    >
                        <Phone size={16} className="fill-white" />
                        Call 08080630 Now
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-slate-800 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <nav className="lg:hidden bg-white border-t border-slate-100 shadow-xl absolute top-full left-0 w-full flex flex-col p-4 animate-in slide-in-from-top-4 duration-200">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="py-3 px-4 text-slate-700 hover:bg-red-50 hover:text-red-600 font-semibold rounded-md transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="tel:08080630"
                        className="mt-4 bg-red-600 text-white text-center py-3 px-4 rounded-md font-bold flex items-center justify-center gap-2 shadow-lg"
                    >
                        <Phone size={18} className="fill-white" />
                        Call 08080630 Now
                    </a>
                </nav>
            )}
        </header>
    );
}
