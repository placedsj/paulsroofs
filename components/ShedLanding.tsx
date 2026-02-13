import React from 'react';

export default function ShedLanding({ onStart, onHandbook, onCalculator }: { onStart: () => void, onHandbook: () => void, onCalculator: () => void }) {
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
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-400">Level 7: World Builder Active</span>
                    </div>

                    <h1 className="text-7xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">
                        BUILD THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-600">FUTURE.</span>
                    </h1>

                    <p className="text-white/40 text-xl md:text-2xl mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
                        Design your shed, size your power, and see exactly what it takes to turn an empty corner of your lot into a heated office, workshop, or guest space.
                    </p>

                    <div className="flex flex-col gap-6 items-center">
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
                            <button onClick={onStart} className="w-full sm:w-auto bg-orange-600 text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-orange-500 transition-all shadow-2xl shadow-orange-900/50 hover:-translate-y-1">
                                Configure Your Shed →
                            </button>
                            <button onClick={onHandbook} className="w-full sm:w-auto bg-white/5 text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md">
                                Read Handbook
                            </button>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Not sure about power, permits, or New Brunswick winters? Start here.</span>
                    </div>
                </div>
            </section>

            <section className="py-40 bg-white text-slate-900">
                <div className="max-w-7xl mx-auto px-10">
                    <div className="mb-24 text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6 block">Our Portfolio</span>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                            Built for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Atlantic Life.</span>
                        </h2>
                        <p className="text-slate-500 text-lg mt-8 max-w-2xl mx-auto font-medium">
                            Real backyards, real Atlantic weather. From plug-in home offices to lofted barns with serious power, here's what we've built in New Brunswick and beyond.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "The Modern Shed Office",
                                tag: "Work From Home",
                                desc: "A 10' x 16' backyard studio powered by a 30A plug-in kit—quiet, heated, and just a short walk from the back door.",
                                img: "https://images.unsplash.com/photo-1518481852452-9415b262eba4?q=80&w=2670&auto=format&fit=crop"
                            },
                            {
                                title: "The Lofted Barn",
                                tag: "Maximum Storage",
                                desc: "The ultimate flagship. Massive footprint, double lofts, and Canadian-tough construction.",
                                img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=3432&auto=format&fit=crop"
                            },
                            {
                                title: "The Garden Retreat",
                                tag: "Backyard Escape",
                                desc: "Standard vertical framing with a sharp peak. Solid, reliable, and big enough for everything.",
                                img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2574&auto=format&fit=crop"
                            }
                        ].map((item, i) => (
                            <div key={i} className={`group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl shadow-slate-200 ${i === 1 ? 'md:-mt-16' : ''}`}>
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80" />
                                <div className="absolute bottom-0 left-0 right-0 p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-500 mb-3 block">{item.tag}</span>
                                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-4">{item.title}</h3>
                                    <p className="text-white/60 text-xs font-medium mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{item.desc}</p>
                                    <div className="w-10 h-1 bg-white/20 group-hover:bg-orange-500 transition-colors duration-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
