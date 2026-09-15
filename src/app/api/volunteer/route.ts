import { NextResponse } from 'next/server';

const recipient = 'eriinitiative@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fields = {
      fullName: String(body.fullName || '').trim(),
      email: String(body.email || '').trim(),
      phone: String(body.phone || '').trim(),
      location: String(body.location || '').trim(),
      preferredDate: String(body.preferredDate || '').trim(),
      preferredTime: String(body.preferredTime || '').trim(),
      interests: String(body.interests || '').trim(),
      experience: String(body.experience || '').trim(),
      motivation: String(body.motivation || '').trim(),
    };

    if (!fields.fullName || !fields.email || !fields.phone || !fields.location || !fields.preferredDate || !fields.preferredTime || !fields.interests || !fields.motivation) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(fields.email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
      return NextResponse.json({ error: 'Volunteer applications are not configured yet.' }, { status: 503 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL,
        to: [recipient],
        reply_to: fields.email,
        subject: `New ERI volunteer application: ${fields.fullName}`,
        text: [
          `Name: ${fields.fullName}`,
          `Email: ${fields.email}`,
          `Phone: ${fields.phone}`,
          `Location: ${fields.location}`,
          `Preferred date: ${fields.preferredDate}`,
          `Preferred time: ${fields.preferredTime}`,
          `Volunteer interests: ${fields.interests}`,
          `Relevant experience: ${fields.experience || 'Not provided'}`,
          `Why they want to volunteer: ${fields.motivation}`,
        ].join('\n\n'),
      }),
    });

    if (!response.ok) {
      console.error('Resend volunteer email failed:', await response.text());
      return NextResponse.json({ error: 'Unable to send your application right now.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Volunteer application failed:', error);
    return NextResponse.json({ error: 'Unable to send your application right now.' }, { status: 500 });
  }
}