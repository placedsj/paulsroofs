"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function PaymentCancelledPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Image
            src="/assets/paulslogo-official.png"
            alt="Paul's Roofing Logo"
            width={240}
            height={72}
            className="h-18 w-auto mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold text-zinc-50 mb-4">
            Payment Cancelled
          </h1>
          <p className="text-xl text-zinc-300">
            No worries - your payment was not processed
          </p>
        </div>

        {/* Cancel Content */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 mb-8">
          <div className="text-center space-y-6">
            
            {/* Info Icon */}
            <div className="mx-auto w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-zinc-50">
                Your payment was cancelled
              </h2>
              
              <div className="text-zinc-300 space-y-2">
                <p>• No charges were made to your payment method</p>
                <p>• Your project quote is still valid</p>
                <p>• We're here to help with any questions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Options */}
        <div className="bg-[#1E54A3] border border-blue-600 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">💡 Other Payment Options</h3>
          <div className="text-blue-100 space-y-3">
            <div className="flex items-start gap-3">
              <span className="font-bold">💳</span>
              <span><strong>Try Again:</strong> Return to payment options and try a different card</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold">🚀</span>
              <span><strong>Financing:</strong> Apply for 0% down financing through FinanceIt</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold">📞</span>
              <span><strong>Phone Payment:</strong> Call us to process payment over the phone</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold">💰</span>
              <span><strong>Other Methods:</strong> We also accept cash, check, or e-transfer</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-zinc-50 mb-4">📞 Need Help? Contact Us</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-zinc-300 mb-2">
                <strong>Call or Text:</strong>
              </p>
              <a 
                href="tel:+15062714162" 
                className="text-white font-bold text-lg hover:text-blue-400 transition-colors"
              >
                (506) 271-4162
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

        {/* Action Buttons */}
        <div className="text-center mt-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.history.back()}
              className="bg-[#1E54A3] hover:bg-[#123865] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Try Payment Again
            </button>
            <Link 
              href="/"
              className="bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}