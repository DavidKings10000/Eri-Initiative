"use client";

import { useLanguage } from '@/context/LanguageProvider';

const partners = [
  { name: 'Ministry of Labour and Social Protection', typeKey: 'government' },
  { name: 'Nairobi County Children Services', typeKey: 'government' },
  { name: 'Aunties of Hope Foundation', typeKey: 'strategic_partner' },
  { name: 'Shining Light Health Network', typeKey: 'health_partner' },
];

export default function PartnersPage() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">{t('partners')}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">{t('partner_title')}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">{t('partner_description')}</p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {partners.map((partner) => (
          <div key={partner.name} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">{t(partner.typeKey)}</p>
            <h2 className="mt-3 text-xl font-semibold text-navy">{partner.name}</h2>
          </div>
        ))}
      </section>
    </main>
  );
}
