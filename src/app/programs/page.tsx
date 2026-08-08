"use client";

import { useLanguage } from '@/context/LanguageProvider';

const stages = [
  {
    title: 'Helping Hand',
    description: 'We meet people in crisis with food, care, and a safe first point of contact.',
  },
  {
    title: 'Identification',
    description: 'We support birth registration, ID processing, and legal documentation where possible.',
  },
  {
    title: 'Access & Rehabilitation',
    description: 'We connect people to medical care, psychosocial support, and case planning.',
  },
  {
    title: 'Reintegration',
    description: 'We prepare safe transitions back to family, school, training, or stable community living.',
  },
  {
    title: 'Resocialization',
    description: 'We strengthen lasting support through livelihoods, peer groups, and follow-up care.',
  },
];

const pillars = [
  {
    title: 'Meeting Basic Needs',
    description: 'We begin with food, hygiene, clothing, and safe contact so families can focus on recovery and referrals.',
  },
  {
    title: 'Skill Development & Education',
    description: 'We support learning, vocational training, and mentorship that build confidence and long-term independence.',
  },
  {
    title: 'Economic Opportunities & Integration',
    description: 'We open pathways to work, savings groups, and community-led income opportunities.',
  },
];

const ambassadorsProgram = [
  { title: 'Program overview', text: 'ERI Street Ambassadors Program trains trusted community members to support outreach, identify needs early, and foster safer, more connected local response systems.' },
  { title: 'Why it exists', text: 'Street-connected children and families often remain invisible to services because they lack consistent access to trusted support. Ambassadors close that gap.' },
  { title: 'Who can become an ambassador', text: 'Community members with strong local knowledge, reliability, and a commitment to respectful care can be nominated or apply through ERI’s outreach process.' },
  { title: 'Core responsibilities', text: 'Ambassadors help register cases, document concerns, report urgent needs, and coordinate referrals to services, families, and partners.' },
  { title: 'Reporting structure', text: 'Ambassadors work within ERI’s case management workflow, reporting to outreach leads and program staff for follow-up and escalation.' },
  { title: 'Benefits', text: 'Ambassadors gain training, recognition, community leadership experience, and direct access to referral pathways and support networks.' },
  { title: 'Code of Conduct', text: 'Ambassadors are expected to protect privacy, act with respect, uphold safety, and maintain professionalism in all interactions.' },
  { title: 'Selection process', text: 'Selection is based on trustworthiness, commitment, understanding of community needs, and willingness to follow ERI’s safeguarding and reporting standards.' },
];

export default function ProgramsPage() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">{t('programs')}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">{t('programs_title')}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">{t('programs_description')}</p>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-navy">Our program pillars</h2>
        <p className="mt-4 text-slate-600">ERI’s work is built on three core pillars that combine essential aid, skills, and economic inclusion.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-3xl border border-slate-200 bg-cream p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-navy">{pillar.title}</h3>
              <p className="mt-3 text-slate-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">Flagship program</p>
            <h2 className="mt-3 text-2xl font-semibold text-navy">ERI Street Ambassadors Program</h2>
            <p className="mt-4 text-slate-600">This program strengthens ERI’s reach by placing trained community representatives in the spaces where issues are first noticed and where support can be mobilized quickly.</p>
          </div>
          <div className="rounded-2xl bg-olive/10 px-4 py-3 text-sm font-semibold text-olive">Community-led outreach</div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {ambassadorsProgram.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-cream p-6">
              <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        {stages.map((stage, index) => (
          <div key={stage.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-olive/10 text-sm font-semibold text-olive">
              0{index + 1}
            </div>
            <h2 className="text-xl font-semibold text-navy">{stage.title}</h2>
            <p className="mt-3 text-slate-600">{stage.description}</p>
          </div>
        ))}
      </section>

    </main>
  );
}
