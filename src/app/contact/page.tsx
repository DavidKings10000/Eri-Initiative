"use client";

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageProvider';

export default function ContactPage() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSubmitting(true);
    const form = event.currentTarget;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const data = await response.json().catch(() => ({}));
      setStatus({ ok: response.ok, message: response.ok ? t('contact_success') : data.error || t('contact_error') });
      if (response.ok) form.reset();
    } catch {
      setStatus({ ok: false, message: t('contact_error') });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">{t('contact')}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">{t('contact_title')}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">{t('contact_description')}</p>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">{t('get_in_touch')}</p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>{t('email')}: <a href="mailto:eriinitiative@gmail.com" className="font-medium text-navy hover:underline">eriinitiative@gmail.com</a></li>
              <li>{t('phone')}: <a href="tel:+254728852274" className="font-medium text-navy hover:underline">+254 728 852 274</a></li>
              <li>{t('location')}: Nairobi, Kenya</li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a href="https://www.instagram.com/eri_initiative?igsh=aHFyYTJqbGRhYTd4" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-navy">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61573327822338" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-navy">Facebook</a>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-navy">{t('send_message_heading')}</h2>
          <form onSubmit={sendMessage} className="mt-6 space-y-4">
            <input name="name" required autoComplete="name" aria-label={t('name_placeholder')} className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder={t('name_placeholder')} />
            <input name="email" type="email" required autoComplete="email" aria-label={t('email_placeholder')} className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder={t('email_placeholder')} />
            <textarea name="message" required maxLength={5000} aria-label={t('message_placeholder')} className="min-h-32 w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder={t('message_placeholder')} />
            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <button type="submit" disabled={isSubmitting} className="rounded-full bg-navy px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60">
              {isSubmitting ? t('sending') : t('submit')}
            </button>
            {status ? (
              <p role="status" className={`text-sm ${status.ok ? 'text-olive' : 'text-red-700'}`}>
                {status.message}
              </p>
            ) : null}
          </form>
        </section>
      </div>
    </main>
  );
}
