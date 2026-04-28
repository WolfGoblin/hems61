"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans bg-slate-50 selection:bg-red-500 selection:text-white scroll-smooth cursor-default">
            <Header />

            <main className="flex-1 w-full flex flex-col pt-20 md:pt-24">
                {/* Page Hero/Banner */}
                <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                    <Image
                        src="/fleet-lineup.jpg"
                        alt="HEMS Contact Us"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/60" />
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Contact Us</h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-medium">
                            We are ready 24/7 to respond to emergencies right when you need us.
                        </p>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    {/* Contact Details Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all group">
                            <div className="bg-red-50 text-red-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Phone size={28} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Emergency Hotline</h3>
                            <a href="tel:08080630" className="text-2xl font-black text-red-600 hover:text-red-700 transition-colors">08080630</a>
                            <p className="text-sm text-slate-500 mt-1 font-medium">Toll-free from any network</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all group">
                            <div className="bg-red-50 text-red-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Mail size={28} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Email Us</h3>
                            <a href="mailto:info@hems.co.zw" className="text-red-600 font-bold hover:text-red-700 transition-colors">info@hems.co.zw</a>
                            <p className="text-sm text-slate-500 mt-1 font-medium">General enquiries</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all group">
                            <div className="bg-red-50 text-red-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <MapPin size={28} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Our Office</h3>
                            <p className="text-slate-700 font-semibold">179 Fife Avenue</p>
                            <p className="text-sm text-slate-500 font-medium">Harare, Zimbabwe</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all group">
                            <div className="bg-red-50 text-red-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Clock size={28} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Hours</h3>
                            <p className="text-slate-700 font-semibold">24/7 Emergency</p>
                            <p className="text-sm text-slate-500 font-medium">365 days a year</p>
                        </div>
                    </div>

                    {/* Form + Map Grid */}
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        {/* Contact Form */}
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100">
                            <h2 className="text-3xl font-black text-slate-900 mb-2">Send Us a Message</h2>
                            <p className="text-slate-500 font-medium mb-8">We&apos;ll get back to you as soon as possible.</p>
                            <form
                                className="space-y-5"
                                action="mailto:info@hems.co.zw"
                                method="POST"
                                encType="text/plain"
                            >
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-slate-50 transition-shadow font-medium"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-slate-50 transition-shadow font-medium"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-slate-50 transition-shadow font-medium"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-slate-50 transition-shadow font-medium"
                                />
                                <textarea
                                    placeholder="How can we help you?"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-slate-50 transition-shadow resize-none font-medium"
                                />
                                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all uppercase tracking-wide flex items-center justify-center gap-3 group">
                                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Google Map */}
                        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                            <div className="p-6 border-b border-slate-100">
                                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                                    <MapPin className="text-red-600" size={24} />
                                    Find Us
                                </h2>
                                <p className="text-slate-500 font-medium mt-1">179 Fife Avenue, Harare, Zimbabwe</p>
                            </div>
                            <div className="aspect-[4/3] w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.714!2d31.0335!3d-17.8216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4ee863f6b1b%3A0x7c5c5c5c5c5c5c5c!2s179+Fife+Ave%2C+Harare%2C+Zimbabwe!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="HEMS Location - 179 Fife Avenue, Harare, Zimbabwe"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Emergency CTA Band */}
                    <div className="mt-16 bg-red-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                            <div className="space-y-3 max-w-2xl">
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
                                    Need Emergency Help on the Highway?
                                </h2>
                                <p className="text-red-100 font-medium text-lg leading-relaxed">
                                    Our world-class emergency fleet provides rapid, advanced medical response with an average response time of under 20 minutes.
                                </p>
                            </div>
                            <a
                                href="tel:08080630"
                                className="bg-white text-red-600 hover:bg-slate-50 shadow-lg px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-3 flex-shrink-0 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <Phone size={22} className="animate-pulse" />
                                Call 08080630 Now
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
