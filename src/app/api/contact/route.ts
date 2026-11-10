import { NextResponse } from 'next/server';
import { EMAIL_PATTERN, isEmailConfigured, sendToEriInbox } from '@/lib/email';

const MAX_MESSAGE_LENGTH = 5000;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fields = {
      name: String(body.name || '').trim(),
      email: String(body.email || '').trim(),
      message: String(body.message || '').trim(),
      // Honeypot: real visitors never see or fill this field.
      website: String(body.website || '').trim(),
    };

    if (fields.website) {
      return NextResponse.json({ success: true });
    }

    if (!fields.name || !fields.email || !fields.message) {
      return NextResponse.json({ error: 'Please complete all fields.' }, { status: 400 });
    }

    if (!EMAIL_PATTERN.test(fields.email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (fields.message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ error: `Please keep your message under ${MAX_MESSAGE_LENGTH} characters.` }, { status: 400 });
    }

    if (!isEmailConfigured()) {
      return NextResponse.json({ error: 'The contact form is not configured yet. Please email eriinitiative@gmail.com.' }, { status: 503 });
    }

    const sent = await sendToEriInbox({
      replyTo: fields.email,
      subject: `New ERI website message from ${fields.name}`,
      text: [`Name: ${fields.name}`, `Email: ${fields.email}`, `Message:\n${fields.message}`].join('\n\n'),
    });

    if (!sent) {
      return NextResponse.json({ error: 'Unable to send your message right now.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact message failed:', error);
    return NextResponse.json({ error: 'Unable to send your message right now.' }, { status: 500 });
  }
}
