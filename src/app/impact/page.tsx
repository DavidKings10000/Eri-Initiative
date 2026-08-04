"use client";

import { useLanguage } from '@/context/LanguageProvider';
import { useEffect, useState } from 'react';

async function getImpactData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/impact`, { cache: 'no-store' });
    return response.ok ? await response.json() : [];
  } catch {
    return [];
  }
}

const stories = [
  {
    title: 'A renewed path to school',
    quote: 'After receiving support for school transition and counseling, a young person returned to learning and found stability with family.',
  },
  {
    title: 'A safe first step',
    quote: 'A mother and her teenage daughter received health and documentation support, creating the foundation for a safer, more secure future.',
  },
];

export default function ImpactPage() {
  const { t } = useLanguage();
  const [metrics, setMetrics] = useState<{ key_name: string; value: string; description: string }[]>([]);

  useEffect(() => {
    getImpactData().then((data) => setMetrics(data));
  }, []);

  const stats = metrics.length
    ? metrics.map((item: { key_name: string; value: string; description: string }) => ({
        label: item.description,
        value: item.value,
      }))
    : [
        { label: t('people_supported'), value: '1,240+' },
        { label: t('identity_documents_supported'), value: '612' },
        { label: t('referral_partners'), value: '18' },
        { label: t('community_volunteers'), value: '94' },
      ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">{t('impact')}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">{t('impact_title')}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">{t('impact_description')}</p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-4">
        {stats.map((stat: { label: string; value: string }) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-3xl font-semibold text-navy">{stat.value}</div>
            <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        {stories.map((story) => (
          <div key={story.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-navy">{story.title}</h2>
            <p className="mt-4 text-slate-600">“{story.quote}”</p>
          </div>
        ))}
      </section>
    </main>
  );
}
