'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

import { useLanguage } from '@/context/LanguageProvider';

const presetAmounts = [1000, 2500, 5000, 10000];
const currencyCode = 'KES';

export default function GetInvolvedPage() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<string | null>(null);
  const [queryStatus, setQueryStatus] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const donationAmount = useMemo(() => {
    if (customAmount.trim() !== '') {
      const parsed = Number(customAmount);
      return Number.isFinite(parsed) ? Math.max(100, Math.round(parsed)) : 0;
    }
    return selectedAmount;
  }, [customAmount, selectedAmount]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    setQueryStatus(params.get('status'));
  }, []);

  const statusMessage =
    queryStatus === 'success'
      ? t('donation_success')
      : queryStatus === 'cancelled'
        ? t('donation_cancelled')
        : queryStatus === 'mock'
          ? t('donation_demo')
          : status;

  async function startDonation() {
    setStatus(t('preparing_donation'));
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: donationAmount }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setStatus(t('donation_failed'));
      }
    } catch {
      setStatus(t('donation_failed'));
    } finally {
      setIsSubmitting(false);
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
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2">
          <h2 className="text-xl font-semibold text-navy">{t('donate')}</h2>
          <p className="mt-3 text-slate-600">{t('donation_description')}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {presetAmounts.map((amount) => {
              const isActive = donationAmount === amount && customAmount.trim() === '';

              return (
                <button
                  key={amount}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                    isActive
                      ? 'border-navy bg-navy text-white shadow-sm'
                      : 'border-slate-200 bg-slate-50 text-navy hover:border-slate-300'
                  }`}
                >
                  KES {amount}
                </button>
              );
            })}
          </div>

          <div className="mt-6">
            <label htmlFor="custom-amount" className="mb-2 block text-sm font-medium text-slate-700">
              {t('custom_amount')}
            </label>
            <input
              id="custom-amount"
              type="number"
              min="100"
              step="100"
              value={customAmount}
              onChange={(event) => {
                setCustomAmount(event.target.value);
                if (event.target.value.trim() !== '') {
                  setSelectedAmount(0);
                }
              }}
              placeholder={t('amount_placeholder')}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-olive focus:bg-white"
            />
          </div>

          <div className="mt-6 rounded-2xl bg-olive/10 p-4 text-sm text-slate-700">
            <p className="font-medium text-navy">{t('selected_donation')}</p>
            <p className="mt-1 text-2xl font-semibold text-navy">{currencyCode} {donationAmount.toLocaleString()}</p>
          </div>

          <button
            onClick={startDonation}
            disabled={isSubmitting || donationAmount < 100}
            className="mt-6 inline-flex rounded-full bg-navy px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? t('processing') : t('donate')}
          </button>

          {statusMessage ? (
            <p className="mt-3 text-sm text-slate-600">{statusMessage}</p>
          ) : null}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-navy">{t('volunteer')}</h2>
          <p className="mt-3 text-slate-600">{t('volunteer_text')}</p>
          <Link href="/volunteer" className="mt-5 inline-flex rounded-full bg-olive px-5 py-3 font-semibold text-white">{t('sign_up')}</Link>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-navy">{t('partner_with_us')}</h2>
          <p className="mt-3 text-slate-600">{t('partner_description')}</p>
          <Link href="/contact" className="mt-5 inline-flex rounded-full border border-slate-300 px-5 py-3 font-semibold text-navy">{t('contact')}</Link>
        </div>
      </section>

    </main>
  );
}
