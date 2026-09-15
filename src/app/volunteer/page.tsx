'use client';

import Link from 'next/link';
import { BriefcaseBusiness, CalendarDays, Clock3, FileText, Mail, MapPin, MessageCircle, Phone, UserRound } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageProvider';

export default function VolunteerPage() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  async function submitApplication(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSubmitting(true);
    const form = event.currentTarget;

    try {
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const data = await response.json();
      setStatus(response.ok ? t('volunteer_success') : data.error || t('volunteer_error'));
      if (response.ok) form.reset();
    } catch {
      setStatus(t('volunteer_error'));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <Link href="/get-involved" className="text-sm font-semibold text-navy">{t('back_to_get_involved')}</Link>
      <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">{t('volunteer')}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">{t('volunteer_form_title')}</h1>
        <p className="mt-3 max-w-3xl text-slate-600">{t('volunteer_form_description')}</p>
        <form onSubmit={submitApplication} className="mt-8 grid gap-5 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            <span className="flex items-center gap-2"><UserRound className="h-4 w-4 text-olive" />{t('full_name')}</span>
            <input name="fullName" required className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 font-normal" placeholder={t('full_name_placeholder')} />
          </label>
          <label className="text-sm font-medium text-slate-700">
            <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-olive" />{t('email')}</span>
            <input name="email" required type="email" className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 font-normal" placeholder={t('email_placeholder')} />
          </label>
          <label className="text-sm font-medium text-slate-700">
            <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-olive" />{t('phone')}</span>
            <input name="phone" required type="tel" className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 font-normal" placeholder={t('phone_placeholder')} />
          </label>
          <label className="text-sm font-medium text-slate-700">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-olive" />{t('location')}</span>
            <input name="location" required className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 font-normal" placeholder={t('location_placeholder')} />
          </label>
          <label className="text-sm font-medium text-slate-700">
            <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-olive" />{t('preferred_date')}</span>
            <div className="relative mt-2">
              <input name="preferredDate" required type="date" className="w-full rounded-2xl border border-slate-300 px-4 py-3 font-normal" />
            </div>
          </label>
          <label className="text-sm font-medium text-slate-700">
            <span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-olive" />{t('preferred_time')}</span>
            <div className="relative mt-2">
              <input name="preferredTime" required type="time" className="w-full rounded-2xl border border-slate-300 px-4 py-3 font-normal" />
            </div>
          </label>
          <label className="text-sm font-medium text-slate-700">
            <span className="flex items-center gap-2"><BriefcaseBusiness className="h-4 w-4 text-olive" />{t('interests_label')}</span>
            <input name="interests" required className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 font-normal" placeholder={t('interests_placeholder')} />
          </label>
          <label className="text-sm font-medium text-slate-700 md:col-span-2">
            <span className="flex items-center gap-2"><FileText className="h-4 w-4 text-olive" />{t('experience_label')}</span>
            <textarea name="experience" className="mt-2 min-h-32 w-full rounded-2xl border border-slate-300 px-4 py-3 font-normal" placeholder={t('experience_placeholder')} />
          </label>
          <label className="text-sm font-medium text-slate-700 md:col-span-2">
            <span className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-olive" />{t('motivation_label')}</span>
            <textarea name="motivation" required className="mt-2 min-h-32 w-full rounded-2xl border border-slate-300 px-4 py-3 font-normal" placeholder={t('motivation_placeholder')} />
          </label>
          <div className="md:col-span-2">
            <button type="submit" disabled={isSubmitting} className="rounded-full bg-olive px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60">
              {isSubmitting ? t('sending') : t('submit_application')}
            </button>
            {status ? <p className="mt-3 text-sm text-slate-600">{status}</p> : null}
          </div>
        </form>
      </section>
    </main>
  );
}