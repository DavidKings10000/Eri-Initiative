"use client";

import { Activity, Award, Heart, MapPin, ShieldCheck, Users } from 'lucide-react';
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

const jujaStats = [
  {
    label: 'Beneficiaries supported',
    value: '160',
    description: 'People received food, clothing, sanitary towels, infant formula, and hygiene supplies.',
    icon: Heart,
  },
  {
    label: 'Food and essentials',
    value: 'Multiple',
    description: 'Support packages were designed to cover urgent basic needs while keeping dignity and wellbeing at the center.',
    icon: ShieldCheck,
  },
  {
    label: 'Partnerships',
    value: '3+',
    description: 'ERI worked alongside Kenya Red Cross, Swahili Pot Hub, and Mombasa Jitambue / Future Pillars.',
    icon: Users,
  },
  {
    label: 'Outcome',
    value: 'Trust & reach',
    description: 'The event strengthened community trust and created a stronger foundation for future outreach and reintegration work.',
    icon: Activity,
  },
];

const thikaStats = [
  {
    label: 'Households supported',
    value: '92',
    description: 'Households reached through the Thika Food Drive 2023.',
    icon: MapPin,
  },
  {
    label: 'Beneficiaries reached',
    value: '150+',
    description: 'People who received food, clothing, and hygiene support during the campaign.',
    icon: Heart,
  },
  {
    label: 'Referral pathways',
    value: '18+',
    description: 'Local connections created with leaders, officials and service partners.',
    icon: Users,
  },
  {
    label: 'Impact milestones',
    value: '4',
    description: 'Food drives and outreach events completed from 2023 to 2026.',
    icon: Award,
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

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-navy">Featured impact: Thika Food Drive 2023</h2>
            <p className="text-slate-600">ERI’s Thika Food Drive 2023 delivered food, clothing, sanitary supplies, books and toys to vulnerable families in Thika Town while building local trust and identifying people who need further rehabilitation support.</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-navy">Objectives</h3>
                <p className="mt-2 text-slate-600">Support vulnerable households with care packages, engage local leaders, and identify households for continued rehabilitation outreach.</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy">Community engagement</h3>
                <p className="mt-2 text-slate-600">The event collaborated with Township Sublocation leaders, assistant chiefs and Nyumba Kumi representatives to reach households in need and strengthen community outreach.</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy">Lessons learned</h3>
                <p className="mt-2 text-slate-600">Local leadership partnership is essential for reaching the most vulnerable households and maintaining momentum for future rehabilitation work.</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy">Future plans</h3>
                <p className="mt-2 text-slate-600">ERI will continue to deepen local partnerships and expand referral networks to support the families identified through this food drive.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {thikaStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="group rounded-3xl border border-slate-200 bg-cream p-6 shadow-sm transition-transform duration-500 hover:-translate-y-1">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-olive shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-navy">{stat.label}</p>
                  {stat.value ? <p className="mt-2 text-3xl font-semibold text-navy">{stat.value}</p> : null}
                  <p className="mt-2 text-sm text-slate-600">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-navy">From challenge to transformation</h2>
        <p className="mt-4 text-slate-600">ERI responds to poverty, homelessness, family breakdown, missed education, drug abuse, and weak social support systems with practical care, direct services, and long-term reintegration pathways.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-cream p-6">
            <h3 className="text-xl font-semibold text-navy">Juja Farm Food Drive 2025</h3>
            <p className="mt-3 text-slate-600">The December 2025 initiative supported 160 beneficiaries through distributed food, clothing, sanitary towels, infant formula, and hygiene supplies while strengthening collaboration with partner organizations.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-navy">Street Ambassadors Program</h3>
            <p className="mt-3 text-slate-600">This long-term engagement strategy helps ERI remain present in communities, strengthen referrals, and improve how support reaches the people who need it most.</p>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-navy">Juja Farm initiative highlights</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {jujaStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="rounded-3xl border border-slate-200 bg-cream p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-olive shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-semibold text-navy">{stat.label}</p>
                <p className="mt-2 text-3xl font-semibold text-navy">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-navy">Latest charity drives</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-cream p-6">
            <h3 className="font-semibold text-navy">Thika Food Drive 2023</h3>
            <p className="mt-3 text-slate-600">Delivered food, clothing, sanitary supplies, books and toys while identifying vulnerable households for follow-up support.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-cream p-6">
            <h3 className="font-semibold text-navy">Mombasa Food Drive 2024</h3>
            <p className="mt-3 text-slate-600">Extended outreach to coastal communities with practical aid and local referral coordination.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-cream p-6">
            <h3 className="font-semibold text-navy">Juja Farm Food Drive 2025</h3>
            <p className="mt-3 text-slate-600">Combined farm-based food support with economic inclusion and community resilience work.</p>
          </div>
        </div>
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
