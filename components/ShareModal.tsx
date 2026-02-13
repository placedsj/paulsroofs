import React, { useState } from 'react';

interface ShareModalProps {
    onClose: () => void;
    url: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ onClose, url }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed inset-0 z-[300] bg-[#020617]/80 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in duration-300">
            <div className="bg-slate-900 border border-white/10 p-10 rounded-[3rem] max-w-lg w-full shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-red-600" />
                <button onClick={onClose} className="absolute top-6 right-8 text-slate-500 hover:text-white transition-colors text-2xl">×</button>

                <div className="text-center mb-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-4 block">Share Your Build</span>
                    <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Go Viral.</h2>
                    <p className="text-white/40 text-sm mt-4 font-medium">Send this design to a partner, contractor, or save it for later.</p>
                </div>

                <div className="flex flex-col items-center gap-8">
                    <div className="bg-white p-4 rounded-3xl shadow-xl">
                        <img
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`}
                            alt="Design QR Code"
                            className="w-48 h-48 mix-blend-multiply opacity-90"
                        />
                    </div>

                    <div className="w-full bg-black/30 p-2 pl-6 rounded-full border border-white/10 flex items-center justify-between group focus-within:border-orange-500/50 transition-colors">
                        <span className="text-xs text-slate-400 font-mono truncate mr-4 max-w-[200px]">{url}</span>
                        <button
                            onClick={handleCopy}
                            className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${copied ? 'bg-green-500 text-white' : 'bg-white text-slate-900 hover:bg-orange-500 hover:text-white'}`}
                        >
                            {copied ? 'Copied!' : 'Copy Link'}
                        </button>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <p className="text-[9px] text-slate-600 uppercase tracking-widest font-bold">
                        Scan with any smartphone to open this exact configuration.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;
