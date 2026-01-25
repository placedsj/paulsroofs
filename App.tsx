
import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import EnterpriseBuilder from './components/EnterpriseBuilder';
import Handbook from './components/Handbook';
import ROICalculator from './components/ROICalculator';
import CheckoutFlow from './components/CheckoutFlow';
import LivePowerGauge from './components/LivePowerGauge';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';
import { SHOWROOM_ITEMS, PRICING_PACKAGES, TESTIMONIALS } from './constants';
import { ShedStyleType, ShedSpec, CostEstimate } from './types';

const Header = ({ onHome, onBuild, onHandbook, onCalculator, onContact, onDashboard }: { onHome: () => void, onBuild: () => void, onHandbook: () => void, onCalculator: () => void, onContact: () => void, onDashboard: () => void }) => {
    const [secretCount, setSecretCount] = useState(0);

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/5 backdrop-blur-xl px-10 py-5 flex justify-between items-center border-b border-white/10">
            <div
                onClick={() => {
                    if (secretCount + 1 >= 5) {
                        onDashboard();
                        setSecretCount(0);
                    } else {
                        setSecretCount(p => p + 1);
                        if (secretCount === 0) onHome(); // Normal behavior on first click
                    }
                }}
                className="flex items-center gap-3 cursor-pointer group"
            >
                <div className={`w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center font-black text-white text-xl transition-transform shadow-lg shadow-orange-900/40 ${secretCount > 0 ? 'scale-90 bg-red-600' : 'group-hover:rotate-6'}`}>
                    {secretCount > 0 ? '🔒' : 'H'}
                </div>
                <div className="flex flex-col leading-none">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">Homeowner's</span>
                    <span className="text-sm font-bold text-orange-500 tracking-tighter">HANDBOOK</span>
                </div>
            </div>
            <div className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
                <button onClick={onBuild} className="hover:text-white transition-colors uppercase">Services</button>
                <button onClick={onHandbook} className="hover:text-white transition-colors uppercase">Handbook</button>
                <button onClick={onCalculator} className="hover:text-white transition-colors uppercase">ROI Tool</button>
                <button onClick={onDashboard} className="hover:text-white transition-colors uppercase text-cyan-400">My Shed</button>
                <button onClick={onContact} className="hover:text-white transition-colors uppercase">Contact</button>
                <button onClick={onBuild} className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-500 transition-all shadow-xl shadow-orange-900/20 text-[10px] font-black tracking-widest uppercase">Get Started</button>
            </div>
        </nav>
    );
};

