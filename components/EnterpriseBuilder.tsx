
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { client } from '../lib/amplify';
import WeatherOverlay from './WeatherOverlay';
import ShedVisualizer from './ShedVisualizer';
import {
    ShedSpec,
    WeatherType,
    ChatMessage,
    ShedStyleType,
    SidingType,
    DoorType,
    CostEstimate,
    RenderMode
} from '../types';
import {
    SHED_DB,
    UPGRADES,
    INVENTORY_ITEMS,
    NATURE_ASSETS,
    COLOR_PALETTE,
    calculateMaterials,
    SHOWROOM_ITEMS
} from '../constants';
import { generateConfigFromPrompt } from '../services/geminiService';
import LivePowerGauge from './LivePowerGauge';
import ROICalculator from './ROICalculator';
import ShareModal from './ShareModal';

const ShowroomCard: React.FC<{ item: typeof SHOWROOM_ITEMS[0], onSelect: () => void }> = ({ item, onSelect }) => (
    <div
        onClick={onSelect}
        className="group relative bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer shadow-2xl"
    >
        <div className="aspect-[16/9] overflow-hidden relative">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            {item.badge && (
                <div className="absolute top-6 right-6 bg-blue-600 text-white text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-2xl">
                    {item.badge}
                </div>
            )}
        </div>
        <div className="p-8 -mt-12 relative z-10">
            <span className="text-[8px] font-black text-blue-500 uppercase tracking-[0.3em] mb-2 block">{item.label}</span>
            <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors tracking-tighter leading-tight uppercase">{item.title}</h3>
            <p className="text-white/40 text-xs leading-relaxed mb-6 font-medium line-clamp-2">{item.description}</p>
            <div className="flex items-center gap-4">
                <span className="text-[8px] font-black text-white uppercase tracking-widest group-hover:text-blue-400 transition-colors">Select Model</span>
                <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-blue-500/40 transition-colors" />
                <span className="text-xl group-hover:translate-x-2 transition-transform text-white group-hover:text-blue-400">→</span>
            </div>
        </div>
    </div>
);

interface EnterpriseBuilderProps {
    initialStyle?: ShedStyleType;
    initialSpec?: ShedSpec;
    onBack?: () => void;
    onCheckout?: (spec: ShedSpec, costs: CostEstimate) => void;
    onSpecChange?: (spec: ShedSpec) => void;
}

const UNIT_PRICES = {
    stud: 5.25,
    sheathing: 32.00,
    shingles: 45.00,
    trim: 2.50,
    joist: 12.00,
    dripEdge: 15.00,
    felt: 25.00
};

