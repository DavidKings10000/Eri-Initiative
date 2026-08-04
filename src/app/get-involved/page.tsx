'use client';

import Link from 'next/link';
import { useState } from 'react';

import { useLanguage } from '@/context/LanguageProvider';

export default function GetInvolvedPage() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<string | null>(null);

  async function startDonation() {
    setStatus('Preparing your donation checkout...');
    const response = await fetch('/api/donate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 2500 }),
    });
    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      setStatus('Checkout could not be started right now.');
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">{t('get_involved')}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">{t('get_in_touch')}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">{t('contact_description')}</p>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-navy">{t('donate')}</h2>
          <p className="mt-3 text-slate-600">{t('donation_description')}</p>
          <button onClick={startDonation} className="mt-5 inline-flex rounded-full bg-navy px-5 py-3 font-semibold text-white">
            {t('start_donation')}
          </button>
          {status ? <p className="mt-3 text-sm text-slate-600">{status}</p> : null}
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-navy">{t('volunteer')}</h2>
          <p className="mt-3 text-slate-600">{t('volunteer_text')}</p>
          <Link href="/contact" className="mt-5 inline-flex rounded-full bg-olive px-5 py-3 font-semibold text-white">{t('sign_up')}</Link>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-navy">{t('partner_with_us')}</h2>
          <p className="mt-3 text-slate-600">{t('partner_description')}</p>
          <Link href="/partners" className="mt-5 inline-flex rounded-full border border-slate-300 px-5 py-3 font-semibold text-navy">{t('view_partners')}</Link>
        </div>
      </section>
    </main>
  );
}
