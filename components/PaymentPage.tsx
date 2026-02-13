import React from 'react';
import { PaymentOptions } from './PaymentOptions';

export default function PaymentPage({ onHome }: { onHome: () => void }) {
    const paymentsEnabled = true;
    // In a real app, this would come from URL params or database
    const sampleProject = {
        projectId: "PAULS-2025-001",
        customerName: "Customer Name",
        customerEmail: "customer@example.com",
        projectDescription: "Metal Roofing Installation"
    };

    return (
        <div className="min-h-screen bg-zinc-900 pt-20">
            {/* Header */}
            <div className="bg-zinc-800 border-b border-zinc-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
                    <div onClick={onHome} className="cursor-pointer h-16 flex items-center hover:opacity-80 transition-opacity">
                        <span className="text-2xl font-black italic text-white tracking-tighter">PAUL'S <span className="text-orange-500">ROOFING</span></span>
                    </div>
                    <div className="text-right">
                        <button onClick={onHome} className="text-zinc-400 hover:text-orange-500 transition-colors font-medium">
                            ← Back to Home
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-4 py-12">

                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-4">
                        Secure Payment Portal
                    </h1>
                    <p className="text-xl text-zinc-300">
                        Choose your preferred payment method to complete your roofing project
                    </p>
                </div>

                {/* Project Summary (Optional) */}
                <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold text-zinc-50 mb-4">📋 Project Summary</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-zinc-300">
                                <strong>Project:</strong> {sampleProject.projectDescription}
                            </p>
                            <p className="text-zinc-300">
                                <strong>Customer:</strong> {sampleProject.customerName}
                            </p>
                        </div>
                        <div>
                            <p className="text-zinc-300">
                                <strong>Project ID:</strong> {sampleProject.projectId}
                            </p>
                            <p className="text-zinc-300">
                                <strong>Status:</strong> <span className="text-green-400 font-bold">Ready for Payment</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Payment Options Component */}
                {paymentsEnabled ? (
                    <PaymentOptions
                        invoiceAmount={15500} // Example amount
                        projectDetails={sampleProject}
                    />
                ) : (
                    <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold text-zinc-50 mb-2">💳 Online Payments Unavailable</h3>
                        <p className="text-zinc-300">Payments and financing will be available soon.</p>
                        <p className="text-zinc-400 mt-2">In the meantime, please contact Paul to arrange payment.</p>
                        <div className="flex gap-4 justify-center mt-4">
                            <a href="tel:+15062714162" className="bg-[#1E54A3] hover:bg-[#123865] text-white px-6 py-2 rounded-lg font-semibold transition-colors">Call Paul</a>
                        </div>
                    </div>
                )}

                {/* Trust Signals */}
                <div className="mt-12 text-center">
                    <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-zinc-50 mb-4">🔒 Your Payment is Secure</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-zinc-300">
                            <div>
                                <strong className="text-zinc-50">SSL Encrypted</strong>
                                <p className="text-sm">Your payment information is protected with bank-level security</p>
                            </div>
                            <div>
                                <strong className="text-zinc-50">Licensed & Insured</strong>
                                <p className="text-sm">Paul's Roofing is fully licensed and insured in New Brunswick</p>
                            </div>
                            <div>
                                <strong className="text-zinc-50">35+ Years Experience</strong>
                                <p className="text-sm">Trusted by over 1000+ New Brunswick homeowners</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