const EnterpriseBuilder: React.FC<EnterpriseBuilderProps> = ({ initialStyle = 'Modern Studio', initialSpec, onBack, onCheckout, onSpecChange }) => {
    const [spec, setSpec] = useState<ShedSpec>(initialSpec || {
        style: initialStyle,
        material: initialStyle === 'Modern Studio' ? 'Metal' : 'Vinyl',
        terrain: 'grass',
        time: 50,
        viewMode: 'exterior',
        renderMode: '3D',
        inventory: [],
        landscape: [],
        addons: { ramp: false, solar: false, ac: false, loft: false, workbench: false, shedLoo: false },
        pitch: 6,
        wallColor: '#f8fafc',
        trimColor: '#334155',
        sidingType: 'lap',
        doorType: 'single',
        width: 10,
        depth: 12,
        electricalTier: null
    });

    useEffect(() => {
        if (onSpecChange) onSpecChange(spec);
    }, [spec, onSpecChange]);

    const [weather, setWeather] = useState<WeatherType>('clear');
    const [activePanelTab, setActivePanelTab] = useState<'lunai' | 'structure' | 'metrics'>('lunai');
    const [chat, setChat] = useState<ChatMessage[]>([
        { role: 'ai', text: `LUNAI Placed Edition active. I can help with structural advice and real-time configuration.` }
    ]);
    const [isThinking, setIsThinking] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const [showShowroom, setShowShowroom] = useState(!initialStyle && !initialSpec);
    const [focalPoint, setFocalPoint] = useState<string | null>(null);
    const [showROI, setShowROI] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const [showNudge, setShowNudge] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const idleTimer = useRef<NodeJS.Timeout | null>(null);

    const { user } = useAuthenticator((context) => [context.user]);

    const handleSave = async () => {
        if (!user) {
            setShowLogin(true);
            return;
        }

        try {
            await client.models.ShedDesign.create({
                style: spec.style,
                width: spec.width,
                depth: spec.depth,
                wallColor: spec.wallColor,
                sidingType: spec.sidingType,
                addonsJson: JSON.stringify(spec.addons),
                specJson: JSON.stringify(spec),
                name: `My ${spec.style} - ${new Date().toLocaleDateString()}`
            });
            alert('Design saved successfully!');
            setShowLogin(false);
        } catch (error) {
            console.error('Error saving design:', error);
            alert('Failed to save design. Please try again.');
        }
    };

    // Smart Nudge Logic
    useEffect(() => {
        const resetTimer = () => {
            if (idleTimer.current) clearTimeout(idleTimer.current);
            idleTimer.current = setTimeout(() => {
                if (!showROI) setShowNudge(true);
            }, 30000); // 30 seconds idle
        };

        window.addEventListener('mousemove', resetTimer);
        window.addEventListener('keypress', resetTimer);
        resetTimer();

        return () => {
            if (idleTimer.current) clearTimeout(idleTimer.current);
            window.removeEventListener('mousemove', resetTimer);
            window.removeEventListener('keypress', resetTimer);
        };
    }, [showROI]);

    useEffect(() => {
        if (focalPoint) {
            const timer = setTimeout(() => setFocalPoint(null), 1500);
            return () => clearTimeout(timer);
        }
    }, [focalPoint]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chat]);

    const mats = useMemo(() => calculateMaterials(spec.width, spec.depth, 8, spec.pitch), [spec]);

    const detailedCosts: Record<string, number> = useMemo(() => ({
        studs: mats.studs * UNIT_PRICES.stud,
        sheathing: mats.sheathing * UNIT_PRICES.sheathing,
        shingles: mats.shingles * UNIT_PRICES.shingles,
        trim: mats.trim * UNIT_PRICES.trim,
        joists: (mats.joists || 0) * UNIT_PRICES.joist,
        dripEdge: (mats.dripEdge || 0) * UNIT_PRICES.dripEdge,
        felt: (mats.feltSquares || 0) * UNIT_PRICES.felt
    }), [mats]);

    const costs: CostEstimate = useMemo(() => {
        let base = SHED_DB[spec.style].price;

        if (spec.style === 'Lofted Barn' && spec.width === 12 && spec.depth === 28) {
            base = 14950;
        } else if (spec.style === 'Utility' && spec.width === 10 && spec.depth === 20) {
            base = 9185;
        } else if (spec.style === 'Quaker' && spec.width === 10 && spec.depth === 16) {
            base = 7975;
        } else if (spec.style === 'A-Frame' && spec.width === 10 && spec.depth === 18) {
            base = 6531;
        }

        const addonTotal = UPGRADES.reduce((acc, curr) => spec.addons[curr.id] ? acc + curr.cost : acc, 0);
        const powerCost = spec.electricalTier === '20A' ? 300 : spec.electricalTier === '30A' ? 900 : spec.electricalTier === 'offgrid' ? 2500 : 0;
        const materialTotal = (Object.values(detailedCosts) as number[]).reduce((a, b) => a + b, 0) + addonTotal + base + powerCost;
        const laborTotal = materialTotal * 0.40;
        return { material: materialTotal, labor: laborTotal, total: materialTotal + laborTotal };
    }, [spec, detailedCosts]);

    const powerMetrics = useMemo(() => {
        const max = spec.electricalTier === '20A' ? 20 : (spec.electricalTier === '30A' ? 30 : 15);
        let baseLoad = 2.0; // Minimal idle load
        if (spec.addons.ac) baseLoad += 8.5;
        if (spec.addons.workbench) baseLoad += 4.0;
        if (spec.addons.solar) baseLoad -= 3.0; // Offset from solar

        return {
            maxAmps: max,
            loadFactor: Math.max(0.1, Math.min(0.95, baseLoad / max))
        };
    }, [spec.electricalTier, spec.addons]);

    const downloadSpec = () => {
        const content = `
PLACED ENGINEERED SPECIFICATION
-------------------------------
Model: ${spec.style}
Dimensions: ${spec.width}' x ${spec.depth}'
Siding: ${spec.sidingType === 'lap' ? 'Horizontal Lap' : 'Board & Batten'}
Wall Color: ${spec.wallColor}
Addons: ${Object.entries(spec.addons).filter(([_, v]) => v).map(([k, _]) => k).join(', ') || 'None'}
Power Kit: ${spec.electricalTier || 'None'}

ESTIMATED COSTS
---------------
Materials: $${costs.material.toLocaleString()}
Labor: $${costs.labor.toLocaleString()}
Total: $${costs.total.toLocaleString()}
        `;
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Placed_Spec_${spec.style.replace(' ', '_')}.txt`;
        a.click();
    };

    const handleCommand = async (input: string) => {
        if (!input.trim()) return;
        setChat(prev => [...prev, { role: 'user', text: input }]);
        setIsThinking(true);

        try {
            const aiRes = await generateConfigFromPrompt(input, spec);
            if (aiRes) {
                setSpec(prev => ({ ...prev, ...aiRes }));
                if (aiRes.weather) setWeather(aiRes.weather as WeatherType);

                // CONTEXTUAL STRUCTURAL ADVICE
                let advice = aiRes.explanation || "System updated.";
                if (spec.style === 'Quaker' && !input.toLowerCase().includes('roof')) {
                    advice += " Note: The Quaker's saltbox roof is excellent for shedding Atlantic snow loads on the rear side.";
                }
                if (spec.width > 10 && !input.toLowerCase().includes('foundation')) {
                    advice += " For a structure this size, we recommend a gravel pad with 4x4 pressure-treated skids for maximum stability.";
                }

                setChat(prev => [...prev, { role: 'ai', text: advice }]);
            }
        } catch (err) {
            setChat(prev => [...prev, { role: 'ai', text: "LUNAI connection intermittent. Structural manual override active." }]);
        } finally {
            setIsThinking(false);
        }
    };

    return (
        <div className="w-full h-screen transition-all duration-1000 relative flex overflow-hidden font-sans text-white bg-slate-950">
            {showShowroom && (
                <div className="absolute inset-0 z-[200] bg-slate-950/95 backdrop-blur-xl p-12 overflow-y-auto no-scrollbar animate-in fade-in zoom-in-95 duration-500">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 block">Selection Hub</span>
                                <h1 className="text-6xl font-black tracking-tighter uppercase mb-4">Select Your Base.</h1>
                                <p className="text-white/40 max-w-xl text-lg font-medium">Choose a high-fidelity template to begin your professional configuration.</p>
                            </div>
                            {spec.style && (
                                <button onClick={() => setShowShowroom(false)} className="px-8 py-3 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">Cancel</button>
                            )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {SHOWROOM_ITEMS.map(item => (
                                <ShowroomCard
                                    key={item.id}
                                    item={item}
                                    onSelect={() => {
                                        setSpec(prev => ({ ...prev, style: item.style }));
                                        setShowShowroom(false);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {spec.renderMode === '3D' && <WeatherOverlay type={weather} time={spec.time} />}

            <div className="w-[420px] bg-black/40 backdrop-blur-3xl border-r border-white/10 flex flex-col z-[60]">
                <div className="flex border-b border-white/10">
                    {['lunai', 'structure', 'metrics'].map((tab) => (
                        <button key={tab} onClick={() => setActivePanelTab(tab as any)} className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${activePanelTab === tab ? 'text-blue-400 bg-blue-600/10 border-b-2 border-blue-400' : 'text-slate-500 hover:text-slate-300'}`}>
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar">
                    {activePanelTab === 'lunai' && (
                        <div className="p-8 flex flex-col h-full">
                            <div className="flex-1 space-y-6">
                                {chat.map((m, i) => (
                                    <div key={i} className={`flex flex-col ${m.role === 'ai' ? 'items-start' : 'items-end'}`}>
                                        <div className={`max-w-[90%] p-5 rounded-3xl text-xs font-medium leading-relaxed ${m.role === 'ai' ? 'bg-white/5 border border-white/10 text-slate-200' : 'bg-blue-600 text-white'}`}>
                                            {m.text}
                                        </div>
                                    </div>
                                ))}
                                {isThinking && <div className="animate-pulse bg-white/5 h-16 w-3/4 rounded-3xl" />}
                                <div ref={chatEndRef} />
                            </div>

                            <div className="mt-4 flex gap-2 flex-wrap">
                                <button onClick={() => handleCommand("What power options do I have for this size?")} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-wider text-slate-400 hover:text-white hover:bg-white/10 transition-all">What power options?</button>
                                <button onClick={() => handleCommand("Can I run a heater, PC, and lights on a 30A kit?")} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-wider text-slate-400 hover:text-white hover:bg-white/10 transition-all">Can I run a heater?</button>
                                <button onClick={() => handleCommand("What's the easiest way to power this without trenching in New Brunswick?")} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-wider text-slate-400 hover:text-white hover:bg-white/10 transition-all">No trenching power?</button>
                            </div>

                            <div className="mt-6">
                                <input disabled={isThinking} className="w-full bg-white/5 border border-white/10 p-5 rounded-[2rem] text-sm focus:border-blue-500/50 outline-none text-white transition-all" placeholder="Ask LUNAI about Placed designs..." onKeyDown={(e) => { if (e.key === 'Enter' && e.currentTarget.value.trim()) { handleCommand(e.currentTarget.value); e.currentTarget.value = ''; } }} />
                            </div>
                        </div>
                    )}

                    {activePanelTab === 'metrics' && (
                        <div className="p-8 space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-[10px] font-black uppercase text-blue-400 tracking-widest block">Material Estimator</span>
                                    <div className="text-[8px] font-bold text-white/20 uppercase">Atlantic Pro Ready</div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start border-b border-white/5 pb-3">
                                        <div className="flex flex-col">
                                            <span className="text-slate-200 text-xs font-bold">2x4 Standard Studs</span>
                                            <span className="text-[10px] text-slate-500">{mats.studs} Units</span>
                                        </div>
                                        <span className="font-mono text-xs font-bold text-white">${detailedCosts.studs.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                                    </div>
                                    <div className="flex justify-between items-start border-b border-white/5 pb-3">
                                        <div className="flex flex-col">
                                            <span className="text-slate-200 text-xs font-bold">4x8 CDX Sheathing</span>
                                            <span className="text-[10px] text-slate-500">{mats.sheathing} Sheets</span>
                                        </div>
                                        <span className="font-mono text-xs font-bold text-white">${detailedCosts.sheathing.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                                    </div>
                                    <div className="flex justify-between items-start border-b border-white/5 pb-3">
                                        <div className="flex flex-col">
                                            <span className="text-slate-200 text-xs font-bold">Asphalt Shingles</span>
                                            <span className="text-[10px] text-slate-500">{mats.shingles} Bundles</span>
                                        </div>
                                        <span className="font-mono text-xs font-bold text-white">${detailedCosts.shingles.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <span className="text-slate-200 text-xs font-bold">Structural Hardware</span>
                                            <span className="text-[10px] text-slate-500">Fasteners, Clips, Adhesive</span>
                                        </div>
                                        <span className="font-mono text-xs font-bold text-white">$145.00</span>
                                    </div>
                                </div>
                            </div>

                            <LivePowerGauge
                                maxAmps={powerMetrics.maxAmps}
                                loadFactor={powerMetrics.loadFactor}
                            />
                        </div>
                    )}

                    {activePanelTab === 'structure' && (
                        <div className="p-8 space-y-8">
                            <section>
                                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-400 mb-6 flex justify-between items-baseline">
                                    Architectural Style
                                    <button onClick={() => setShowShowroom(true)} className="text-[9px] text-white/40 hover:text-white transition-colors">Change Base →</button>
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    {(['A-Frame', 'Modern Studio', 'Quaker'] as ShedStyleType[]).map(style => (
                                        <button
                                            key={style}
                                            onClick={() => {
                                                setSpec({ ...spec, style });
                                                setFocalPoint('roof');
                                            }}
                                            className={`py-4 rounded-2xl border-2 text-[9px] font-black uppercase tracking-widest transition-all ${spec.style === style ? 'border-blue-500 bg-blue-500/10 text-white' : 'border-white/5 text-slate-500 hover:border-white/20'}`}
                                        >
                                            {style.replace(' Studio', '')}
                                        </button>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 block">Siding Configuration</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => {
                                            setSpec({ ...spec, sidingType: 'lap' });
                                            setFocalPoint('siding');
                                        }}
                                        className={`group py-6 rounded-3xl border-2 flex flex-col items-center justify-center transition-all ${spec.sidingType === 'lap' ? 'border-blue-500 bg-blue-500/10 text-white shadow-lg shadow-blue-900/20' : 'border-white/5 text-slate-500 hover:border-white/20 hover:text-slate-300'}`}
                                    >
                                        <div className="w-8 h-8 mb-2 flex flex-col gap-1 overflow-hidden rounded-md border border-white/5 bg-white/5 p-1 group-hover:scale-110 transition-transform">
                                            <div className="w-full h-1 bg-current opacity-40 shrink-0" />
                                            <div className="w-full h-1 bg-current opacity-40 shrink-0" />
                                            <div className="w-full h-1 bg-current opacity-40 shrink-0" />
                                            <div className="w-full h-1 bg-current opacity-40 shrink-0" />
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-widest">Horizontal Lap</span>
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSpec({ ...spec, sidingType: 'board' });
                                            setFocalPoint('siding');
                                        }}
                                        className={`group py-6 rounded-3xl border-2 flex flex-col items-center justify-center transition-all ${spec.sidingType === 'board' ? 'border-blue-500 bg-blue-500/10 text-white shadow-lg shadow-blue-900/20' : 'border-white/5 text-slate-500 hover:border-white/20 hover:text-slate-300'}`}
                                    >
                                        <div className="w-8 h-8 mb-2 flex gap-1 overflow-hidden rounded-md border border-white/5 bg-white/5 p-1 group-hover:scale-110 transition-transform">
                                            <div className="h-full w-1 bg-current opacity-40 shrink-0" />
                                            <div className="h-full w-1 bg-current opacity-40 shrink-0" />
                                            <div className="h-full w-1 bg-current opacity-40 shrink-0" />
                                            <div className="h-full w-1 bg-current opacity-40 shrink-0" />
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-widest">Board & Batten</span>
                                    </button>
                                </div>
                            </section>

                            <section>
                                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 block">Material Swatches</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {COLOR_PALETTE.map(c => (
                                        <button
                                            key={c.name}
                                            onClick={() => {
                                                setSpec({ ...spec, wallColor: c.hex });
                                                setFocalPoint('siding');
                                            }}
                                            className={`group relative flex flex-col items-center gap-2 p-1 rounded-2xl border-2 transition-all ${spec.wallColor === c.hex ? 'border-blue-500 bg-blue-500/5' : 'border-white/5 hover:border-white/20'}`}
                                        >
                                            <div className="w-full aspect-square rounded-xl shadow-inner overflow-hidden relative">
                                                <div className="absolute inset-0" style={{ backgroundColor: c.hex }} />
                                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-30 mix-blend-overlay" />
                                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-white/10" />
                                            </div>
                                            <span className="text-[8px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity pb-2">{c.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 block">Electrical Tier</label>
                                <div className="space-y-4">
                                    {[
                                        { id: null, name: 'Basic (Extension Cord)', cost: 0, desc: 'Simple pass-through port.' },
                                        { id: '20A', name: '20A Weekender', cost: 300, desc: 'Lights, laptop, light tools.' },
                                        { id: '30A', name: 'Current Command (Smart)', cost: 900, desc: '30A Umbilical with smart load manager.' },
                                        { id: 'offgrid', name: 'Off-Grid / Solar', cost: 2500, desc: 'PointGuard system for remote areas.' }
                                    ].map(tier => (
                                        <button
                                            key={tier.id === null ? 'null' : tier.id}
                                            onClick={() => setSpec(s => ({ ...s, electricalTier: tier.id as any }))}
                                            className={`w-full p-5 rounded-2xl border flex items-center justify-between transition-all ${spec.electricalTier === tier.id ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400' : 'border-white/10 text-slate-500 hover:bg-white/5'}`}
                                        >
                                            <div className="flex flex-col items-start">
                                                <span className="text-[10px] font-black uppercase">{tier.name}</span>
                                                <span className="text-[9px] opacity-60">{tier.desc}</span>
                                            </div>
                                            <span className="text-[10px] font-black">{tier.cost > 0 ? `+$${tier.cost}` : 'FREE'}</span>
                                        </button>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 block">Addons</label>
                                <div className="space-y-2">
                                    {UPGRADES.map(u => (
                                        <button
                                            key={u.id}
                                            onClick={() => setSpec(s => ({ ...s, addons: { ...s.addons, [u.id]: !s.addons[u.id] } }))}
                                            className={`w-full p-5 rounded-2xl border flex items-center gap-4 transition-all ${spec.addons[u.id] ? 'border-orange-500 bg-orange-500/10 text-orange-400' : 'border-white/10 text-slate-500'}`}
                                        >
                                            <span className="text-xl">{u.icon}</span>
                                            <div className="flex flex-col items-start">
                                                <span className="text-[10px] font-black uppercase">{u.name}</span>
                                                <span className="text-[9px] opacity-60">+${u.cost}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <button
                                    onClick={() => {
                                        setShowROI(true);
                                        setShowNudge(false);
                                    }}
                                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 text-white shadow-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform group"
                                >
                                    <span className="text-xl group-hover:rotate-12 transition-transform">💰</span>
                                    <div className="flex flex-col items-start leading-none">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-cyan-400">Smart Finance</span>
                                        <span className="text-sm font-bold">Stop Renting Storage</span>
                                    </div>
                                </button>
                            </section>
                        </div>
                    )}
                </div>

                <div className="p-8 border-t border-white/10 bg-black/40 backdrop-blur-3xl relative overflow-hidden group/footer">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />

                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-2 block">Current Estimate</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-black tracking-tighter transition-all duration-300 group-hover/footer:text-blue-400">
                                    ${costs.total.toLocaleString()}
                                </span>
                                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">CAD</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest block mb-1">Status</span>
                            <div className="flex items-center gap-2 text-green-500 text-[10px] font-black uppercase tracking-widest justify-end">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> {spec.electricalTier ? `${spec.electricalTier} Power` : 'Standard Unit'}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <button onClick={downloadSpec} className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:border-white/30 transition-all group">
                            <span className="opacity-40 group-hover:opacity-100 transition-opacity">↓</span> Export Tech Spec
                        </button>
                        <button onClick={() => setSpec(s => ({ ...s, viewMode: s.viewMode === 'exterior' ? 'interior' : 'exterior' }))} className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:border-white/30 transition-all">
                            View {spec.viewMode === 'exterior' ? 'Interior' : 'Exterior'}
                        </button>
                    </div>

                    <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-blue-800 shadow-2xl shadow-blue-900/40 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <h3 className="text-2xl font-black tracking-tighter uppercase mb-4">Ready to Start?</h3>
                            <p className="text-white/60 text-[10px] font-medium mb-6 max-w-[200px]">Send this design to our Saint John workshop to start fabrication.</p>
                            <button onClick={() => onCheckout?.(spec, costs)} className="w-full bg-white text-blue-600 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
                                Contact Our Craftsman
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 relative flex flex-col items-center justify-center overflow-hidden z-10">
                <div className="absolute top-8 left-12 right-12 z-50 flex justify-between items-start">
                    <div className="flex gap-4">
                        <button onClick={onBack} className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors bg-white/5 backdrop-blur px-6 py-2 rounded-full border border-white/10">← BACK</button>
                        <button onClick={() => setShowShare(true)} className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 hover:text-white transition-colors bg-cyan-500/10 backdrop-blur px-6 py-2 rounded-full border border-cyan-500/20 hover:bg-cyan-500">SHARE</button>
                        <button onClick={handleSave} className="text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-green-400 transition-colors bg-green-500/10 backdrop-blur px-6 py-2 rounded-full border border-green-500/20 hover:bg-green-500/20">SAVE</button>
                    </div>
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-2xl border border-white/10 p-1.5 rounded-full">
                        {(['3D', 'BLUEPRINT'] as RenderMode[]).map(m => (
                            <button key={m} onClick={() => setSpec(s => ({ ...s, renderMode: m }))} className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${spec.renderMode === m ? 'bg-white text-slate-900 shadow-xl' : 'text-slate-500 hover:text-white'}`}>{m}</button>
                        ))}
                    </div>
                </div>

                <div className="absolute top-24 right-12 z-40 bg-black/60 backdrop-blur-3xl border border-white/10 p-6 rounded-3xl w-64 shadow-2xl">
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block mb-2">{spec.style}</span>
                    <div className="text-3xl font-black">{spec.width}' × {spec.depth}'</div>
                    <div className="text-[10px] text-white/40 mt-2">{(spec.width * spec.depth).toLocaleString()} Sq Ft</div>
                </div>

                <ShedVisualizer spec={spec} weather={weather} focalFeature={focalPoint} />
            </div>

            {showROI && (
                <div className="fixed inset-0 z-[250] bg-[#020617] animate-in slide-in-from-bottom-10 fade-in duration-500">
                    <ROICalculator onClose={() => setShowROI(false)} />
                </div>
            )}

            {showShare && (
                <ShareModal
                    onClose={() => setShowShare(false)}
                    url={window.location.href}
                />
            )}

            {/* Authenticator Modal for Saving */}
            {showLogin && (
                <div className="fixed inset-0 z-[300] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-8 relative max-w-md w-full">
                        <button onClick={() => setShowLogin(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900">✕</button>
                        <Authenticator>
                            {({ signOut, user }) => {
                                if (user) {
                                    // Auto-save once logged in? Or just show user state?
                                    // For now, let's just show a button to confirm save
                                    return (
                                        <div className="text-center">
                                            <h3 className="text-xl font-bold mb-4 text-slate-900">Welcome, {user.signInDetails?.loginId}</h3>
                                            <p className="mb-6 text-slate-500">You are signed in. Ready to save your design?</p>
                                            <div className="flex gap-4 justify-center">
                                                <button onClick={handleSave} className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700">Confirm Save</button>
                                                <button onClick={signOut} className="text-slate-500 hover:text-slate-900 px-6 py-2">Sign Out</button>
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        </Authenticator>
                    </div>
                </div>
            )}

            {showNudge && (
                <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-500">
                    <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-2xl border border-white/10 flex items-center gap-6 max-w-sm">
                        <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center text-2xl">💡</div>
                        <div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-1">Investment Tip</div>
                            <p className="text-sm font-medium leading-tight text-white/80">Comparing this to a storage unit? See how fast it pays for itself.</p>
                        </div>
                        <button
                            onClick={() => {
                                setShowROI(true);
                                setShowNudge(false);
                            }}
                            className="bg-cyan-500 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-cyan-400 transition-colors"
                        >
                            Calc ROI
                        </button>
                        <button onClick={() => setShowNudge(false)} className="text-white/20 hover:text-white text-xl">×</button>
                    </div>
                </div>
            )}
        </div >
    );
};

export default EnterpriseBuilder;
