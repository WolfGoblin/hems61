import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer id="footer" className="bg-slate-900 text-slate-300 py-16 px-4 md:px-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Brand & Description */}
                <div className="space-y-6">
                    <Link href="#home" className="flex items-center bg-white w-max p-2 rounded-xl">
                        <Image src="/hems-logo-v2.png" alt="HEMS Logo" width={480} height={140} className="h-20 md:h-24 w-auto object-contain" />
                    </Link>
                    <p className="text-sm leading-relaxed text-slate-400">
                        Providing rapid, advanced emergency medical response on major highways in Zimbabwe. Dedicated to saving lives with a world-class fleet and certified trauma specialists.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/hems.zw" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors duration-300">
                            <Facebook size={18} />
                        </a>
                        <a href="https://www.instagram.com/hems_zw/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors duration-300">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-red-600">Quick Links</h3>
                    <ul className="space-y-3">
                        {[
                            { name: 'About Us', href: '/about' },
                            { name: 'Services', href: '/services' },
                            { name: 'Contact', href: '/contact' }
                        ].map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-slate-400 hover:text-red-500 hover:translate-x-1 inline-block transition-transform duration-300 text-sm font-medium">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* More Links */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-red-600">More Links</h3>
                    <ul className="space-y-3">
                        {[
                            { name: 'Training', href: '/training' },
                            { name: 'Impact', href: '/training#impact' },
                            { name: 'Partnerships', href: '/training#partnerships' }
                        ].map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-slate-400 hover:text-red-500 hover:translate-x-1 inline-block transition-transform duration-300 text-sm font-medium">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Details */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-red-600">Contact Info</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                            <div className="bg-slate-800 p-2 rounded text-red-500 shrink-0">
                                <MapPin size={18} />
                            </div>
                            <span className="text-sm text-slate-400 pt-1">179 Five Avenue, Harare, Zimbabwe</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-slate-800 p-2 rounded text-red-500 shrink-0">
                                <Phone size={18} />
                            </div>
                            <span className="text-sm text-slate-400 pt-1">Toll-free<br />08080630</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-slate-800 p-2 rounded text-red-500 shrink-0">
                                <Mail size={18} />
                            </div>
                            <span className="text-sm text-slate-400 pt-1">info@hems.co.zw</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-slate-500">
                <p className="font-semibold text-slate-400 text-center md:text-left">
                    Official partnerships with <span className="text-slate-300">Insurance Council of Zimbabwe (ICZ)</span> and <span className="text-slate-300">Traffic Safety Council of Zimbabwe (TSCZ)</span>.
                </p>
                <p className="text-center md:text-right font-medium">
                    &copy; {new Date().getFullYear()} HEMS – Highway Emergency Medical Service. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
