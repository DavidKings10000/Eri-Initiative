export const ERI_INBOX = 'eriinitiative@gmail.com';

export const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

export function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL);
}

type SendEmailInput = {
  subject: string;
  text: string;
  replyTo?: string;
};

/** Sends a plain-text email to the ERI inbox through Resend. Returns true on success. */
export async function sendToEriInbox({ subject, text, replyTo }: SendEmailInput) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL,
      to: [ERI_INBOX],
      reply_to: replyTo,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    console.error(`Resend email failed (${subject}):`, await response.text());
  }

  return response.ok;
}
