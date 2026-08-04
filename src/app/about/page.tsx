"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageProvider';

const board = [
  { name: 'Arafat Mukasa', role: 'Serial Founder & Entrepreneurship Pathway Lead', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80' },
  { name: 'Rajab (Malenga) Salim', role: 'Community Engagement & Development Specialist', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80' },
];

const seniorManagement = [
  { name: 'Lorraine Njeri', role: 'Founder and Director at Eri Street Initiative', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80' },
  { name: 'David (Musa) Wekesa', role: 'Co-Founder and Director at Eri Street Initiative', image: '/Daudi Musa.jpeg' },
  { name: 'Mellisa Wairimu', role: 'Treasurer', image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80' },
  { name: 'Donald Kiplagat', role: 'Secretary', image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80' },
  { name: 'Levis Masanta', role: 'Communication & Social Media', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { name: 'David Munene', role: 'Communication', image: '/David Munene.png' },
  { name: 'Wacuka Munyiri', role: 'Tech Lead', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
];

const values = ['Dignity', 'Accountability', 'Collaboration', 'Sustainability'];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">{t('about')}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-navy">{t('about_title')}</h1>
          <p className="text-lg leading-8 text-slate-700">{t('about_description')}</p>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">{t('mission')} & {t('vision')}</h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-navy">{t('mission')}</h3>
                <p className="mt-2 text-slate-600">{t('mission_text')}</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy">{t('vision')}</h3>
                <p className="mt-2 text-slate-600">{t('vision_text')}</p>
              </div>
            </div>
          </div>
        </section>
        <div className="rounded-3xl bg-navy p-8 text-white shadow-sm">
          <h2 className="text-2xl font-semibold">{t('values_title')}</h2>
          <ul className="mt-6 space-y-3 text-sm text-slate-200">
            {values.map((value) => (
              <li key={value} className="rounded-2xl bg-white/10 px-4 py-3">{t(`value_${value.toLowerCase()}`)}</li>
            ))}
          </ul>
          <Link href="/get-involved" className="mt-8 inline-flex rounded-full bg-olive px-5 py-3 font-semibold text-white">{t('join_work')}</Link>
        </div>
      </div>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-navy">{t('board')}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {board.map((person) => (
            <div key={person.name} className="flex gap-4 rounded-3xl border border-slate-200 bg-cream p-5">
              <img src={person.image} alt={person.name} className="h-20 w-20 rounded-3xl object-cover" />
              <div>
                <h3 className="text-lg font-semibold text-navy">{person.name}</h3>
                <p className="mt-1 text-sm font-medium text-olive">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-navy">{t('senior_management')}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {seniorManagement.map((person) => (
            <div key={person.name} className="rounded-3xl border border-slate-200 bg-cream p-5">
              <img src={person.image} alt={person.name} className="h-40 w-full rounded-3xl object-cover" />
              <h3 className="mt-4 text-lg font-semibold text-navy">{person.name}</h3>
              <p className="mt-1 text-sm font-medium text-olive">{person.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