const Landing = ({ onStart, onHandbook, onCalculator }: { onStart: () => void, onHandbook: () => void, onCalculator: () => void }) => (
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
                            Read the Handbook
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

const Showroom = ({ onSelect }: { onSelect: (style: ShedStyleType) => void }) => (
    <div className="min-h-screen bg-[#020617] pt-40 pb-20 px-10 overflow-y-auto no-scrollbar">
        <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center md:text-left">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-600 mb-6 block">Architectural Gallery</span>
                <h2 className="text-7xl font-black text-white mb-8 tracking-tighter uppercase">Select Template.</h2>
                <p className="text-white/40 text-xl max-w-2xl font-medium leading-relaxed">Every structure starts as a core geometric primitive. Select your base and unlock the Level 12 Parametric Engine.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {SHOWROOM_ITEMS.map((item) => (
                    <div key={item.id} className="group relative bg-white/5 rounded-[4rem] overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all cursor-pointer shadow-2xl" onClick={() => onSelect(item.style)}>
                        <div className="aspect-[16/10] overflow-hidden relative">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                            {item.badge && <div className="absolute top-10 right-10 bg-orange-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-2xl">{item.badge}</div>}
                        </div>
                        <div className="p-16 -mt-24 relative z-10">
                            <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mb-4 block">{item.label}</span>
                            <h3 className="text-5xl font-black text-white mb-6 group-hover:text-orange-400 transition-colors tracking-tighter leading-tight uppercase">{item.title}</h3>
                            <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-md font-medium">{item.description}</p>
                            <div className="flex items-center gap-6">
                                <span className="text-[10px] font-black text-white uppercase tracking-widest group-hover:text-orange-400 transition-colors">Deploy Parametrics</span>
                                <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-orange-500/40 transition-colors" />
                                <span className="text-3xl group-hover:translate-x-4 transition-transform text-white group-hover:text-orange-400">→</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const App: React.FC = () => {
    const [view, setView] = useState<'landing' | 'showroom' | 'builder' | 'handbook' | 'calculator' | 'checkout' | 'tracking' | 'contact' | 'dashboard' | 'admin'>('landing');

    // URL State Parsing
    const getInitialSpecFromURL = (): ShedSpec | null => {
        const params = new URLSearchParams(window.location.search);
        if (!params.has('style')) return null;

        return {
            style: params.get('style') as ShedStyleType || 'Modern Studio',
            width: parseInt(params.get('width') || '10'),
            depth: parseInt(params.get('depth') || '12'),
            wallColor: params.get('color') ? `#${params.get('color')}` : '#f8fafc',
            sidingType: (params.get('siding') as any) || 'lap',
            addons: {
                ramp: params.get('ramp') === 'true',
                solar: params.get('solar') === 'true',
                ac: params.get('ac') === 'true',
                loft: params.get('loft') === 'true',
                workbench: params.get('workbench') === 'true',
                shedLoo: params.get('shedLoo') === 'true'
            },
            electricalTier: params.get('power') as any || null,
            // Defaults
            material: 'Metal', terrain: 'grass', time: 50, viewMode: 'exterior',
            renderMode: '3D', inventory: [], landscape: [], pitch: 6, trimColor: '#334155', doorType: 'single'
        };
    };

    const initialSpecFromURL = getInitialSpecFromURL();
    const [initialStyle, setInitialStyle] = useState<ShedStyleType>(initialSpecFromURL?.style || 'Modern Studio');
    const [currentSpec, setCurrentSpec] = useState<ShedSpec | null>(initialSpecFromURL);

    // Auto-launch builder if URL params exist
    React.useEffect(() => {
        if (initialSpecFromURL) {
            setView('builder');
        }
    }, []);

    const updateURL = (spec: ShedSpec) => {
        const params = new URLSearchParams();
        params.set('style', spec.style);
        params.set('width', spec.width.toString());
        params.set('depth', spec.depth.toString());
        params.set('color', spec.wallColor.replace('#', ''));
        params.set('siding', spec.sidingType);
        if (spec.electricalTier) params.set('power', spec.electricalTier);
        Object.entries(spec.addons).forEach(([k, v]) => {
            if (v) params.set(k, 'true');
        });
        window.history.replaceState({}, '', `?${params.toString()}`);
    };
    const [currentCosts, setCurrentCosts] = useState<CostEstimate | null>(null);
    const [chatbotOpen, setChatbotOpen] = useState(false);
    const [activeLoads, setActiveLoads] = useState<string[]>(['Idle']);

    const virtualLoadValues: Record<string, number> = {
        'Idle': 0.8,
        'Laptop/Monitor': 2.5,
        'Space Heater': 12.0,
        'Table Saw': 13.5,
        'LED Lighting': 0.4,
        'Ventilation': 1.2
    };

    const totalVirtualLoad = activeLoads.reduce((acc, load) => acc + (virtualLoadValues[load] || 0), 0);

    const handleSelect = (style: ShedStyleType) => {
        setInitialStyle(style);
        setView('builder');
    };

    const handleCheckout = (spec: ShedSpec, costs: CostEstimate) => {
        setCurrentSpec(spec);
        setCurrentCosts(costs);
        setView('checkout');
    };

    return (
        <>
            <main className="w-full h-screen overflow-hidden font-sans">
                <Header
                onHome={() => setView('landing')}
                onBuild={() => setView('showroom')}
                onHandbook={() => setView('handbook')}
                onCalculator={() => setView('calculator')}
                onContact={() => setView('contact')}
                onDashboard={() => setView('admin')}
            />

            <div className="w-full h-full overflow-y-auto no-scrollbar scroll-smooth">
                <div key={view} className="animate-in fade-in duration-700">
                    {view === 'landing' && <Landing onStart={() => setView('showroom')} onHandbook={() => setView('handbook')} onCalculator={() => setView('calculator')} />}
                    {view === 'showroom' && <Showroom onSelect={handleSelect} />}
                    {view === 'builder' && (
                        <EnterpriseBuilder
                            initialStyle={initialStyle}
                            initialSpec={initialSpecFromURL || undefined}
                            onBack={() => {
                                window.history.replaceState({}, '', '/');
                                setView('showroom');
                            }}
                            onCheckout={handleCheckout}
                            onSpecChange={(s) => {
                                setCurrentSpec(s);
                                updateURL(s);
                            }}
                        />
                    )}
                    {view === 'handbook' && <Handbook />}
                    {view === 'calculator' && <ROICalculator />}
                    {view === 'contact' && <Contact />}
                    {view === 'checkout' && currentSpec && currentCosts && (
                        <CheckoutFlow
                            spec={currentSpec}
                            costs={currentCosts}
                            onCancel={() => setView('builder')}
                            onComplete={() => setView('tracking')}
                        />
                    )}
                    {view === 'tracking' && <div className="p-40 text-white text-center"><h2 className="text-4xl font-black uppercase mb-4">Order Confirmed!</h2><p className="text-white/40">Your structure is scheduled for fabrication in Saint John.</p></div>}
                    {view === 'admin' && <AdminDashboard />}
                    {view === 'dashboard' && (
                        <div className="min-h-screen pt-40 pb-20 px-10 bg-[#020617]">
                            <div className="max-w-6xl mx-auto">
                                <header className="mb-20">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-6 block">Shed Dashboard</span>
                                    <h2 className="text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">MY <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">PLACED ASSET.</span></h2>
                                </header>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                    <div className="lg:col-span-1">
                                        <LivePowerGauge baseLoad={totalVirtualLoad} status={totalVirtualLoad > 14 ? "SHEDDING LOAD" : "All Systems Go"} />

                                        <div className="mt-8 bg-white/5 border border-white/10 p-8 rounded-[3rem]">
                                            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6 font-mono">Virtual Workday Simulator</h4>
                                            <div className="grid grid-cols-1 gap-3">
                                                {Object.keys(virtualLoadValues).map(load => (
                                                    <button
                                                        key={load}
                                                        onClick={() => {
                                                            if (activeLoads.includes(load)) {
                                                                setActiveLoads(prev => prev.filter(l => l !== load));
                                                            } else {
                                                                setActiveLoads(prev => [...prev, load]);
                                                            }
                                                        }}
                                                        className={`flex justify-between items-center p-4 rounded-2xl border-2 transition-all ${activeLoads.includes(load) ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400' : 'border-white/5 text-slate-500 hover:border-white/10'}`}
                                                    >
                                                        <span className="text-[10px] font-black uppercase tracking-tight">{load}</span>
                                                        <span className="text-[9px] font-mono">{virtualLoadValues[load]}A</span>
                                                    </button>
                                                ))}
                                            </div>
                                            <p className="mt-6 text-[8px] font-bold text-white/20 uppercase tracking-widest leading-loose">
                                                Toggle devices to see how the Current Command manages the 15A threshold.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem]">
                                            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">Environment</h4>
                                            <div className="space-y-6">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-white font-bold">Temperature</span>
                                                    <span className="text-cyan-400 font-black">22°C</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-white font-bold">Humidity</span>
                                                    <span className="text-cyan-400 font-black">45%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem]">
                                            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">Device Info</h4>
                                            <div className="space-y-2">
                                                <div className="text-white font-black text-xs">ID: SHED_802_NB</div>
                                                <div className="text-slate-500 text-[10px] font-bold">Firmware: v1.2.0-placed</div>
                                                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-2">Connected via Local Wi-Fi</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="fixed bottom-10 right-10 z-[200]">
                {chatbotOpen && (
                    <div className="absolute bottom-full right-0 mb-6 w-96 bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-100 animate-in slide-in-from-bottom-10 fade-in duration-500">
                        <button onClick={() => setChatbotOpen(false)} className="absolute top-6 right-8 text-slate-300 hover:text-slate-900 transition-colors text-xl">✕</button>
                        <div className="flex items-center gap-5 mb-8">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" className="w-16 h-16 rounded-2xl shadow-xl" alt="Harper" />
                            <div>
                                <div className="font-black text-slate-900 text-lg leading-none mb-1 uppercase tracking-tighter">Harper AI</div>
                                <div className="text-[10px] font-bold text-green-500 uppercase tracking-widest flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-green-500" /> Online Assistant
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-500 leading-relaxed font-medium mb-8">
                            Hi! I'm Harper, your Placed Contractor Liaison. I can help you with material specifics or financing options.
                        </p>
                    </div>
                )}
                <button
                    onClick={() => setChatbotOpen(!chatbotOpen)}
                    className="w-20 h-20 bg-orange-600 rounded-[2rem] flex items-center justify-center text-white text-3xl shadow-2xl shadow-orange-900/40 hover:scale-110 active:scale-95 transition-all relative z-10 group"
                >
                    <span className="group-hover:rotate-12 transition-transform uppercase font-black text-xs">Help</span>
                </button>
            </div>
            </main>
            <Analytics />
        </>
    );
};

export default App;
