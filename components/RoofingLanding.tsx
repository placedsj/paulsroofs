import React from 'react';
import { SHOWROOM_ITEMS } from '../constants';

export default function RoofingLanding({ onStart, onHandbook, onCalculator }: { onStart: () => void, onHandbook: () => void, onCalculator: () => void }) {
    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-orange-600">
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] opacity-50 animate-pulse-soft" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                </div>

                <div className="relative z-10 max-w-5xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/10 border border-orange-500/20 rounded-full mb-10">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-400">Serving Southern New Brunswick</span>
                    </div>

                    <h1 className="text-7xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">
                        ROOFING <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-600">DONE RIGHT.</span>
                    </h1>

                    <p className="text-white/40 text-xl md:text-2xl mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
                        New Brunswick's most transparent roofer. Metal, asphalt, and flat roofs installed with military precision and 100% pricing transparency.
                    </p>

                    <div className="flex flex-col gap-6 items-center">
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
                            <button onClick={onStart} className="w-full sm:w-auto bg-orange-600 text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-orange-500 transition-all shadow-2xl shadow-orange-900/50 hover:-translate-y-1">
                                Build Your Quote →
                            </button>
                            <button onClick={onHandbook} className="w-full sm:w-auto bg-white/5 text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md">
                                Read Handbook
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white text-slate-900">
                <div className="max-w-7xl mx-auto px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6 block">Why Us</span>
                            <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter">7 Steps to <br /> Perfection.</h2>
                            <p className="text-lg text-slate-600 mb-8">We don't guess. We follow a strict 7-step process for every roof, ensuring you know exactly what is happening, when it's happening, and what it costs.</p>
                            <button className="text-orange-600 font-black uppercase tracking-widest text-xs border-b-2 border-orange-600 pb-1">View Our Process</button>
                        </div>
                        <div className="bg-slate-100 rounded-[3rem] h-[500px] w-full" />
                    </div>
                </div>
            </section>
        </div>
    );
}
