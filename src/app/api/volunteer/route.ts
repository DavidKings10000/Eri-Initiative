import { NextResponse } from 'next/server';
import { EMAIL_PATTERN, isEmailConfigured, sendToEriInbox } from '@/lib/email';

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

    if (!EMAIL_PATTERN.test(fields.email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (!isEmailConfigured()) {
      return NextResponse.json({ error: 'Volunteer applications are not configured yet.' }, { status: 503 });
    }

    const sent = await sendToEriInbox({
      replyTo: fields.email,
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
    });

    if (!sent) {
      return NextResponse.json({ error: 'Unable to send your application right now.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Volunteer application failed:', error);
    return NextResponse.json({ error: 'Unable to send your application right now.' }, { status: 500 });
  }
}