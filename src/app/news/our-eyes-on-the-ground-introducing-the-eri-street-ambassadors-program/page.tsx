"use client";

import Link from 'next/link';

export default function AmbassadorBlogPost() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">Blog</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">Our Eyes on the Ground: Introducing the ERI Street Ambassadors Program</h1>
        <p className="mt-4 text-sm text-slate-500">Published 8 August 2026</p>
        <p className="mt-6 text-lg leading-8 text-slate-700">The ERI Street Ambassadors Program is a community-led approach to outreach and support. By training trusted local ambassadors, ERI is strengthening visibility in neighborhoods where people are most likely to need early intervention, practical care, and a humane response.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-cream p-6">
            <h2 className="text-xl font-semibold text-navy">Why the program exists</h2>
            <p className="mt-3 text-slate-600">Street-connected individuals often fall through gaps in services because they are hard to reach and easy to miss. Ambassadors help ERI understand the needs on the ground and connect people to support more quickly.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-navy">What ambassadors do</h2>
            <p className="mt-3 text-slate-600">They observe conditions, report concerns, encourage referrals, and strengthen communication between ERI, communities, and partner organizations.</p>
          </div>
        </div>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-navy">The impact</h2>
          <p className="mt-3 text-slate-600">Ambassadors increase visibility, improve follow-up, and help ERI create a more trusted and responsive outreach model rooted in dignity and long-term rehabilitation.</p>
        </div>
        <div className="mt-8">
          <Link href="/news" className="inline-flex rounded-full bg-olive px-5 py-3 font-semibold text-white">Back to news</Link>
        </div>
      </div>
    </main>
  );
}
