import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { contactSubmissions } from '@/lib/schema';
import { sendEmail } from '@/utils/replitmail';

// Facebook Lead Ads webhook endpoint
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Verify Facebook webhook (you'll need to set FACEBOOK_VERIFY_TOKEN in env)
    const mode = new URL(request.url).searchParams.get('hub.mode');
    const token = new URL(request.url).searchParams.get('hub.verify_token');
    const challenge = new URL(request.url).searchParams.get('hub.challenge');
    
    if (mode && token) {
      if (mode === 'subscribe' && token === process.env.FACEBOOK_VERIFY_TOKEN) {
        return new NextResponse(challenge, { status: 200 });
      }
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Process Facebook Lead Ad data
    const entry = body.entry?.[0];
    const changes = entry?.changes?.[0];
    const leadData = changes?.value;

    if (leadData) {
      // Extract lead information
      const leadId = leadData.leadgen_id;
      const formId = leadData.form_id;
      const adId = leadData.ad_id;
      
      // You'll need to fetch the actual lead data using Facebook API
      // For now, we'll create a placeholder entry
      const { db } = getDb();
      const submission = await db.insert(contactSubmissions).values({
        name: 'Facebook Lead', // Will be replaced with actual data
        email: 'facebook@lead.com', // Will be replaced with actual data
        phone: null,
        address: 'Facebook Lead Ad',
        timeframe: 'ASAP',
        preferredContact: 'Facebook',
        message: `Facebook Lead Ad submission - Lead ID: ${leadId}, Form ID: ${formId}, Ad ID: ${adId}`,
      }).returning();

      // Send notification email
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E54A3;">New Facebook Lead Ad Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Lead ID:</strong> ${leadId}</p>
            <p><strong>Form ID:</strong> ${formId}</p>
            <p><strong>Ad ID:</strong> ${adId}</p>
            <p><strong>Submission ID:</strong> ${submission[0].id}</p>
            <p><strong>Received:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p style="color: #666; font-size: 12px;">Check Facebook Business Manager for complete lead details.</p>
        </div>
      `;

      await sendEmail({
        to: 'paul@paulroofs.com',
        subject: `New Facebook Lead - ID: ${leadId}`,
        html: emailHtml,
        text: `New Facebook Lead Ad submission received. Lead ID: ${leadId}. Check Facebook Business Manager for details.`,
      });

      return NextResponse.json({ success: true, submissionId: submission[0].id });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Facebook webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle Facebook webhook verification
export async function GET(request: Request) {
  const url = new URL(request.url);
  const mode = url.searchParams.get('hub.mode');
  const token = url.searchParams.get('hub.verify_token');
  const challenge = url.searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === process.env.FACEBOOK_VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
}