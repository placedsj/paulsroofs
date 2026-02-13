import React, { useState } from 'react';
import { Shield, CreditCard, Lock, Milestone } from 'lucide-react';

interface PaymentOptionsProps {
    invoiceAmount: number;
    projectDetails: any;
}

export const PaymentOptions: React.FC<PaymentOptionsProps> = ({ invoiceAmount, projectDetails }) => {
    const [method, setMethod] = useState<'card' | 'financing'>('card');
    const [loading, setLoading] = useState(false);

    const handlePay = () => {
        setLoading(true);
        // Simulate processing
        setTimeout(() => {
            window.location.href = '/payment-success?session_id=pi_mock_123456789';
        }, 2000);
    };

    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${method === 'card' ? 'border-orange-500 bg-zinc-800' : 'border-zinc-700 bg-zinc-900 opacity-60'}`} onClick={() => setMethod('card')}>
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-600/20 p-3 rounded-full text-blue-400">
                        <CreditCard className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Credit Card</h3>
                        <p className="text-zinc-400 text-sm">Secure Stripe Processing</p>
                    </div>
                </div>
                <div className="h-px bg-white/10 my-4" />
                <div className="text-3xl font-black text-white mb-2">${invoiceAmount.toLocaleString()}</div>
                <p className="text-xs text-zinc-500">Includes all taxes and fees.</p>
            </div>

            <div className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${method === 'financing' ? 'border-orange-500 bg-zinc-800' : 'border-zinc-700 bg-zinc-900 opacity-60'}`} onClick={() => setMethod('financing')}>
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-green-600/20 p-3 rounded-full text-green-400">
                        <Milestone className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Monthly Financing</h3>
                        <p className="text-zinc-400 text-sm">Approvals in 60 seconds</p>
                    </div>
                </div>
                <div className="h-px bg-white/10 my-4" />
                <div className="text-3xl font-black text-white mb-2">$145<span className="text-sm font-medium text-zinc-500">/mo</span></div>
                <p className="text-xs text-zinc-500">Estimated based on 6.99% APR</p>
            </div>

            <div className="md:col-span-2 mt-4">
                <button
                    onClick={handlePay}
                    disabled={loading}
                    className="w-full bg-orange-600 text-white rounded-xl py-4 font-black uppercase tracking-widest hover:bg-orange-500 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                    {loading ? (
                        <>Processing Securely...</>
                    ) : (
                        <>
                            <Lock className="w-4 h-4" />
                            {method === 'card' ? `Pay $${invoiceAmount.toLocaleString()} Now` : 'Start Finance Application'}
                        </>
                    )}
                </button>
                <div className="flex justify-center items-center gap-2 mt-4 text-zinc-500 text-xs">
                    <Shield className="w-3 h-3" />
                    <span>256-bit SSL Encrypted Transaction</span>
                </div>
            </div>
        </div>
    );
};
