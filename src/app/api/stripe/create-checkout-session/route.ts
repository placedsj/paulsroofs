import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-09-30.clover',
});

export async function POST(request: NextRequest) {
  try {
    const { amount, projectDetails } = await request.json();

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'cad',
            product_data: {
              name: `Paul's Roofing - ${projectDetails?.projectDescription || 'Roofing Project'}`,
              description: `Project for ${projectDetails?.customerName || 'Customer'}`,
              images: ['https://i.postimg.cc/9QydCVGQ/paulstransparent-1.png'],
            },
            unit_amount: Math.round(amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.nextUrl.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/payment/cancelled`,
      customer_email: projectDetails?.customerEmail,
      metadata: {
        project_id: projectDetails?.projectId || '',
        customer_name: projectDetails?.customerName || '',
        project_description: projectDetails?.projectDescription || '',
      },
    });

    return NextResponse.json({ 
      id: session.id,
      url: session.url 
    });

  } catch (error) {
    console.error('Stripe session creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment session' },
      { status: 500 }
    );
  }
}