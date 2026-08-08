"use client";

import Link from 'next/link';

export default function JujaFarmBlogPost() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">Blog</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">Juja Farm Food Drive 2025: Restoring Hope Through Partnership</h1>
        <p className="mt-4 text-sm text-slate-500">Published 10 January 2026</p>
        <p className="mt-6 text-lg leading-8 text-slate-700">The Juja Farm Food Drive 2025 brought together community leaders, volunteers, and partner organizations to support 160 beneficiaries with food, clothing, sanitary towels, infant formula, and hygiene supplies.</p>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-cream p-6">
          <h2 className="text-xl font-semibold text-navy">What made the event meaningful</h2>
          <p className="mt-3 text-slate-600">It was more than a charitable distribution. The event demonstrated how practical care and strong partnerships can restore dignity, build trust, and open long-term pathways to support.</p>
        </div>
        <div className="mt-8">
          <Link href="/news" className="inline-flex rounded-full bg-olive px-5 py-3 font-semibold text-white">Back to news</Link>
        </div>
      </div>
    </main>
  );
}
