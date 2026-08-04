"use client";

import Link from 'next/link';
import { ArrowRight, Heart, Handshake, ShieldCheck, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';

const values = [
  {
    title: 'Dignity first',
    text: 'We meet each person with empathy, respect, and a clear pathway to belonging.',
    icon: ShieldCheck,
  },
  {
    title: 'Community-led care',
    text: 'Our work is shaped by families, local leaders, and trusted partners in Nairobi and beyond.',
    icon: Handshake,
  },
  {
    title: 'Sustainable change',
    text: 'We connect people to skills, documentation, health care, and safe reintegration support.',
    icon: Users,
  },
];

export default function HomePage() {
  const { t } = useLanguage();
  const stats = [
    { label: t('people_supported'), value: '1,240+' },
    { label: t('rehabilitation_stages'), value: '5' },
    { label: t('community_partners'), value: '18' },
  ];

  return (
    <main className="min-h-screen bg-cream text-slate-800">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl space-y-8">
          <div className="inline-flex items-center rounded-full border border-navy/10 bg-white px-4 py-2 text-sm font-medium text-navy">
            <Heart className="mr-2 h-4 w-4 text-olive" />
            {t('hero_tagline')}
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
              {t('mission_heading')}
            </h1>
            <p className="text-lg leading-8 text-slate-700">
              {t('page_intro')}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/get-involved" className="rounded-full bg-navy px-6 py-3 font-semibold text-white transition hover:bg-navy/90">
              {t('donate_now')}
            </Link>
            <Link href="/get-involved" className="rounded-full border border-navy/20 bg-white px-6 py-3 font-semibold text-navy transition hover:border-olive hover:text-olive">
              {t('volunteer')}
            </Link>
          </div>
        </div>
        <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
            alt="Community support"
            className="h-64 w-full rounded-3xl object-cover"
          />
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-cream p-4 text-center">
                <div className="text-2xl font-semibold text-navy">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-navy p-6 text-white">
            <p className="text-sm uppercase tracking-[0.25em] text-olive">{t('our_approach_heading')}</p>
            <p className="mt-3 text-xl font-semibold">{t('programs_description')}</p>
            <Link href="/programs" className="mt-5 inline-flex items-center text-sm font-semibold text-cream">
              Explore the model <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="space-y-3">
                <div className="inline-flex rounded-full bg-cream p-3 text-olive">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-navy">{value.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{value.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
