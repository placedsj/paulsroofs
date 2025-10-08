import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { contactSubmissions } from '@/lib/schema';
import { sendEmail } from '@/utils/replitmail';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, address, timeframe, preferredContact, message } = body;

    // Validate required fields
    if (!name || !email || !address || !timeframe || !preferredContact || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Save to database
    const [submission] = await db.insert(contactSubmissions).values({
      name,
      email,
      phone: phone || null,
      address,
      timeframe,
      preferredContact,
      message,
    }).returning();

    // Send email notification to Paul
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1E54A3;">New Quote Request from Paul's Roofing Website</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Property Address:</strong> ${address}</p>
          <p><strong>Timeframe:</strong> ${timeframe}</p>
          <p><strong>Preferred Contact Method:</strong> ${preferredContact}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="color: #666; font-size: 12px;">Submission ID: ${submission.id} | Received: ${new Date().toLocaleString()}</p>
      </div>
    `;

    const emailText = `
New Quote Request from Paul's Roofing Website

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Property Address: ${address}
Timeframe: ${timeframe}
Preferred Contact Method: ${preferredContact}

Message:
${message}

---
Submission ID: ${submission.id}
Received: ${new Date().toLocaleString()}
    `;

    await sendEmail({
      to: 'paul@paulroofs.com',
      subject: `New Quote Request from ${name}`,
      html: emailHtml,
      text: emailText,
    });

    return NextResponse.json({
      success: true,
      message: 'Your request has been submitted successfully!',
      submissionId: submission.id,
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit request. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
