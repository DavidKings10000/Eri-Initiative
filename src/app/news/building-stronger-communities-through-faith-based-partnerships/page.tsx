"use client";

import Link from 'next/link';

export default function FaithPartnershipBlogPost() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">Blog</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">Building Stronger Communities Through Faith-Based Partnerships</h1>
        <p className="mt-4 text-sm text-slate-500">Published 14 March 2026</p>
        <p className="mt-6 text-lg leading-8 text-slate-700">ERI’s collaboration with churches, health committees, elders, and youth leaders highlights the powerful role faith-based networks play in safe, dignified community support.</p>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-cream p-6">
          <h2 className="text-xl font-semibold text-navy">Why these partnerships matter</h2>
          <p className="mt-3 text-slate-600">Faith communities often serve as trusted points of contact, helping ERI reach families who might otherwise remain invisible to formal systems.</p>
        </div>
        <div className="mt-8">
          <Link href="/news" className="inline-flex rounded-full bg-olive px-5 py-3 font-semibold text-white">Back to news</Link>
        </div>
      </div>
    </main>
  );
}
