import React, { useState } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

const BossQuartersWithBoundary = () => (
    <ErrorBoundary>
        <StaffDashboard />
    </ErrorBoundary>
);

const StaffDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [dataLoadError, setDataLoadError] = useState(true); // Default to true to show demo banner

    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-orange-500/30">
            {/* Header */}
            <header className="bg-slate-900/50 border-b border-white/5 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center font-black text-white text-xl shadow-lg ring-1 ring-white/10">B</div>
                        <span className="text-lg font-black tracking-widest uppercase text-white">Boss<span className="text-orange-500">Quarters</span></span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-slate-400 border border-white/5">Guest Mode</span>
                        <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full border border-white/10" />
                    </div>
                </div>
            </header>

            {/* Error Banner (Simulated) */}
            {dataLoadError && (
                <div className="bg-yellow-500/10 border-b border-yellow-500/20 px-6 py-3">
                    <div className="max-w-7xl mx-auto flex items-center gap-3 text-yellow-500 text-sm font-medium">
                        <span>⚠️</span>
                        Unable to load live data (Firebase not configured). Showing demo content.
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-6 mb-6 border-b border-white/5 no-scrollbar">
                    {['Dashboard', 'Staff', 'Projects', 'Financing', 'Schedule'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab.toLowerCase())}
                            className={`px-6 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all whitespace-nowrap
                                ${activeTab === tab.toLowerCase()
                                    ? 'bg-white text-slate-900 shadow-xl scale-105'
                                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Dashboard Tab Content */}
                {activeTab === 'dashboard' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-slate-800/50 p-6 rounded-3xl border border-white/5">
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Active Leads</h3>
                            <div className="text-4xl font-black text-white mb-2">12</div>
                            <div className="text-green-500 text-xs font-bold uppercase tracking-wide">↑ 4 New Today</div>
                        </div>
                        <div className="bg-slate-800/50 p-6 rounded-3xl border border-white/5">
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Pipeline Value</h3>
                            <div className="text-4xl font-black text-white mb-2">$84.5k</div>
                            <div className="text-slate-500 text-xs font-bold uppercase tracking-wide">Avg $7k / deal</div>
                        </div>
                        <div className="bg-slate-800/50 p-6 rounded-3xl border border-white/5">
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Pending Approvals</h3>
                            <div className="text-4xl font-black text-white mb-2">3</div>
                            <div className="text-orange-500 text-xs font-bold uppercase tracking-wide">Action Required</div>
                        </div>
                        <div className="bg-slate-800/50 p-6 rounded-3xl border border-white/5 bg-gradient-to-br from-blue-900/20 to-slate-800/50">
                            <h3 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-4">FinanceIt Applications</h3>
                            <div className="text-4xl font-black text-white mb-2">5</div>
                            <div className="text-blue-400 text-xs font-bold uppercase tracking-wide">2 Approved Today</div>
                        </div>
                    </div>
                )}

                {/* Financing Tab Content */}
                {activeTab === 'financing' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-green-500/10 border border-green-500/20 p-8 rounded-[2rem] flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-black text-green-400 mb-2">FinanceIt Integration Active</h3>
                                <p className="text-green-200/60 font-medium">Merchant ID: 8829-1102-ACTIVE</p>
                            </div>
                            <button className="bg-green-500 text-slate-900 px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-green-400 transition-colors shadow-lg shadow-green-900/20">Launch Portal</button>
                        </div>

                        <div className="bg-slate-800/50 rounded-3xl border border-white/5 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-white/5 text-xs uppercase font-black tracking-widest text-slate-500">
                                    <tr>
                                        <th className="p-6">Applicant</th>
                                        <th className="p-6">Amount</th>
                                        <th className="p-6">Term</th>
                                        <th className="p-6">Status</th>
                                        <th className="p-6 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm font-medium text-slate-300">
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="p-6 text-white font-bold">John Doe</td>
                                        <td className="p-6">$12,500</td>
                                        <td className="p-6">60 Mo</td>
                                        <td className="p-6"><span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase">Approved</span></td>
                                        <td className="p-6 text-right"><button className="text-white hover:text-orange-500 font-bold">View</button></td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="p-6 text-white font-bold">Sarah Smith</td>
                                        <td className="p-6">$8,200</td>
                                        <td className="p-6">36 Mo</td>
                                        <td className="p-6"><span className="bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full text-xs font-bold uppercase">Pending</span></td>
                                        <td className="p-6 text-right"><button className="text-white hover:text-orange-500 font-bold">View</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Empty State for other tabs */}
                {(activeTab !== 'dashboard' && activeTab !== 'financing') && (
                    <div className="text-center py-20 text-slate-500">
                        <span className="text-4xl block mb-4 opacity-50">🚧</span>
                        <p className="font-bold uppercase tracking-widest text-xs">Module Under Construction</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default BossQuartersWithBoundary;
