"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageProvider';

export default function ContactPage() {
  const { t } = useLanguage();

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
              <li>Email: eriinitiative@gmail.com</li>
              <li>Phone: +254 728 852 274</li>
              <li>Location: Nairobi, Kenya</li>
            </ul>
            <div className="mt-6 flex gap-4">
              <Link href="https://www.instagram.com/eri_initiative?igsh=aHFyYTJqbGRhYTd4" className="text-sm font-semibold text-navy">Instagram</Link>
              <Link href="https://www.facebook.com/profile.php?id=61573327822338" className="text-sm font-semibold text-navy">Facebook</Link>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-navy">{t('send_message_heading')}</h2>
          <form className="mt-6 space-y-4">
            <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder={t('name_placeholder')} />
            <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder={t('email_placeholder')} />
            <textarea className="min-h-32 w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder={t('message_placeholder')} />
            <button className="rounded-full bg-navy px-5 py-3 font-semibold text-white">{t('submit')}</button>
          </form>
        </section>
      </div>
    </main>
  );
}
