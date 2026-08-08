"use client";

import { Compass, Handshake, HeartHandshake, ShieldCheck, Users } from 'lucide-react';
import { partnerOrganizations } from '@/lib/partnerOrganizations';

const collaborationHighlights = [
  {
    title: 'Ambassadors strengthen trust',
    text: 'Street ambassadors act as bridges between ERI, families, and local leaders, helping outreach feel familiar and respectful.',
    icon: Handshake,
  },
  {
    title: 'Faith-based collaboration',
    text: 'Church leaders, health committees, elders, and youth leaders help ERI extend care into trusted community spaces.',
    icon: ShieldCheck,
  },
  {
    title: 'Partner-led referrals',
    text: 'Ambassadors improve follow-through by connecting communities to hospitals, shelters, schools, and support networks.',
    icon: HeartHandshake,
  },
];

export default function PartnersPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">Partners</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">Collaboration that strengthens community care</h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">ERI works through a wide network of partners, faith communities, and frontline volunteers to make outreach more trusted, more responsive, and more sustainable.</p>
      </section>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="rounded-2xl bg-olive/10 p-3 text-olive">
            <Compass className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-navy">How Street Ambassadors improve partnerships</h2>
            <p className="mt-3 max-w-3xl text-slate-600">The ERI Street Ambassadors Program gives communities a trusted point of contact while helping partner organizations understand local needs, coordinate referrals, and deliver support in a more organized way.</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {collaborationHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-cream p-6">
                <div className="inline-flex rounded-2xl bg-white p-3 text-olive shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-navy">Faith-based and community partnerships</h2>
        <p className="mt-4 text-slate-600">ERI’s collaboration with churches, healthcare providers, and neighborhood networks continues to expand the reach of support and strengthen local ownership of rehabilitation and reintegration work.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partnerOrganizations.map((partner) => (
            <div key={partner.name} className="group flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-olive/70 hover:bg-white">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100 text-slate-700 mx-auto">
                {partner.logo ? <img src={partner.logo} alt={`${partner.name} logo`} className="h-16 w-16 object-contain" /> : partner.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="font-semibold text-navy">{partner.name}</p>
                <p className="text-sm text-slate-500">Add logo URL to display</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="rounded-2xl bg-olive/10 p-3 text-olive">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-navy">Why these partnerships matter</h2>
            <p className="mt-3 text-slate-600">When communities and partners work together, ERI can respond faster, reduce duplication, and create safer pathways to dignity, education, health, and livelihoods.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
