import React, { useEffect, useState } from 'react';

export default function PaymentSuccessPage({ onHome }: { onHome: () => void }) {
    const [sessionId, setSessionId] = useState<string | null>(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setSessionId(params.get('session_id'));
    }, []);

    return (
        <div className="min-h-screen bg-zinc-900 pt-20">
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <div onClick={onHome} className="cursor-pointer mb-6 inline-block">
                        <span className="text-4xl font-black italic text-white tracking-tighter">PAUL'S <span className="text-orange-500">ROOFING</span></span>
                    </div>
                    <h1 className="text-4xl font-bold text-zinc-50 mb-4">
                        🎉 Payment Successful!
                    </h1>
                    <p className="text-xl text-zinc-300">
                        Thank you for choosing Paul's Roofing!
                    </p>
                </div>

                {/* Success Content */}
                <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 mb-8">
                    <div className="text-center space-y-6">

                        {/* Check Icon */}
                        <div className="mx-auto w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-900/50">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-zinc-50">
                                Your payment has been processed successfully!
                            </h2>

                            {sessionId && (
                                <div className="bg-zinc-900 p-4 rounded border border-zinc-600 inline-block">
                                    <p className="text-zinc-300 text-sm font-mono">
                                        <strong>Payment ID:</strong> {sessionId}
                                    </p>
                                </div>
                            )}

                            <div className="text-zinc-300 space-y-2">
                                <p>✓ Payment confirmation email will be sent to you shortly</p>
                                <p>✓ Our team will contact you within 24 hours to schedule your project</p>
                                <p>✓ You can track your project progress in our customer portal</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="bg-blue-900/30 border border-blue-600/50 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">🚀 What Happens Next?</h3>
                    <div className="text-blue-200 space-y-3">
                        <div className="flex items-start gap-3">
                            <span className="font-bold">1.</span>
                            <span>We'll send you a detailed project timeline and contact information for your project manager</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="font-bold">2.</span>
                            <span>Our team will schedule a pre-project site visit to finalize all details</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="font-bold">3.</span>
                            <span>We'll order your materials and schedule the installation based on weather conditions</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="font-bold">4.</span>
                            <span>Installation day arrives - we'll leave your property cleaner than we found it!</span>
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-zinc-50 mb-4">📞 Questions? We're Here to Help</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-zinc-300 mb-2">
                                <strong>Call or Text:</strong>
                            </p>
                            <a
                                href="tel:+15062714162"
                                className="text-white font-bold text-lg hover:text-blue-400 transition-colors"
                            >
                                Call Paul
                            </a>
                        </div>
                        <div>
                            <p className="text-zinc-300 mb-2">
                                <strong>Email:</strong>
                            </p>
                            <a
                                href="mailto:paul@paulroofs.com"
                                className="text-white font-bold hover:text-blue-400 transition-colors"
                            >
                                paul@paulroofs.com
                            </a>
                        </div>
                    </div>
                    <p className="text-zinc-400 text-sm mt-4">
                        Hours: Monday - Saturday, 8am - 6pm
                    </p>
                </div>

                {/* Return Home */}
                <div className="text-center mt-8">
                    <button
                        onClick={onHome}
                        className="bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Return to Homepage
                    </button>
                </div>
            </div>
        </div>
    );
}
