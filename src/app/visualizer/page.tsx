
"use client";

import React, { useState, useEffect } from 'react';

export default function VisualizerPage() {
    const [selectedService, setSelectedService] = useState('metal');
    const [selectedRoofColor, setSelectedRoofColor] = useState<{name: string, hex: string, code: string}>({ name: 'CHARCOAL GRAY', hex: '#4b5563', code: 'MG-001' });
    const [selectedSidingColor, setSelectedSidingColor] = useState<{name: string, hex: string, code: string}>({ name: "Flagstone", hex: "#88919a", code: "MIT-FLAG" });
    const [selectedSidingBrand, setSelectedSidingBrand] = useState('mittenVinyl');
    const [houseStyle, setHouseStyle] = useState('colonial');

    const roofingPalettes = {
        metal: {
            label: "Metal Roofing Colors",
            colors: [
                { name: 'CHARCOAL GRAY', hex: '#4b5563', code: 'MG-001' },
                { name: 'SLATE BLUE', hex: '#64748b', code: 'MG-002' },
                { name: 'FOREST GREEN', hex: '#14532d', code: 'MG-003' },
                { name: 'BRICK RED', hex: '#be123c', code: 'MG-004' },
                { name: 'COPPER BRONZE', hex: '#b9732f', code: 'MG-005' },
                { name: 'ARCTIC WHITE', hex: '#e7ebf0', code: 'MG-006' },
                { name: 'STORM GRAY', hex: '#6b7280', code: 'MG-007' },
                { name: 'BURNISHED SLATE', hex: '#1f4b49', code: 'MG-008' }
            ]
        },
        shingles: {
            label: "Asphalt Shingle Colors",
            colors: [
                { name: 'DUAL BLACK', hex: '#2a2a2c', code: 'IKO-DB' },
                { name: 'DRIFTWOOD', hex: '#a69a8a', code: 'IKO-DW' },
                { name: 'DUAL GREY', hex: '#8a8d91', code: 'IKO-DG' },
                { name: 'CHARCOAL GREY', hex: '#646569', code: 'IKO-CG' },
                { name: 'WEATHERWOOD', hex: '#83776b', code: 'IKO-WW' },
                { name: 'HARVARD SLATE', hex: '#4f535a', code: 'IKO-HS' }
            ]
        }
    };
    
    const sidingPalettes = {
      mittenVinyl: {
        label: "Mitten Vinyl",
        source: "Mitten Building Products",
        profiles: ["Horizontal", "Dutchlap", "Board & Batten"],
        colors: [
          { name: "Flagstone", code: "MIT-FLAG", hex: "#88919a" },
          { name: "Stratus", code: "MIT-STR", hex: "#aeb5bb" },
          { name: "Satin Grey", code: "MIT-SG", hex: "#9aa0a6" },
          { name: "Yukon Grey", code: "MIT-YG", hex: "#6d7379" },
          { name: "Huron Blue", code: "MIT-HB", hex: "#4e6a84" }
        ]
      },
      hardieBoard: {
        label: "Hardie Board (ColorPlus)",
        source: "James Hardie ColorPlus",
        colors: [
          { name: "Evening Blue (2025 COTY)", code: "JH-EB", hex: "#2d4461" },
          { name: "Iron Gray", code: "JH-IG", hex: "#3b4046" },
          { name: "Arctic White", code: "JH-AW", hex: "#f3f4f6" },
          { name: "Boothbay Blue", code: "JH-BB", hex: "#6f8697" },
          { name: "Monterey Taupe", code: "JH-MT", hex: "#9a8f80" }
        ]
      },
      hardieShingle: {
        label: "Hardie Shingle",
        source: "James Hardie Shingle",
        colors: [
          { name: "Evening Blue", code: "JH-EB", hex: "#2d4461" },
          { name: "Cobble Stone", code: "JH-CS", hex: "#c9c2b8" },
          { name: "Aged Pewter", code: "JH-AP", hex: "#8a8f92" },
          { name: "Deep Ocean", code: "JH-DO", hex: "#243b55" }
        ]
      }
    };

    const currentRoofColors = roofingPalettes[selectedService as 'metal' | 'shingles']?.colors || [];
    const currentSidingColors = sidingPalettes[selectedSidingBrand as 'mittenVinyl' | 'hardieBoard' | 'hardieShingle']?.colors || [];

    const initialRoofColor = roofingPalettes[selectedService as 'metal' | 'shingles']?.colors[0];
    const initialSidingColor = sidingPalettes[selectedSidingBrand as 'mittenVinyl' | 'hardieBoard' | 'hardieShingle']?.colors[0];
    
    useEffect(() => {
        if (['metal', 'shingles'].includes(selectedService)) {
            setSelectedRoofColor(initialRoofColor);
        }
    }, [selectedService, initialRoofColor]);

    useEffect(() => {
        setSelectedSidingColor(initialSidingColor);
    }, [selectedSidingBrand, initialSidingColor]);


    const SidingVisualizer = () => (
         <div className="grid lg:grid-cols-2 gap-6">
            <section className="glass rounded-2xl p-6 elevate">
                 <div className="flex items-center justify-between gap-3 mb-4">
                    <h3 className="text-xl font-semibold text-slate-100 normal-case">Siding Colors</h3>
                     <label className="text-sm">
                        <span className="sr-only">Siding Brand</span>
                        <select 
                            id="sidingBrand" 
                            className="bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-slate-100"
                            value={selectedSidingBrand}
                            onChange={(e) => setSelectedSidingBrand(e.target.value)}
                        >
                            <option value="mittenVinyl">Mitten Vinyl</option>
                            <option value="hardieBoard">Hardie Board</option>
                            <option value="hardieShingle">Hardie Shingle</option>
                        </select>
                    </label>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {currentSidingColors.map((colorOption) => (
                        <li key={colorOption.code}>
                            <button 
                                className="swatch w-full rounded-xl p-3 text-left glass/50"
                                style={{ background: colorOption.hex }}
                                onClick={() => setSelectedSidingColor(colorOption)}
                                aria-label={`${colorOption.name} ${colorOption.code}`}
                            >
                                <div className={`${colorOption.hex > '#d0d0d0' ? 'bg-black/5' : 'bg-white/10'} rounded-lg p-3`}>
                                    <span className={`block text-sm font-medium ${colorOption.hex > '#d0d0d0' ? 'text-slate-900' : 'text-slate-100'}`}>{colorOption.name}</span>
                                    <span className={`block text-xs ${colorOption.hex > '#d0d0d0' ? 'text-slate-700' : 'text-slate-300'}`}>{colorOption.code}</span>
                                </div>
                            </button>
                        </li>
                    ))}
                </ul>
                <p className="mt-4 text-xs text-slate-300">Source: {sidingPalettes[selectedSidingBrand as 'mittenVinyl' | 'hardieBoard' | 'hardieShingle'].source}</p>
            </section>
            
            <section className="glass rounded-2xl p-6 elevate">
                 <div className="flex items-center justify-between gap-3 mb-4">
                    <h3 className="text-xl font-semibold text-slate-100 normal-case">House Visualizer</h3>
                </div>
                
                <div className="rounded-xl overflow-hidden bg-gradient-to-b from-sky-400/40 to-indigo-600/40 p-8">
                    <svg viewBox="0 0 300 200" className="w-full h-[260px] mx-auto">
                        <defs>
                            <linearGradient id="roofShine" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0" stopColor="#ffffff" stopOpacity=".15"></stop>
                                <stop offset=".5" stopColor="#000000" stopOpacity=".0"></stop>
                            </linearGradient>
                            <pattern id="shingleGrain" patternUnits="userSpaceOnUse" width="10" height="10">
                                <path d="M0 5 L10 5" stroke="#000" strokeWidth="0.5" strokeOpacity="0.1"/>
                                <path d="M5 0 L5 10" stroke="#000" strokeWidth="0.5" strokeOpacity="0.1"/>
                            </pattern>
                        </defs>
                        <rect x="90" y="90" width="120" height="70" fill={selectedSidingColor.hex} stroke="#1F2937" strokeWidth="2" />
                        <rect x="145" y="120" width="30" height="40" fill="#8B5E34" />
                        <rect x="105" y="110" width="25" height="20" fill="#93C5FD" stroke="#1F2937" />
                        <rect x="170" y="110" width="25" height="20" fill="#93C5FD" stroke="#1F2937" />
                        <polygon points="80,90 150,50 220,90" fill={selectedRoofColor.hex}></polygon>
                        {selectedService === 'shingles' && <polygon points="80,90 150,50 220,90" fill="url(#shingleGrain)"></polygon>}
                        <polygon points="80,90 150,50 220,90" fill="url(#roofShine)"></polygon>
                    </svg>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-slate-300">Click a color to apply to the siding.</p>
                    <button 
                        onClick={() => setSelectedSidingColor(initialSidingColor)}
                        className="text-sm px-3 py-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/20"
                    >
                        Reset
                    </button>
                </div>
            </section>
        </div>
    );

    const RoofVisualizer = () => (
        <div className="grid lg:grid-cols-2 gap-6">
            <section className="glass rounded-2xl p-6 elevate">
                <h3 className="text-xl font-semibold mb-4 text-slate-100 normal-case">{roofingPalettes[selectedService as 'metal' | 'shingles'].label}</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {currentRoofColors.map((colorOption) => (
                        <li key={colorOption.code}>
                            <button 
                                className="swatch w-full rounded-xl p-3 text-left glass/50"
                                style={{ background: colorOption.hex }}
                                onClick={() => setSelectedRoofColor(colorOption)}
                                aria-label={`${colorOption.name} ${colorOption.code}`}
                            >
                                <div className={`${colorOption.hex > '#d0d0d0' ? 'bg-black/5' : 'bg-white/10'} rounded-lg p-3`}>
                                    <span className={`block text-sm font-medium ${colorOption.hex > '#d0d0d0' ? 'text-slate-900' : 'text-slate-100'}`}>{colorOption.name}</span>
                                    <span className={`block text-xs ${colorOption.hex > '#d0d0d0' ? 'text-slate-700' : 'text-slate-300'}`}>{colorOption.code}</span>
                                </div>
                            </button>
                        </li>
                    ))}
                </ul>
                <p className="mt-4 text-xs text-slate-300">Tip: keep foreground/background contrast ≥ 4.5:1 for labels and UI text. [WCAG‑AA]</p>
            </section>
            
            <section className="glass rounded-2xl p-6 elevate">
                 <div className="flex items-center justify-between gap-3 mb-4">
                    <h3 className="text-xl font-semibold text-slate-100 normal-case">Roof Visualizer</h3>
                     <label className="text-sm">
                        <span className="sr-only">House style</span>
                        <select 
                            id="houseStyle" 
                            className="bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-slate-100"
                            value={houseStyle}
                            onChange={(e) => setHouseStyle(e.target.value)}
                        >
                            <option value="colonial">Colonial</option>
                            <option value="ranch">Ranch</option>
                            <option value="modern">Modern</option>
                        </select>
                    </label>
                </div>
                
                <div className="rounded-xl overflow-hidden bg-gradient-to-b from-sky-400/40 to-indigo-600/40 p-8">
                    <svg viewBox="0 0 300 200" className="w-full h-[260px] mx-auto">
                        <defs>
                            <linearGradient id="roofShine" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0" stopColor="#ffffff" stopOpacity=".15"></stop>
                                <stop offset=".5" stopColor="#000000" stopOpacity=".0"></stop>
                            </linearGradient>
                            <pattern id="shingleGrain" patternUnits="userSpaceOnUse" width="10" height="10">
                                <path d="M0 5 L10 5" stroke="#000" strokeWidth="0.5" strokeOpacity="0.1"/>
                                <path d="M5 0 L5 10" stroke="#000" strokeWidth="0.5" strokeOpacity="0.1"/>
                            </pattern>
                        </defs>
                        <rect x="90" y="90" width="120" height="70" fill={selectedSidingColor.hex} stroke="#1F2937" strokeWidth="2" />
                        <rect x="145" y="120" width="30" height="40" fill="#8B5E34" />
                        <rect x="105" y="110" width="25" height="20" fill="#93C5FD" stroke="#1F2937" />
                        <rect x="170" y="110" width="25" height="20" fill="#93C5FD" stroke="#1F2937" />
                        <polygon points="80,90 150,50 220,90" fill={selectedRoofColor.hex}></polygon>
                        {selectedService === 'shingles' && <polygon points="80,90 150,50 220,90" fill="url(#shingleGrain)"></polygon>}
                        <polygon points="80,90 150,50 220,90" fill="url(#roofShine)"></polygon>
                    </svg>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-slate-300">Click a color to apply to the roof.</p>
                    <button 
                        onClick={() => setSelectedRoofColor(initialRoofColor)}
                        className="text-sm px-3 py-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/20"
                    >
                        Reset
                    </button>
                </div>
            </section>
        </div>
    );

    return (
        <div className="min-h-screen bg-zinc-900">
             <nav className="fixed top-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-700 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <a href="/" className="text-2xl font-bold text-zinc-50">PAUL'S ROOFING</a>
                        <div className="hidden md:flex space-x-8">
                            <a href="/" className="text-zinc-400 hover:text-orange-500 transition-colors">HOME</a>
                            <a href="/#services" className="text-zinc-400 hover:text-orange-500 transition-colors">SERVICES</a>
                            <a href="/visualizer" className="text-orange-500 font-bold transition-colors">VISUALIZER</a>
                            <a href="/#about" className="text-zinc-400 hover:text-orange-500 transition-colors">ABOUT</a>
                            <a href="/#contact" className="text-zinc-400 hover:text-orange-500 transition-colors">CONTACT</a>
                            
                        </div>
                    </div>
                </div>
            </nav>
            <main className="pt-24">
                 <section id="services" className="py-12 bg-zinc-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-center text-zinc-50 mb-4">EXTERIOR VISUALIZER</h2>
                        <p className="text-lg text-zinc-400 text-center mb-12">Experiment with different roofing and siding options to find the perfect look for your home.</p>

                        
                        {/* Service Selection Tabs */}
                        <div className="flex justify-center mb-12">
                            <div className="flex bg-zinc-700 rounded-lg p-1 border border-zinc-600">
                                <button
                                    onClick={() => setSelectedService('metal')}
                                    className={`px-6 py-3 rounded-md font-bold transition-colors ${
                                        selectedService === 'metal' 
                                            ? 'bg-orange-600 text-white' 
                                            : 'text-zinc-400 hover:text-zinc-200'
                                    }`}
                                >
                                    METAL ROOFING
                                </button>
                                <button
                                    onClick={() => setSelectedService('shingles')}
                                    className={`px-6 py-3 rounded-md font-bold transition-colors ${
                                        selectedService === 'shingles' 
                                            ? 'bg-orange-600 text-white' 
                                            : 'text-zinc-400 hover:text-zinc-200'
                                    }`}
                                >
                                    ASPHALT SHINGLES
                                </button>
                                <button
                                    onClick={() => setSelectedService('siding')}
                                    className={`px-6 py-3 rounded-md font-bold transition-colors ${
                                        selectedService === 'siding' 
                                            ? 'bg-orange-600 text-white' 
                                            : 'text-zinc-400 hover:text-zinc-200'
                                    }`}
                                >
                                    SIDING
                                </button>
                            </div>
                        </div>

                        {/* Visualizer Content */}
                        { selectedService === 'siding' ? (
                            <SidingVisualizer />
                        ) : (
                            <RoofVisualizer />
                        )}
                        
                    </div>
                </section>
            </main>
        </div>
    );
}

