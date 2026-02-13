import React, { useState } from 'react';

const ACCENT_BLUE = '#1E54A3';

export default function ExteriorInspectionPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        inspectionDate: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', address: '', inspectionDate: '', message: '' });
        }, 1500);
    };

    return (
        <div className="bg-zinc-900 min-h-screen flex flex-col pt-20">

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative bg-cover bg-center py-32 bg-slate-800">
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative max-w-4xl mx-auto text-center px-4">
                        <h1 className="text-6xl font-extrabold text-zinc-50 mb-4 tracking-tight">PROFESSIONAL EXTERIOR INSPECTION</h1>
                        <p className="text-xl text-zinc-200 mb-8">Comprehensive assessment of your roof, siding, and gutters — zero obligation.</p>
                        <a href="#schedule" className="inline-block px-10 py-4 text-lg font-bold rounded-lg transition-colors duration-300 shadow-xl bg-orange-600 text-white hover:bg-orange-700">
                            SCHEDULE AERIAL INSPECTION & HEAT LOSS AUDIT
                        </a>
                    </div>
                </div>

                {/* Paul's Roofing Advantage Section */}
                <section className="py-16 bg-zinc-800 border-b border-zinc-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold text-zinc-50 mb-10">THE PAUL'S ROOFING ADVANTAGE</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            <div className="p-6 bg-zinc-900 rounded-lg shadow-xl border border-zinc-700">
                                <span className="text-5xl mb-3 inline-block" style={{ color: ACCENT_BLUE }}>🛰️</span>
                                <h3 className="text-2xl font-semibold text-zinc-50 mb-3">Drone & Thermal Tech</h3>
                                <p className="text-zinc-400">We utilize <strong>aerial imaging</strong> and specialized <strong>thermal cameras</strong> to identify hidden structural issues and costly heat loss invisible from the ground.</p>
                            </div>

                            <div className="p-6 bg-zinc-900 rounded-lg shadow-xl border border-zinc-700">
                                <span className="text-5xl mb-3 inline-block" style={{ color: ACCENT_BLUE }}>❄️</span>
                                <h3 className="text-2xl font-semibold text-zinc-50 mb-3">Targeted for NB Climate</h3>
                                <p className="text-zinc-400">Our inspection checklist is customized for <strong>ice dam prevention</strong>, high winds, and freeze-thaw cycles common to Saint John and Quispamsis.</p>
                            </div>

                            <div className="p-6 bg-zinc-900 rounded-lg shadow-xl border border-zinc-700">
                                <span className="text-5xl mb-3 inline-block" style={{ color: ACCENT_BLUE }}>✅</span>
                                <h3 className="text-2xl font-semibold text-zinc-50 mb-3">No-Pressure Assessment</h3>
                                <p className="text-zinc-400">The inspection is zero-obligation. We give you a factual report so you can prioritize repairs or schedule a long-term solution on your terms.</p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Thorough Assessment Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-zinc-50 mb-10 text-center">A THOROUGH 360-DEGREE EXTERIOR ASSESSMENT</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                            <div className="p-6 bg-zinc-800 rounded-lg shadow-xl border border-zinc-700">
                                <h3 className="text-3xl font-bold mb-4 text-orange-600">ROOF INTEGRITY</h3>
                                <ul className="list-none space-y-3 text-lg text-white/80">
                                    <li className="flex items-start">
                                        <span className="text-xl mr-3 text-green-400">✓</span>
                                        <span><strong>Material Condition Check:</strong> Granule loss (asphalt), panel rust/denting (metal), fastener integrity.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-3 text-green-400">✓</span>
                                        <span><strong>Flashing & Penetration Seal:</strong> Examination of all seals around vents, chimneys, and skylights (primary leak points).</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-3 text-green-400">✓</span>
                                        <span><strong>Thermal Heat Loss Audit:</strong> Drone scan to pinpoint areas of poor insulation or ventilation.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-3 text-green-400">✓</span>
                                        <span><strong>Attic Ventilation Assessment:</strong> Verification of sufficient intake (soffit) and exhaust (ridge) airflow.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-3 text-green-400">✓</span>
                                        <span><strong>Age & Lifespan Estimate:</strong> Projected remaining years of service and cost-effective repair recommendations.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 bg-zinc-800 rounded-lg shadow-xl border border-zinc-700">
                                <h3 className="text-3xl font-bold mb-4 text-orange-600">SIDING & TRIM REVIEW</h3>
                                <ul className="list-none space-y-3 text-lg text-white/80">
                                    <li className="flex items-start">
                                        <span className="text-xl mr-3 text-green-400">✓</span>
                                        <span><strong>Moisture Detection:</strong> Visual and thermal inspection for water intrusion behind siding and fascia.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-3 text-green-400">✓</span>
                                        <span><strong>Trim & Soffit Health:</strong> Checking for wood rot, warping, or holes that allow pests into the attic space.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-3 text-green-400">✓</span>
                                        <span><strong>Panel/Lap Assessment:</strong> Checking vinyl, wood, or aluminum siding for cracks, missing pieces, or structural integrity issues.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-3 text-green-400">✓</span>
                                        <span><strong>Weep Hole Clearance:</strong> Ensuring drainage paths for moisture are clear and functioning correctly.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-3 text-green-400">✓</span>
                                        <span><strong>Window/Door Flashing Check:</strong> Assessing seals around exterior openings for potential leak pathways.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 bg-zinc-800 rounded-lg shadow-xl border border-zinc-700">
                                <h3 className="text-3xl font-bold mb-4 text-orange-600">GUTTER & DRAINAGE SYSTEM</h3>
                                <ul className="list-none space-y-3 text-lg text-white/80">
                                    <li className="flex items-start">
                                        <span className="text-xl mr-3 text-green-400">✓</span>
                                        <span><strong>Flow & Drainage Test:</strong> Assessment of current pitch to ensure water is moving efficiently away from the home.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-3 text-green-400">✓</span>
                                        <span><strong>Blockage Identification:</strong> Visual and debris check to prevent winter ice damming from clogs.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-3 text-green-400">✓</span>
                                        <span><strong>Attachment Security Check:</strong> Inspecting all hangers and brackets for rust, separation, or strain.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-3 text-green-400">✓</span>
                                        <span><strong>Downspout Clearance:</strong> Ensuring downspouts are properly angled to discharge water away from the foundation.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-3 text-green-400">✓</span>
                                        <span><strong>Immediate Repair Summary:</strong> A list of small, actionable repairs that prevent future major damage.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What You Receive Section */}
                <section className="py-16 bg-zinc-800 border-t border-zinc-700">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-zinc-50 mb-10 text-center">WHAT YOU RECEIVE: YOUR DETAILED REPORT</h2>
                        <p className="text-lg text-zinc-400 mb-8 text-center">Our comprehensive inspection culminates in a detailed, prioritized report—your guide to protecting your home and managing your budget.</p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-zinc-700">
                                    <tr>
                                        <th className="p-4 text-zinc-50 font-bold uppercase tracking-wider w-1/3">Report Section</th>
                                        <th className="p-4 text-zinc-50 font-bold uppercase tracking-wider w-2/3">What it Provides</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-zinc-700 hover:bg-zinc-700/50 transition-colors">
                                        <td className="p-4 font-semibold text-zinc-300">Thermal & Visual Images</td>
                                        <td className="p-4 text-zinc-400">High-resolution drone photos and infrared images highlighting problem areas (like missing insulation or water intrusion).</td>
                                    </tr>
                                    <tr className="border-b border-zinc-700 hover:bg-zinc-700/50 transition-colors">
                                        <td className="p-4 font-semibold text-zinc-300">Priority & Risk Assessment</td>
                                        <td className="p-4 text-zinc-400">Problems categorized as <strong>Immediate Danger</strong> (must fix now), <strong>Medium Risk</strong> (plan for next 12 months), and <strong>Future Monitoring</strong> (track over time).</td>
                                    </tr>
                                    <tr className="border-b border-zinc-700 hover:bg-zinc-700/50 transition-colors">
                                        <td className="p-4 font-semibold text-zinc-300">Formal Repair Estimate</td>
                                        <td className="p-4 text-zinc-400">Transparent, written pricing for any necessary repairs or a quote for a full metal roof replacement, if recommended.</td>
                                    </tr>
                                    <tr className="border-b border-zinc-700 hover:bg-zinc-700/50 transition-colors">
                                        <td className="p-4 font-semibold text-zinc-300">Warranty Verification</td>
                                        <td className="p-4 text-zinc-400">If applicable, a status check on your current roof warranty and steps to ensure your coverage remains valid.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Schedule Inspection Section */}
                <section id="schedule" className="py-16 bg-zinc-900">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-center text-zinc-50 mb-8">
                            SCHEDULE YOUR PROFESSIONAL INSPECTION
                        </h2>
                        <p className="text-center text-zinc-400 mb-12">
                            Get a comprehensive, drone-assisted assessment with thermal heat loss detection. We'll provide you with a detailed, prioritized report and transparent pricing.
                        </p>

                        {status === 'success' && (
                            <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg">
                                <p className="text-green-400 font-semibold text-center">
                                    ✓ Professional inspection request submitted! We'll contact you within 24 hours to schedule.
                                </p>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg">
                                <p className="text-red-400 font-semibold text-center">
                                    ✗ There was an error submitting your request. Please call us directly at (506) 271-4162.
                                </p>
                            </div>
                        )}

                        <div className="bg-zinc-800 p-8 rounded-xl border-2 border-orange-500 shadow-2xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <label className="block">
                                        <span className="text-zinc-300 font-medium">Your Full Name (Required)</span>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="mt-1 block w-full bg-zinc-700 border-zinc-600 rounded-lg p-3 text-zinc-50 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="text-zinc-300 font-medium">Email Address (Required)</span>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="mt-1 block w-full bg-zinc-700 border-zinc-600 rounded-lg p-3 text-zinc-50 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                                        />
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <label className="block">
                                        <span className="text-zinc-300 font-medium">Phone Number (Required)</span>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            required
                                            className="mt-1 block w-full bg-zinc-700 border-zinc-600 rounded-lg p-3 text-zinc-50 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="text-zinc-300 font-medium">Property Address (Required)</span>
                                        <input
                                            type="text"
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            required
                                            className="mt-1 block w-full bg-zinc-700 border-zinc-600 rounded-lg p-3 text-zinc-50 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                                            placeholder="Saint John, Quispamsis, etc."
                                        />
                                    </label>
                                </div>

                                <label className="block">
                                    <span className="text-zinc-300 font-medium">Preferred Inspection Date</span>
                                    <input
                                        type="date"
                                        value={formData.inspectionDate}
                                        onChange={(e) => setFormData({ ...formData, inspectionDate: e.target.value })}
                                        required
                                        className="mt-1 block w-full bg-zinc-700 border-zinc-600 rounded-lg p-3 text-zinc-50 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                                    />
                                </label>

                                <label className="block">
                                    <span className="text-zinc-300 font-medium">Specific Concerns or Areas to Focus On (Optional)</span>
                                    <textarea
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="mt-1 block w-full bg-zinc-700 border-zinc-600 rounded-lg p-3 text-zinc-50 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                                        placeholder="Tell us about any visible damage, leaks, or areas of concern."
                                    />
                                </label>

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full px-8 py-4 text-xl font-bold rounded-lg transition-all duration-300 shadow-lg transform hover:scale-[1.01] disabled:opacity-50"
                                    style={{ backgroundColor: ACCENT_BLUE }}
                                >
                                    {status === 'submitting' ? 'SCHEDULING INSPECTION...' : 'SCHEDULE FREE PROFESSIONAL INSPECTION'}
                                </button>

                                <p className="text-xs text-zinc-500 text-center mt-3">
                                    All information is kept confidential. Licensed and Insured for Southern New Brunswick.
                                </p>
                            </form>
                        </div>

                        {/* Contact Alternative */}
                        <div className="text-center mt-12">
                            <p className="text-zinc-400 mb-4">Prefer to speak directly with Paul?</p>
                            <a
                                href="tel:+15062714162"
                                className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
                            >
                                📞 Call (506) 271-4162
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
