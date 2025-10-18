"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ContactForm } from '@/components/ContactForm';
import { ReviewsSection } from '@/components/ReviewsSection';
import { StatsSection } from '@/components/StatsSection';
import { ProjectGallery } from '@/components/ProjectGallery';
import { trackPhoneCall } from '@/components/MetaPixel';

// Since this is a single file, we define all components here.

// -- SERVICES SECTION COMPONENT -- //
const ServicesSection = () => {
    const [selectedService, setSelectedService] = useState('metal');

    // New Color Variables for consistent look
    const ACCENT_BLUE = '#1E54A3';
    const TEXT_LIGHT = '#F4F4F5';
    const CHECK_GREEN = '#2ecc71';

    return (
        <section id="services" className="py-20 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-zinc-50 mb-16">OUR SERVICES</h2>
                
                {/* Service Selection Tabs - Updated to use Zinc colors */}
                <div className="flex justify-center mb-12">
                    <div className="flex bg-zinc-700 rounded-lg p-1 border border-zinc-600">
                        <button
                            onClick={() => setSelectedService('metal')}
                            className={`px-6 py-3 rounded-md font-bold transition-colors ${
                                selectedService === 'metal' 
                                    ? `bg-[${ACCENT_BLUE}] text-white shadow-lg` 
                                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                            }`}
                            style={{ backgroundColor: selectedService === 'metal' ? ACCENT_BLUE : '' }}
                        >
                            METAL ROOFING
                        </button>
                        <button
                            onClick={() => setSelectedService('shingles')}
                            className={`px-6 py-3 rounded-md font-bold transition-colors ${
                                selectedService === 'shingles' 
                                    ? `bg-[${ACCENT_BLUE}] text-white shadow-lg` 
                                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                            }`}
                            style={{ backgroundColor: selectedService === 'shingles' ? ACCENT_BLUE : '' }}
                        >
                            ASPHALT SHINGLES
                        </button>
                        <button
                            onClick={() => setSelectedService('siding')}
                            className={`px-6 py-3 rounded-md font-bold transition-colors ${
                                selectedService === 'siding' 
                                    ? `bg-[${ACCENT_BLUE}] text-white shadow-lg` 
                                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                            }`}
                            style={{ backgroundColor: selectedService === 'siding' ? ACCENT_BLUE : '' }}
                        >
                            SIDING
                        </button>
                        <button
                            onClick={() => setSelectedService('gutters')}
                            className={`px-6 py-3 rounded-md font-bold transition-colors ${
                                selectedService === 'gutters' 
                                    ? `bg-[${ACCENT_BLUE}] text-white shadow-lg` 
                                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                            }`}
                            style={{ backgroundColor: selectedService === 'gutters' ? ACCENT_BLUE : '' }}
                        >
                            GUTTER CLEANING
                        </button>
                        <button
                            onClick={() => setSelectedService('other')}
                            className={`px-6 py-3 rounded-md font-bold transition-colors ${
                                selectedService === 'other' 
                                    ? `bg-[${ACCENT_BLUE}] text-white shadow-lg` 
                                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                            }`}
                            style={{ backgroundColor: selectedService === 'other' ? ACCENT_BLUE : '' }}
                        >
                            OTHER SERVICES
                        </button>
                    </div>
                </div>

                {/* Service Content */}
                {selectedService === 'gutters' ? (
                    <div className="space-y-8">
                        <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700 shadow-xl">
                             <h3 className="text-3xl font-bold text-zinc-50 mb-4">
                                PROFESSIONAL GUTTER CLEANING & MAINTENANCE
                            </h3>
                            <p className="text-zinc-400 text-lg mb-6">
                                Keep your home protected with our comprehensive gutter cleaning and maintenance services. Prevent water damage, foundation issues, and ice dams with regular professional cleaning.
                            </p>
                            <div className="grid md:grid-cols-3 gap-4 text-zinc-300 list-none">
                                <div><span style={{ color: CHECK_GREEN }}>•</span> Complete Gutter Cleaning</div>
                                <div><span style={{ color: CHECK_GREEN }}>•</span> Downspout Clearing</div>
                                <div><span style={{ color: CHECK_GREEN }}>•</span> Debris Removal</div>
                                <div><span style={{ color: CHECK_GREEN }}>•</span> Gutter Inspection</div>
                                <div><span style={{ color: CHECK_GREEN }}>•</span> Minor Repairs</div>
                                <div><span style={{ color: CHECK_GREEN }}>•</span> Seasonal Maintenance</div>
                            </div>
                        </div>
                    </div>
                ) : selectedService === 'other' ? (
                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700 shadow-xl">
                            <h3 className="text-2xl font-bold text-zinc-50 mb-4">ROOF REPAIRS</h3>
                            <p className="text-zinc-400 mb-4">Emergency repairs and maintenance for all roofing types. Available 24/7 for urgent situations.</p>
                            <ul className="text-zinc-300 space-y-2 list-none">
                                <li><span style={{ color: CHECK_GREEN }}>•</span> Leak Detection & Repair</li>
                                <li><span style={{ color: CHECK_GREEN }}>•</span> Storm Damage Assessment</li>
                                <li><span style={{ color: CHECK_GREEN }}>•</span> Gutter Repair & Cleaning</li>
                                <li><span style={{ color: CHECK_GREEN }}>•</span> Emergency Tarping</li>
                            </ul>
                        </div>
                        <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700 shadow-xl">
                            <h3 className="text-2xl font-bold text-zinc-50 mb-4">GUTTERS & EAVESTROUGH</h3>
                            <p className="text-zinc-400 mb-4">Complete gutter systems to protect your foundation and landscaping.</p>
                            <ul className="text-zinc-300 space-y-2 list-none">
                                <li><span style={{ color: CHECK_GREEN }}>•</span> Seamless Gutters</li>
                                <li><span style={{ color: CHECK_GREEN }}>•</span> Gutter Guards</li>
                                <li><span style={{ color: CHECK_GREEN }}>•</span> Downspout Installation</li>
                                <li><span style={{ color: CHECK_GREEN }}>•</span> Gutter Maintenance</li>
                            </ul>
                        </div>
                    </div>
                ) : selectedService === 'siding' ? (
                    <div className="space-y-8">
                        <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700 shadow-xl">
                             <h3 className="text-3xl font-bold text-zinc-50 mb-4">
                                PREMIUM SIDING INSTALLATION
                            </h3>
                            <p className="text-zinc-400 text-lg mb-6">
                                Complete exterior renovations with Hardie Board and premium vinyl materials. Explore our color options to find the perfect match for your home.
                            </p>
                            <div className="grid md:grid-cols-3 gap-4 text-zinc-300 list-none">
                                <div><span style={{ color: CHECK_GREEN }}>•</span> Hardie Board Siding</div>
                                <div><span style={{ color: CHECK_GREEN }}>•</span> Premium Vinyl Siding</div>
                                <div><span style={{ color: CHECK_GREEN }}>•</span> Wood Siding</div>
                                <div><span style={{ color: CHECK_GREEN }}>•</span> Trim & Soffit Work</div>
                                <div><span style={{ color: CHECK_GREEN }}>•</span> Weather Resistant</div>
                                <div><span style={{ color: CHECK_GREEN }}>•</span> Low Maintenance</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-8">
                        <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700 shadow-xl">
                             <h3 className="text-3xl font-bold text-zinc-50 mb-4">
                                {selectedService === 'metal' ? 'PREMIUM METAL ROOFING' : 'PREMIUM ASPHALT SHINGLES'}
                            </h3>
                            <p className="text-zinc-400 text-lg mb-6">
                                {selectedService === 'metal' 
                                    ? "Lifetime protection with our premium metal roofing systems. Choose from our extensive color palette and see how it looks on your home."
                                    : "Traditional roofing with modern performance. Our architectural shingles provide excellent protection and curb appeal."
                                }
                            </p>
                            <div className="grid md:grid-cols-3 gap-4 text-zinc-300 list-none">
                                {selectedService === 'metal' ? (
                                    <>
                                        <div><span style={{ color: CHECK_GREEN }}>•</span> 40+ Year Warranty</div>
                                        <div><span style={{ color: CHECK_GREEN }}>•</span> Energy Efficient</div>
                                        <div><span style={{ color: CHECK_GREEN }}>•</span> Storm Resistant</div>
                                        <div><span style={{ color: CHECK_GREEN }}>•</span> Fire Resistant</div>
                                        <div><span style={{ color: CHECK_GREEN }}>•</span> Low Maintenance</div>
                                        <div><span style={{ color: CHECK_GREEN }}>•</span> Eco-Friendly</div>
                                    </>
                                ) : (
                                    <>
                                        <div><span style={{ color: CHECK_GREEN }}>•</span> 25-30 Year Warranty</div>
                                        <div><span style={{ color: CHECK_GREEN }}>•</span> Wind Resistant</div>
                                        <div><span style={{ color: CHECK_GREEN }}>•</span> Impact Resistant</div>
                                        <div><span style={{ color: CHECK_GREEN }}>•</span> Algae Resistant</div>
                                        <div><span style={{ color: CHECK_GREEN }}>•</span> Cost Effective</div>
                                        <div><span style={{ color: CHECK_GREEN }}>•</span> Quick Installation</div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Call to Action - Blue themed */}
                <div className="mt-16 text-center">
                     <div className="p-8 rounded-lg shadow-xl border border-zinc-700" style={{ backgroundColor: ACCENT_BLUE }}>
                        <h3 className="text-3xl font-bold text-white mb-4">VISUALIZE YOUR NEW ROOF</h3>
                        <p className="text-blue-100 text-lg mb-6">
                            Use our interactive tool to see how different roofing and siding options will look on your home.
                        </p>
                        <a 
                            href="/visualizer" 
                            className="bg-zinc-900 hover:bg-black text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-xl"
                        >
                            LAUNCH VISUALIZER
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Boss Quarters Component (Your Firebase App)
const BossQuarters = ({ onLogout }: {onLogout: () => void}) => {
    // Simulated user ID for demo purposes
    const [userId, setUserId] = useState("demo-user-123");

    // Project-level state
    const [projectName, setProjectName] = useState("SAMPLE ROOFING PROJECT");
    const [clientContact, setClientContact] = useState("John Smith - (506) 555-0123");
    
    // State for daily logs
    type LogEntry = { id: string; text: string; timestamp: Date };
    const [dailyProgressLog, setDailyProgressLog] = useState<LogEntry[]>([]);

    // UI States
    const [currentPhase, setCurrentPhase] = useState('overview');

    // New Color Variables for consistent look
    const ACCENT_BLUE = '#1E54A3';
    const TEXT_LIGHT = '#F4F4F5';
    const CHECK_GREEN = '#2ecc71';
    const RED_DANGER = '#ef4444';

    // Functions for adding entries
    const addDailyProgressEntry = useCallback((entryText: string) => {
        const newEntry: LogEntry = {
            id: Date.now().toString(),
            text: entryText,
            timestamp: new Date()
        };
        setDailyProgressLog(prev => [...prev, newEntry]);
    }, []);

    // Updated Boss Quarters to use the new blue/dark aesthetic
    return (
        <div className="min-h-screen bg-zinc-900 flex flex-col items-center p-6 pt-12 text-zinc-400">
            {/* Header with Logout */}
            <div className="w-full max-w-4xl flex justify-between items-center mb-6">
                <h1 className="text-5xl font-extrabold text-zinc-50 uppercase tracking-wider">
                    BOSS QUARTERS
                </h1>
                <button
                    onClick={onLogout}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                >
                    🚪 LOGOUT
                </button>
            </div>

            <p className="text-xl text-zinc-400 mb-10 text-center max-w-3xl">
                PROJECT MANAGEMENT | QUOTES | INVOICES | ADMIN TOOLS
            </p>

            {/* Navigation Tabs - Updated to use ACCENT_BLUE */}
            <div className="flex flex-wrap justify-center bg-zinc-800 p-2 rounded-full shadow-lg mb-10 gap-2 border border-zinc-700">
                <button
                    className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ease-in-out ${currentPhase === 'overview' ? 'text-white shadow-md' : 'text-zinc-400 hover:bg-zinc-700'}`}
                    style={{ backgroundColor: currentPhase === 'overview' ? ACCENT_BLUE : '' }}
                    onClick={() => setCurrentPhase('overview')}
                >
                    PROJECT OVERVIEW
                </button>
                <button
                    className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ease-in-out ${currentPhase === 'quotes' ? 'text-white shadow-md' : 'text-zinc-400 hover:bg-zinc-700'}`}
                    style={{ backgroundColor: currentPhase === 'quotes' ? ACCENT_BLUE : '' }}
                    onClick={() => setCurrentPhase('quotes')}
                >
                    QUOTES
                </button>
                <button
                    className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ease-in-out ${currentPhase === 'invoices' ? 'text-white shadow-md' : 'text-zinc-400 hover:bg-zinc-700'}`}
                    style={{ backgroundColor: currentPhase === 'invoices' ? ACCENT_BLUE : '' }}
                    onClick={() => setCurrentPhase('invoices')}
                >
                    INVOICES
                </button>
                <button
                    className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ease-in-out ${currentPhase === 'during' ? 'text-white shadow-md' : 'text-zinc-400 hover:bg-zinc-700'}`}
                    style={{ backgroundColor: currentPhase === 'during' ? ACCENT_BLUE : '' }}
                    onClick={() => setCurrentPhase('during')}
                >
                    PROJECT TRACKING
                </button>
            </div>

            {/* Content Based on Phase - Updated to Dark Card Style */}
            {currentPhase === 'overview' && (
                <div className="p-8 bg-zinc-800 rounded-lg shadow-xl max-w-4xl w-full border border-zinc-700">
                    <h2 className="text-4xl font-extrabold text-zinc-50 mb-6 uppercase tracking-wide">PROJECT OVERVIEW 📊</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                        <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-700 shadow-sm">
                            <h3 className="font-bold text-zinc-400 mb-2 uppercase text-sm">PROJECT NAME:</h3>
                            <input
                                type="text"
                                className="w-full p-2 border border-zinc-600 rounded-md bg-zinc-700 text-zinc-50"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                            />
                        </div>
                        <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-700 shadow-sm">
                            <h3 className="font-bold text-zinc-400 mb-2 uppercase text-sm">CLIENT CONTACT:</h3>
                            <input
                                type="text"
                                className="w-full p-2 border border-zinc-600 rounded-md bg-zinc-700 text-zinc-50"
                                value={clientContact}
                                onChange={(e) => setClientContact(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            )}

            {currentPhase === 'quotes' && (
                <div className="p-8 bg-zinc-800 rounded-lg shadow-xl max-w-4xl w-full border border-zinc-700">
                    <h2 className="text-4xl font-extrabold text-zinc-50 mb-6 uppercase tracking-wide">QUOTE MANAGEMENT 💰</h2>
                    <div className="space-y-6">
                        <div className="p-6 rounded-lg border border-zinc-700 bg-zinc-900">
                            <h3 className="text-2xl font-bold text-zinc-50 mb-4">CREATE NEW QUOTE</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Client Name" className="p-3 border rounded-lg bg-zinc-700 border-zinc-600 text-zinc-50" />
                                <input type="email" placeholder="Client Email" className="p-3 border rounded-lg bg-zinc-700 border-zinc-600 text-zinc-50" />
                                <input type="text" placeholder="Project Type" className="p-3 border rounded-lg bg-zinc-700 border-zinc-600 text-zinc-50" />
                                <input type="number" placeholder="Estimated Cost" className="p-3 border rounded-lg bg-zinc-700 border-zinc-600 text-zinc-50" />
                            </div>
                            <textarea placeholder="Project Description" rows={4} className="w-full p-3 border rounded-lg mt-4 bg-zinc-700 border-zinc-600 text-zinc-50"></textarea>
                            <button className="text-white px-6 py-3 rounded-lg font-bold mt-4 hover:opacity-90" style={{ backgroundColor: ACCENT_BLUE }}>
                                GENERATE QUOTE
                            </button>
                        </div>
                        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
                            <h3 className="text-2xl font-bold text-zinc-50 mb-4">RECENT QUOTES</h3>
                            <p className="text-zinc-400">No quotes created yet. Create your first quote above.</p>
                        </div>
                    </div>
                </div>
            )}

            {currentPhase === 'invoices' && (
                <div className="p-8 bg-zinc-800 rounded-lg shadow-xl max-w-4xl w-full border border-zinc-700">
                    <h2 className="text-4xl font-extrabold text-zinc-50 mb-6 uppercase tracking-wide">INVOICE MANAGEMENT 📋</h2>
                    <div className="space-y-6">
                        <div className="p-6 rounded-lg border border-zinc-700 bg-zinc-900">
                            <h3 className="text-2xl font-bold text-zinc-50 mb-4">CREATE NEW INVOICE</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Invoice Number" className="p-3 border rounded-lg bg-zinc-700 border-zinc-600 text-zinc-50" />
                                <input type="date" placeholder="Due Date" className="p-3 border rounded-lg bg-zinc-700 border-zinc-600 text-zinc-50" />
                                <input type="text" placeholder="Client Name" className="p-3 border rounded-lg bg-zinc-700 border-zinc-600 text-zinc-50" />
                                <input type="number" placeholder="Total Amount" className="p-3 border rounded-lg bg-zinc-700 border-zinc-600 text-zinc-50" />
                            </div>
                            <textarea placeholder="Invoice Items & Details" rows={4} className="w-full p-3 border rounded-lg mt-4 bg-zinc-700 border-zinc-600 text-zinc-50"></textarea>
                            <button className="text-white px-6 py-3 rounded-lg font-bold mt-4 hover:opacity-90" style={{ backgroundColor: ACCENT_BLUE }}>
                                GENERATE INVOICE
                            </button>
                        </div>
                        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
                            <h3 className="text-2xl font-bold text-zinc-50 mb-4">PENDING INVOICES</h3>
                            <p className="text-zinc-400">No pending invoices. Create your first invoice above.</p>
                        </div>
                    </div>
                </div>
            )}

            {currentPhase === 'during' && (
                <div className="p-8 bg-zinc-800 rounded-lg shadow-xl max-w-4xl w-full border border-zinc-700">
                    <h2 className="text-4xl font-extrabold text-zinc-50 mb-6 uppercase tracking-wide">PROJECT TRACKING 📝</h2>
                    
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-zinc-50 mb-4 uppercase">DAILY PROGRESS LOG</h3>
                        <div className="flex mb-3">
                            <input
                                type="text"
                                className="flex-grow p-3 border border-zinc-600 rounded-l-lg bg-zinc-900 text-zinc-50 text-base focus:ring-2 focus:ring-zinc-700 focus:border-transparent"
                                placeholder="ADD NEW DAILY PROGRESS ENTRY..."
                                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                    const target = e.target as HTMLInputElement;
                                    if (e.key === 'Enter' && target.value.trim()) {
                                        addDailyProgressEntry(target.value.trim());
                                        target.value = '';
                                    }
                                }}
                            />
                            <button
                                onClick={(e) => {
                                    const button = e.target as HTMLButtonElement;
                                    const input = button.previousElementSibling as HTMLInputElement;
                                    if (input.value.trim()) {
                                        addDailyProgressEntry(input.value.trim());
                                        input.value = '';
                                    }
                                }}
                                className="text-white px-5 rounded-r-lg font-bold text-lg transition-colors shadow-md hover:opacity-90"
                                style={{ backgroundColor: ACCENT_BLUE }}
                            >
                                ADD
                            </button>
                        </div>
                        <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-700 shadow-sm text-base max-h-60 overflow-y-auto">
                            <ul className="list-disc list-inside space-y-2 text-zinc-300">
                                {dailyProgressLog.length === 0 ? (
                                    <li>NO DAILY PROGRESS LOGGED YET.</li>
                                ) : (
                                    dailyProgressLog.map((entry) => (
                                        <li key={entry.id}>
                                            <span className="text-zinc-50 font-bold">{entry.timestamp.toLocaleDateString()}:</span> {entry.text}
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer - Updated to Dark Card Style */}
            <footer className="mt-12 w-full max-w-5xl text-center text-white text-lg p-4 rounded-lg shadow-lg" style={{ backgroundColor: ACCENT_BLUE }}>
                <div className="flex justify-center mb-2">
                    <Image
                        src="/assets/paulslogo-official.png"
                        alt="Paul's Roofing Logo"
                        width={150}
                        height={40}
                        className="h-10 w-auto"
                    />
                </div>
                <p className="font-bold">BOSS QUARTERS</p>
                <p className="text-sm mt-2 text-blue-100">Secure Administrative Access | User ID: {userId}</p>
            </footer>
        </div>
    );
};


// -- MAIN APP COMPONENT -- //
export default function Home() {
    const [showBossQuarters, setShowBossQuarters] = useState(false);
    const [passwordAttempt, setPasswordAttempt] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    // New Color Variables for consistent look
    const ACCENT_BLUE = '#1E54A3';
    const RED_DANGER = '#ef4444';
    const CHECK_GREEN = '#2ecc71';

    // Server-side password authentication
    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/auth/boss', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password: passwordAttempt })
            });
            
            const data = await response.json();
            
            if (data.authenticated) {
                setIsAuthenticated(true);
                setShowBossQuarters(true);
            } else {
                alert('INCORRECT PASSWORD');
                setPasswordAttempt('');
            }
        } catch (error) {
            alert('Authentication error. Please try again.');
            setPasswordAttempt('');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setShowBossQuarters(false);
        setPasswordAttempt('');
    };

    if (showBossQuarters && isAuthenticated) {
        return <BossQuarters onLogout={handleLogout} />;
    }

    return (
        <div className="min-h-screen bg-zinc-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm border-b border-zinc-700 z-50" style={{ backgroundColor: '#0a1628' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="h-20 flex items-center">
                            <Image
                                src="/assets/paulslogo-official.png"
                                alt="Paul's Roofing Logo"
                                width={300}
                                height={80}
                                className="h-20 w-auto"
                            />
                        </div>
                        <div className="hidden md:flex space-x-4">
                            <a href="#home" className="px-4 py-2 rounded-lg text-white font-bold transition-all hover:bg-[#1E54A3]/20" style={{ border: '2px solid #1E54A3' }}>HOME</a>
                            <a href="#services" className="px-4 py-2 rounded-lg text-white font-bold transition-all hover:bg-[#1E54A3]/20" style={{ border: '2px solid #1E54A3' }}>SERVICES</a>
                            <a href="/materials" className="px-4 py-2 rounded-lg text-white font-bold transition-all hover:bg-[#1E54A3]/20" style={{ border: '2px solid #1E54A3' }}>MATERIALS GUIDE</a>
                            <a href="/handbook" className="px-4 py-2 rounded-lg text-white font-bold transition-all hover:bg-[#1E54A3]/20" style={{ border: '2px solid #1E54A3' }}>HANDBOOK</a>
                            <a href="#contact" className="px-4 py-2 rounded-lg text-white font-bold transition-all hover:bg-[#1E54A3]/20" style={{ border: '2px solid #1E54A3' }}>CONTACT</a>
                            <button 
                                onClick={() => setShowBossQuarters(true)}
                                className="px-4 py-2 rounded-lg text-white font-bold transition-all hover:bg-[#1E54A3]/20"
                                style={{ border: '2px solid #1E54A3' }}
                            >
                                STAFF
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section - The top banner in the image */}
            <section id="home" className="hero-bg min-h-screen flex items-center justify-center pt-20">
                <div className="bg-black/50 p-8 md:p-12 rounded-lg text-center shadow-2xl max-w-4xl">
                    <div className="font-bold text-xl md:text-2xl mb-4" style={{ color: '#1E54A3' }}>#BetterCallPaul</div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-50 mb-6" style={{ letterSpacing: '-0.05em', lineHeight: '1.1' }}>
                        READY TO PROTECT YOUR BIGGEST INVESTMENT?
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-300 mb-2">
                        Southern New Brunswick's one-stop for metal roofing and shingles.
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-zinc-50 mb-8">
                        Trusted for over 35 years.
                    </p>
                    <p className="text-lg font-semibold mb-8" style={{ color: '#1E54A3' }}>
                        Will yours be next?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <a 
                            href="tel:+15062714162" 
                            className="text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:bg-[#1E54A3]/20"
                            style={{ border: '2px solid #1E54A3' }}
                            onClick={() => trackPhoneCall()}
                        >
                            GET A QUOTE
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <StatsSection />

            {/* Services Section */}
            <ServicesSection />

            {/* About Section */}
            <section id="about" className="py-20 bg-zinc-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-zinc-50 mb-8">30 YEARS OF EXCELLENCE</h2>
                            <p className="text-zinc-400 text-lg mb-6">
                                Based in Southern New Brunswick, Paul's Roofing has been the trusted choice for homeowners throughout the region for three decades.
                            </p>
                            <p className="text-zinc-400 text-lg mb-6">
                                We specialize in premium metal roofing systems that are engineered to last a lifetime, backed by comprehensive warranties and expert craftsmanship.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <span className="text-green-400 mr-4">✓</span>
                                    <span className="text-zinc-300">Licensed & Insured</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-green-400 mr-4">✓</span>
                                    <span className="text-zinc-300">Lifetime Warranties Available</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-green-400 mr-4">✓</span>
                                    <span className="text-zinc-300">Emergency Services 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700 shadow-xl">
                            <h3 className="text-2xl font-bold text-zinc-50 mb-4">WHY CHOOSE US?</h3>
                            <ul className="space-y-3 text-zinc-400 list-none">
                                <li><span style={{ color: CHECK_GREEN }}>•</span> 30+ years of roofing experience</li>
                                <li><span style={{ color: CHECK_GREEN }}>•</span> Specialized in metal roofing systems</li>
                                <li><span style={{ color: CHECK_GREEN }}>•</span> Serving all of Southern New Brunswick</li>
                                <li><span style={{ color: CHECK_GREEN }}>•</span> Premium materials and workmanship</li>
                                <li><span style={{ color: CHECK_GREEN }}>•</span> Comprehensive warranty coverage</li>
                                <li><span style={{ color: CHECK_GREEN }}>•</span> Emergency repair services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Gallery */}
            <ProjectGallery />

            {/* Reviews Section */}
            <ReviewsSection />

            {/* Payment & Financing Section */}
            <section id="payment" className="py-20 bg-gradient-to-br from-[#1E54A3] via-[#123865] to-[#0a1628]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">💳 EASY PAYMENT OPTIONS</h2>
                        <p className="text-xl text-blue-100">
                            Protect your home now, pay on your terms
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        
                        {/* Stripe Payment */}
                        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-8 text-center">
                            <div className="bg-[#635BFF] p-4 rounded-lg inline-block mb-6">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                                    <path d="M13.976 9.15c-2.172-.806-3.596-1.191-3.596-2.705 0-1.278 1.195-2.041 3.196-2.041 2.007 0 4.014.738 5.238 1.814L22 4.416C20.522 3.268 18.407 2.4 15.976 2.4c-4.014 0-6.196 2.105-6.196 5.417 0 3.146 2.532 3.979 5.461 5.043 2.172.806 3.596 1.191 3.596 2.705 0 1.278-1.195 2.041-3.196 2.041-2.007 0-4.014-.738-5.238-1.814L8 17.584c1.478 1.148 3.593 2.016 6.024 2.016 4.014 0 6.196-2.105 6.196-5.417 0-3.146-2.532-3.979-5.461-5.043-.001 0-.001 0-.001 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Secure Online Payment</h3>
                            <div className="text-blue-100 space-y-2 mb-6">
                                <p>✓ All major credit cards accepted</p>
                                <p>✓ Bank-level security encryption</p>
                                <p>✓ Instant payment confirmation</p>
                                <p>✓ Mobile-friendly checkout</p>
                            </div>
                            <a
                                href="/payment"
                                className="bg-white text-[#1E54A3] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl inline-block"
                            >
                                PAY INVOICE ONLINE
                            </a>
                        </div>

                        {/* FinanceIt */}
                        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-8 text-center">
                            <div className="bg-[#00A651] p-4 rounded-lg inline-block mb-6">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">0% Down Financing</h3>
                            <div className="text-blue-100 space-y-2 mb-6">
                                <p>✓ No upfront payment required</p>
                                <p>✓ Competitive interest rates</p>
                                <p>✓ Quick online application</p>
                                <p>✓ Flexible payment terms</p>
                            </div>
                            <a
                                href="/payment"
                                className="bg-[#00A651] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#009944] transition-colors shadow-xl inline-block"
                            >
                                APPLY FOR FINANCING
                            </a>
                        </div>
                    </div>

                    {/* Additional Payment Methods */}
                    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8">
                        <h3 className="text-xl font-semibold text-white mb-6 text-center">Other Payment Methods Accepted</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="text-blue-100">
                                <div className="text-2xl mb-2">💰</div>
                                <p className="font-semibold">Cash</p>
                            </div>
                            <div className="text-blue-100">
                                <div className="text-2xl mb-2">📝</div>
                                <p className="font-semibold">Cheque</p>
                            </div>
                            <div className="text-blue-100">
                                <div className="text-2xl mb-2">💸</div>
                                <p className="font-semibold">E-Transfer</p>
                            </div>
                            <div className="text-blue-100">
                                <div className="text-2xl mb-2">📞</div>
                                <p className="font-semibold">Phone Payment</p>
                            </div>
                        </div>
                    </div>

                    {/* Trust Signal */}
                    <div className="text-center mt-8">
                        <p className="text-blue-100 text-lg">
                            🔒 <strong>Your payment is secure.</strong> Licensed & insured for 35+ years.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section - Retaining the overall structure but with dark theme */}
            <section id="contact" className="py-20 bg-zinc-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-zinc-50 mb-16">GET IN TOUCH</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-zinc-50 mb-6">CONTACT INFORMATION</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: ACCENT_BLUE }}>
                                        <span className="text-white text-sm">📞</span>
                                    </div>
                                    <div>
                                        <p className="text-zinc-300 font-semibold">(506) 271-4162</p>
                                        <p className="text-zinc-400 text-sm">Available 24/7 for emergencies</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: ACCENT_BLUE }}>
                                        <span className="text-white text-sm">✉️</span>
                                    </div>
                                    <div>
                                        <p className="text-zinc-300 font-semibold">paul@paulroofs.com</p>
                                        <p className="text-zinc-400 text-sm">General inquiries</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: ACCENT_BLUE }}>
                                        <span className="text-white text-sm">🚨</span>
                                    </div>
                                    <div>
                                        <p className="text-zinc-300 font-semibold">hurry@paulroofs.com</p>
                                        <p className="text-zinc-400 text-sm">Emergency repairs</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: ACCENT_BLUE }}>
                                        <span className="text-white text-sm">📍</span>
                                    </div>
                                    <div>
                                        <p className="text-zinc-300 font-semibold">Southern New Brunswick</p>
                                        <p className="text-zinc-400 text-sm">Serving all of Southern NB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Boss Quarters Password Modal */}
            {showBossQuarters && !isAuthenticated && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700 max-w-md w-full mx-4 shadow-2xl">
                        <h2 className="text-2xl font-bold text-zinc-50 mb-6 text-center">🔐 BOSS QUARTERS ACCESS</h2>
                        <form onSubmit={handlePasswordSubmit} className="space-y-4">
                            <input
                                type="password"
                                placeholder="Enter password..."
                                value={passwordAttempt}
                                onChange={(e) => setPasswordAttempt(e.target.value)}
                                className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded text-zinc-100 placeholder-zinc-400"
                                autoFocus
                            />
                            <div className="flex gap-4">
                                <button
                                    type="submit"
                                    className="flex-1 text-white py-3 rounded font-bold transition-colors hover:opacity-90"
                                    style={{ backgroundColor: ACCENT_BLUE }}
                                >
                                    ACCESS
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowBossQuarters(false);
                                        setPasswordAttempt('');
                                    }}
                                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded font-bold transition-colors"
                                >
                                    CANCEL
                                </button>
                            </div>
                        </form>
                        <p className="text-zinc-400 text-sm text-center mt-4">
                            Access restricted to authorized personnel only.
                        </p>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="bg-zinc-900 border-t border-zinc-700 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Image
                            src="/assets/paulslogo-official.png"
                            alt="Paul's Roofing Logo"
                            width={180}
                            height={48}
                            className="h-12 w-auto mx-auto mb-4"
                        />
                        <p className="text-zinc-400 mb-4">Southern New Brunswick's Premier Metal Roofing Specialist</p>
                        <p className="text-zinc-500 text-sm">
                            © 2025 Paul's Roofing. All rights reserved. | Licensed & Insured
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
