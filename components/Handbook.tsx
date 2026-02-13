
import React, { useState } from 'react';
import { RoofingJoke } from '../types';
import {
    Phone, Calendar, Search, FileText, Palette, Truck, Hammer,
    CheckCircle, Clock, Shield, Camera, Users, Star, ArrowRight,
    Award, AlertCircle
} from 'lucide-react';

// --- Shared UI Components ---
const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
    <div className={`bg-white/5 border border-white/10 rounded-xl ${className}`}>{children}</div>
);

const Badge: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${className}`}>{children}</span>
);

// --- Data Constants ---
const PROCESS_STEPS = [
    {
        id: 1,
        title: "Initial Consultation",
        duration: "30-60 min",
        description: "We begin with a thorough discussion of your needs, concerns, and roofing goals.",
        icon: <Phone className="w-6 h-6" />,
        points: ["Free consultation", "Timeline planing", "Budget review"]
    },
    {
        id: 2,
        title: "Drone Inspection",
        duration: "45-90 min",
        description: "Comprehensive assessment using thermal cameras and 4K aerial photography.",
        icon: <Search className="w-6 h-6" />,
        points: ["Thermal leak detection", "Structural analysis", "Detailed report"]
    },
    {
        id: 3,
        title: "Custom Proposal",
        duration: "2 Days",
        description: "Detailed written estimate with transparent pricing and good/better/best options.",
        icon: <FileText className="w-6 h-6" />,
        points: ["Material specs", "Financing options", "Permit checks"]
    },
    {
        id: 4,
        title: "Protection & Prep",
        duration: "Day 1",
        description: "We shield your property with tarps and plywood before a single shingle is removed.",
        icon: <Shield className="w-6 h-6" />,
        points: ["Landscaping coverage", "Safety setup", "Material staging"]
    },
    {
        id: 5,
        title: "Installation",
        duration: "2-5 Days",
        description: "Certified crews install your system to manufacturer specifications.",
        icon: <Hammer className="w-6 h-6" />,
        points: ["Daily cleanup", "Progress photos", "Site supervision"]
    },
    {
        id: 6,
        title: "Final Audit",
        duration: "3 Hrs",
        description: "Zero-defect inspection and magnetic sweep for stray nails.",
        icon: <CheckCircle className="w-6 h-6" />,
        points: ["Quality checklist", "Warranty registration", "Final walkthrough"]
    }
];

const INSPECTION_POINTS = [
    {
        icon: "🛰️",
        title: "Drone & Thermal Tech",
        desc: "We utilize aerial imaging and specialized thermal cameras to identify hidden structural issues and costly heat loss invisible from the ground."
    },
    {
        icon: "❄️",
        title: "Ice Dam Prevention",
        desc: "Our checklist is customized for New Brunswick winters, focusing on ventilation and insulation to prevent ice buildup."
    },
    {
        icon: "✅",
        title: "No-Pressure Report",
        desc: "The inspection is zero-obligation. We give you a factual report so you can prioritize repairs on your terms."
    }
];

const JokeCard: React.FC<{ joke: RoofingJoke }> = ({ joke }) => {
    const [revealed, setRevealed] = useState(false);
    return (
        <div
            onClick={() => setRevealed(!revealed)}
            className={`p-8 rounded-[2.5rem] border transition-all cursor-pointer group flex flex-col items-center text-center
            ${revealed ? 'bg-orange-600 border-orange-500 shadow-2xl shadow-orange-900/40' : 'bg-white/5 border-white/10 hover:border-orange-500/50 hover:bg-white/10'}`}
        >
            <span className="text-4xl mb-6 group-hover:scale-125 transition-transform">{joke.icon}</span>
            <p className={`text-lg font-bold mb-4 tracking-tighter ${revealed ? 'text-white' : 'text-slate-300'}`}>{joke.question}</p>
            {revealed && (
                <p className="text-xl font-black uppercase tracking-widest animate-in fade-in slide-in-from-top-2 duration-500">
                    ...{joke.answer}
                </p>
            )}
            {!revealed && <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mt-2">Click to Reveal</span>}
        </div>
    );
};

const Handbook = () => {
    const [activeSection, setActiveSection] = useState<'guide' | 'process' | 'inspection' | 'humor'>('guide');

    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-orange-600 overflow-y-auto no-scrollbar pb-40">
            <div className="max-w-7xl mx-auto px-10 pt-40">

                {/* HERO */}
                <header className="mb-20 text-center md:text-left relative">
                    <div className="absolute top-0 right-0 hidden xl:flex flex-col gap-4 bg-white/5 backdrop-blur-3xl border border-white/10 p-6 rounded-[2rem] animate-in slide-in-from-right-10 duration-1000 z-50">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Navigation</span>
                        {[
                            { id: 'guide', label: 'Systems Basics' },
                            { id: 'process', label: '7-Step Process' },
                            { id: 'inspection', label: 'Drone Audit' },
                            { id: 'humor', label: "Dad's Jokes" }
                        ].map((s) => (
                            <button
                                key={s.id}
                                onClick={() => setActiveSection(s.id as any)}
                                className={`text-[9px] font-black uppercase tracking-wider transition-colors text-left flex items-center gap-2 group ${activeSection === s.id ? 'text-orange-500' : 'text-white/40 hover:text-white'}`}
                            >
                                <span className={`w-1 h-1 rounded-full group-hover:bg-orange-500 ${activeSection === s.id ? 'bg-orange-500' : 'bg-white/20'}`} />
                                {s.label}
                            </button>
                        ))}
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/10 border border-orange-500/20 rounded-full mb-8">
                        <span className="w-2 h-2 rounded-full bg-orange-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-400">Essential Resource</span>
                    </div>
                    <h1 className="text-7xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                        The Owner's <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Manual.</span>
                    </h1>
                </header>

                {/* --- GUIDE SECTION (Original) --- */}
                {activeSection === 'guide' && (
                    <div className="animate-in fade-in slide-in-from-bottom-10 duration-500">
                        <section className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="bg-white/5 border border-white/10 p-16 rounded-[4rem] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                                <h2 className="text-4xl font-black mb-10 tracking-tighter uppercase">Anatomy of a Roof</h2>
                                <div className="space-y-8">
                                    {[
                                        { t: "Roofing Material", d: "The outermost layer (metal, asphalt). Your shield against the elements." },
                                        { t: "Underlayment", d: "A waterproof barrier beneath the material providing secondary leak protection." },
                                        { t: "Flashing", d: "Metal armor installed at joints and vents to divert water." },
                                        { t: "Ventilation", d: "Intake and exhaust systems preventing attic mold and ice dams." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 group/item">
                                            <span className="text-orange-500 font-black text-xl">0{i + 1}</span>
                                            <div>
                                                <h4 className="font-black text-white/90 mb-2 uppercase tracking-tighter">{item.t}</h4>
                                                <p className="text-white/40 leading-relaxed text-sm font-medium">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-10">
                                <div className="p-12 bg-orange-600 rounded-[3rem] shadow-2xl shadow-orange-900/40">
                                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter">Ownership Checklist</h3>
                                    <ul className="space-y-4 text-white/80 font-medium">
                                        <li className="flex items-center gap-3">✅ Inspect Regularly (Twice a year)</li>
                                        <li className="flex items-center gap-3">✅ Keep Gutters Clean</li>
                                        <li className="flex items-center gap-3">✅ Trim Overhanging Branches</li>
                                        <li className="flex items-center gap-3">✅ Avoid Roof Foot Traffic</li>
                                        <li className="flex items-center gap-3">✅ Check Outdoor Outlets</li>
                                    </ul>
                                </div>
                                <div className="p-12 bg-white/5 border border-white/10 rounded-[3rem]">
                                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-orange-500">NB Climate Notes</h3>
                                    <p className="text-white/40 font-medium leading-relaxed mb-4">
                                        Our region's freeze-thaw cycles are brutal. Proper attic ventilation is the #1 defense against ice dams.
                                    </p>
                                    <button onClick={() => setActiveSection('inspection')} className="text-white font-black uppercase tracking-widest text-xs border-b border-orange-500 pb-1">Learn about Ice Dams →</button>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* --- PROCESS SECTION (Integrated) --- */}
                {activeSection === 'process' && (
                    <div className="animate-in fade-in slide-in-from-bottom-10 duration-500">
                        <section className="mb-20">
                            <h2 className="text-5xl font-black mb-8 tracking-tighter uppercase text-center">The 7-Step Standard</h2>
                            <p className="text-white/40 text-center max-w-2xl mx-auto mb-16">
                                We don't guess. We follow a military-grade process for every project to ensure zero surprises and 100% transparency.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {PROCESS_STEPS.map((step) => (
                                    <Card key={step.id} className="p-8 hover:bg-white/10 transition-colors group">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                                {step.icon}
                                            </div>
                                            <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Step 0{step.id}</span>
                                        </div>
                                        <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">{step.title}</h3>
                                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-400 mb-4">
                                            <Clock className="w-3 h-3" /> {step.duration}
                                        </div>
                                        <p className="text-white/40 text-sm mb-6 font-medium leading-relaxed">{step.description}</p>
                                        <ul className="space-y-2">
                                            {step.points.map((p, i) => (
                                                <li key={i} className="flex items-center gap-2 text-xs text-white/60 font-medium">
                                                    <CheckCircle className="w-3 h-3 text-green-500" /> {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {/* --- INSPECTION SECTION (Integrated) --- */}
                {activeSection === 'inspection' && (
                    <div className="animate-in fade-in slide-in-from-bottom-10 duration-500">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
                            <div>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6 block">Advanced Diagnostics</span>
                                <h2 className="text-5xl font-black mb-8 tracking-tighter uppercase">We See What <br /> Others Miss.</h2>
                                <p className="text-white/40 text-lg mb-8 leading-relaxed">
                                    Using military-grade thermal drones, we identify heat loss, moisture entrapment, and insulation failures without ever touching your roof.
                                </p>
                                <div className="grid grid-cols-1 gap-4">
                                    {INSPECTION_POINTS.map((pt, i) => (
                                        <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-4">
                                            <span className="text-3xl">{pt.icon}</span>
                                            <div>
                                                <h4 className="font-black text-white uppercase tracking-tighter text-sm mb-1">{pt.title}</h4>
                                                <p className="text-white/40 text-xs font-medium leading-relaxed">{pt.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-orange-600 rounded-[3rem] p-10 flex flex-col justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549643276-fbc2bd580dbf?q=80&w=2670&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-overlay" />
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">The Thermal Audit Report</h3>
                                    <ul className="space-y-4 mb-10">
                                        <li className="flex items-center gap-3 text-white font-bold"><CheckCircle className="w-5 h-5 text-zinc-900" /> Heat Loss Map</li>
                                        <li className="flex items-center gap-3 text-white font-bold"><CheckCircle className="w-5 h-5 text-zinc-900" /> Moisture Intrusion Identification</li>
                                        <li className="flex items-center gap-3 text-white font-bold"><CheckCircle className="w-5 h-5 text-zinc-900" /> Insulation Gap Analysis</li>
                                    </ul>
                                    <div className="bg-white p-6 rounded-2xl text-center">
                                        <p className="text-slate-900 font-bold mb-2">Typically $499</p>
                                        <p className="text-orange-600 font-black text-2xl uppercase tracking-tighter">Free with Consultation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- HUMOR SECTION --- */}
                {activeSection === 'humor' && (
                    <div className="animate-in fade-in slide-in-from-bottom-10 duration-500">
                        <section className="mb-40">
                            <div className="mb-16 text-center">
                                <h2 className="text-5xl font-black mb-4 tracking-tighter uppercase">Dad's Roofing Jokes</h2>
                                <p className="text-white/40 font-medium">Because even roofing should have a sense of humor.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-center hover:bg-orange-600 hover:border-orange-500 transition-colors group cursor-pointer" onClick={() => { }}>
                                    <span className="text-4xl mb-4 block">🍫</span>
                                    <p className="font-bold text-white mb-2">Favorite Candy?</p>
                                    <p className="text-white/40 group-hover:text-white transition-colors uppercase tracking-widest text-xs font-black">Shingles!</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-center hover:bg-orange-600 hover:border-orange-500 transition-colors group cursor-pointer">
                                    <span className="text-4xl mb-4 block">💔</span>
                                    <p className="font-bold text-white mb-2">Broken Up?</p>
                                    <p className="text-white/40 group-hover:text-white transition-colors uppercase tracking-widest text-xs font-black">Too much pressure!</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-center hover:bg-orange-600 hover:border-orange-500 transition-colors group cursor-pointer">
                                    <span className="text-4xl mb-4 block">💡</span>
                                    <p className="font-bold text-white mb-2">Changing Bulbs?</p>
                                    <p className="text-white/40 group-hover:text-white transition-colors uppercase tracking-widest text-xs font-black">We work in the dark!</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-center hover:bg-orange-600 hover:border-orange-500 transition-colors group cursor-pointer">
                                    <span className="text-4xl mb-4 block">😅</span>
                                    <p className="font-bold text-white mb-2">Therapy?</p>
                                    <p className="text-white/40 group-hover:text-white transition-colors uppercase tracking-widest text-xs font-black">Issues up top!</p>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                <footer className="mt-40 border-t border-white/10 pt-20 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-950 font-black text-xl">H</div>
                        <span className="text-[11px] font-black uppercase tracking-widest">Homeowner's Handbook</span>
                    </div>
                    <div className="flex gap-10 text-[9px] font-black uppercase tracking-widest text-white/30">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-white/20">
                        © 2026 Homeowner's Handbook. All Rights Reserved.
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Handbook;
