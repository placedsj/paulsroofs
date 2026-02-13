
import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import EnterpriseBuilder from './components/EnterpriseBuilder';
import Handbook from './components/Handbook';
import ROICalculator from './components/ROICalculator';
import CheckoutFlow from './components/CheckoutFlow';
import LivePowerGauge from './components/LivePowerGauge';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';
import ProcessPage from './components/ProcessPage';
import ExteriorInspectionPage from './components/ExteriorInspectionPage';
import BlogIndex from './components/BlogIndex';
import BlogPost from './components/BlogPost';
import PaymentPage from './components/PaymentPage';
import { Amplify } from 'aws-amplify';
import outputs from './amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

import PaymentSuccessPage from './components/PaymentSuccessPage';
import BossQuarters from './components/StaffDashboard';
import ShedLanding from './components/ShedLanding';
import RoofingLanding from './components/RoofingLanding';

import { SHOWROOM_ITEMS, PRICING_PACKAGES, TESTIMONIALS } from './constants';
import { ShedStyleType, ShedSpec, CostEstimate } from './types';
import { BRAND_CONFIG, CURRENT_BRAND } from './config/branding';

const Header = ({ onHome, onBuild, onHandbook, onCalculator, onContact, onDashboard, onProcess, onInspection, onBlog }: any) => {
    const [secretCount, setSecretCount] = useState(0);
    const brand = BRAND_CONFIG[CURRENT_BRAND];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/5 backdrop-blur-xl px-10 py-5 flex justify-between items-center border-b border-white/10">
            <div
                onClick={() => {
                    if (secretCount + 1 >= 5) {
                        // Secret Boss Access
                        window.location.hash = 'boss-quarters';
                        window.location.reload();
                    } else {
                        setSecretCount(p => p + 1);
                        if (secretCount === 0) onHome();
                    }
                }}
                className="flex items-center gap-3 cursor-pointer group"
            >
                <div className={`w-10 h-10 ${brand.logoColor} rounded-xl flex items-center justify-center font-black text-white text-xl transition-transform shadow-lg shadow-orange-900/40 ${secretCount > 0 ? 'scale-90 bg-red-600' : 'group-hover:rotate-6'}`}>
                    {secretCount > 0 ? '🔒' : brand.logoLetter}
                </div>
                <div className="flex flex-col leading-none">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">{brand.headerTitle}</span>
                    <span className="text-sm font-bold text-orange-500 tracking-tighter">{brand.headerSubtitle}</span>
                </div>
            </div>
            <div className="hidden xl:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
                {brand.showShedBuilder && <button onClick={onBuild} className="hover:text-white transition-colors uppercase">Builder</button>}

                {brand.showRoofingProcess && (
                    <>
                        <button onClick={onProcess} className="hover:text-white transition-colors uppercase">Process</button>
                        <button onClick={onInspection} className="hover:text-white transition-colors uppercase text-cyan-400">Inspections</button>
                    </>
                )}

                <button onClick={onHandbook} className="hover:text-white transition-colors uppercase">Handbook</button>
                <button onClick={onBlog} className="hover:text-white transition-colors uppercase">Blog</button>
                <button onClick={onCalculator} className="hover:text-white transition-colors uppercase">ROI</button>
                <button onClick={onContact} className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-500 transition-all shadow-xl shadow-orange-900/20 text-[10px] font-black tracking-widest uppercase">Get Quote</button>
            </div>
        </nav>
    );
};


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
    const [view, setView] = useState<'landing' | 'showroom' | 'builder' | 'handbook' | 'calculator' | 'checkout' | 'tracking' | 'contact' | 'dashboard' | 'admin' | 'blog' | 'blog-post'>('landing');
    const [selectedPostSlug, setSelectedPostSlug] = useState<string | null>(null);

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
                onBlog={() => setView('blog')}
            />

            <div className="w-full h-full overflow-y-auto no-scrollbar scroll-smooth">
                <div key={view} className="animate-in fade-in duration-700">
                    {/* Dynamic Landing Page */}
                    {view === 'landing' && (
                        BRAND_CONFIG[CURRENT_BRAND].landingComponent === 'ShedLanding'
                            ? <ShedLanding onStart={() => setView('showroom')} onHandbook={() => setView('handbook')} onCalculator={() => setView('calculator')} />
                            : <RoofingLanding onStart={() => setView('showroom')} onHandbook={() => setView('handbook')} onCalculator={() => setView('calculator')} />
                    )}
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
                    {view === 'blog' && (
                        <BlogIndex
                            onHome={() => setView('landing')}
                            onPostSelect={(slug) => {
                                setSelectedPostSlug(slug);
                                setView('blog-post');
                            }}
                        />
                    )}
                    {view === 'blog-post' && selectedPostSlug && (
                        <BlogPost
                            slug={selectedPostSlug}
                            onBack={() => setView('blog')}
                            onHome={() => setView('landing')}
                        />
                    )}
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
