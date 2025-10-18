"use client";

import { useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface PaymentOptionsProps {
  invoiceAmount?: number;
  projectDetails?: {
    projectId: string;
    customerName: string;
    customerEmail: string;
    projectDescription: string;
  };
}

export function PaymentOptions({ invoiceAmount = 0, projectDetails }: PaymentOptionsProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'financeit' | null>(null);

  const handleStripePayment = async () => {
    setIsProcessing(true);
    setPaymentMethod('stripe');

    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      // Create checkout session
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: invoiceAmount,
          projectDetails,
        }),
      });

      const session = await response.json();

      if (session.error) {
        throw new Error(session.error);
      }

      // Redirect to Stripe Checkout  
      window.location.href = session.url;
    } catch (error) {
      console.error('Stripe payment error:', error);
      alert('Payment failed. Please try again or contact us directly.');
    } finally {
      setIsProcessing(false);
      setPaymentMethod(null);
    }
  };

  const handleFinanceItApplication = () => {
    setPaymentMethod('financeit');
    
    // FinanceIt integration parameters
    const financeItParams = new URLSearchParams({
      amount: invoiceAmount.toString(),
      merchant_id: process.env.NEXT_PUBLIC_FINANCEIT_MERCHANT_ID || '',
      product_code: 'ROOFING',
      callback_url: `${window.location.origin}/payment/financeit/callback`,
      customer_name: projectDetails?.customerName || '',
      customer_email: projectDetails?.customerEmail || '',
      project_description: projectDetails?.projectDescription || 'Roofing Project',
    });

    // Redirect to FinanceIt application
    window.open(
      `https://apply.financeit.io/merchant-apply?${financeItParams.toString()}`,
      '_blank',
      'width=800,height=600,scrollbars=yes,resizable=yes'
    );
  };

  return (
    <div className="space-y-6">
      {/* Payment Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-zinc-50 mb-2">💳 Payment Options</h2>
        <p className="text-zinc-300 mb-6">
          Choose the payment method that works best for you
        </p>
        {invoiceAmount > 0 && (
          <div className="bg-[#1E54A3] text-white px-6 py-3 rounded-lg inline-block">
            <span className="text-lg font-semibold">Total: ${invoiceAmount.toLocaleString()}</span>
          </div>
        )}
      </div>

      {/* Payment Methods */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Stripe Payment */}
        <Card className="bg-zinc-900 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-zinc-50 flex items-center gap-3">
              <div className="bg-[#635BFF] p-2 rounded">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M13.976 9.15c-2.172-.806-3.596-1.191-3.596-2.705 0-1.278 1.195-2.041 3.196-2.041 2.007 0 4.014.738 5.238 1.814L22 4.416C20.522 3.268 18.407 2.4 15.976 2.4c-4.014 0-6.196 2.105-6.196 5.417 0 3.146 2.532 3.979 5.461 5.043 2.172.806 3.596 1.191 3.596 2.705 0 1.278-1.195 2.041-3.196 2.041-2.007 0-4.014-.738-5.238-1.814L8 17.584c1.478 1.148 3.593 2.016 6.024 2.016 4.014 0 6.196-2.105 6.196-5.417 0-3.146-2.532-3.979-5.461-5.043-.001 0-.001 0-.001 0z"/>
                </svg>
              </div>
              <span>Pay with Credit Card</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-zinc-300 space-y-2">
              <p>✓ Secure payment processing</p>
              <p>✓ All major credit cards accepted</p>
              <p>✓ Instant payment confirmation</p>
              <p>✓ Mobile-friendly checkout</p>
            </div>
            <Button 
              onClick={handleStripePayment}
              disabled={isProcessing && paymentMethod === 'stripe'}
              className="w-full bg-[#635BFF] hover:bg-[#5a52e8] text-white font-semibold py-3"
            >
              {isProcessing && paymentMethod === 'stripe' ? (
                <>Processing...</>
              ) : (
                <>Pay Now with Stripe 💳</>
              )}
            </Button>
            <p className="text-xs text-zinc-500 text-center">
              Powered by Stripe - Industry leading security
            </p>
          </CardContent>
        </Card>

        {/* FinanceIt */}
        <Card className="bg-zinc-900 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-zinc-50 flex items-center gap-3">
              <div className="bg-[#00A651] p-2 rounded">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span>Financing Available</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-zinc-300 space-y-2">
              <p>✓ $0 down payment options</p>
              <p>✓ Competitive interest rates</p>
              <p>✓ Quick online application</p>
              <p>✓ Flexible payment terms</p>
            </div>
            <Button 
              onClick={handleFinanceItApplication}
              disabled={isProcessing && paymentMethod === 'financeit'}
              className="w-full bg-[#00A651] hover:bg-[#009944] text-white font-semibold py-3"
            >
              {isProcessing && paymentMethod === 'financeit' ? (
                <>Opening Application...</>
              ) : (
                <>Apply for Financing 🚀</>
              )}
            </Button>
            <p className="text-xs text-zinc-500 text-center">
              Powered by FinanceIt - Home improvement financing specialists
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Additional Info */}
      <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
        <h3 className="text-zinc-50 font-semibold mb-3">📞 Need Help?</h3>
        <div className="text-zinc-300 space-y-2">
          <p>Our team is here to help you choose the best payment option for your project.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a 
              href="tel:+15062714162" 
              className="bg-[#1E54A3] hover:bg-[#123865] text-white px-6 py-2 rounded-lg text-center font-semibold transition-colors"
            >
              Call (506) 271-4162
            </a>
            <a 
              href="mailto:paul@paulroofs.com" 
              className="bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-2 rounded-lg text-center font-semibold transition-colors"
            >
              Email paul@paulroofs.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}