"use client";

import Link from 'next/link';

export default function ProblemStatementBlogPost() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">Blog</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">Understanding Street-Connectedness: Why ERI Exists</h1>
        <p className="mt-4 text-sm text-slate-500">Published 22 August 2026</p>
        <p className="mt-6 text-lg leading-8 text-slate-700">Street-connectedness is not only a housing challenge—it is also a reflection of poverty, family breakdown, missed education, drug abuse, and weak social support systems. ERI was founded to respond to that reality with dignity, rehabilitation, and long-term reintegration.</p>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-cream p-6">
          <h2 className="text-xl font-semibold text-navy">ERI’s response</h2>
          <p className="mt-3 text-slate-600">Our work combines direct support, community engagement, and practical pathways that help people move from crisis toward safety, belonging, and lasting change.</p>
        </div>
        <div className="mt-8">
          <Link href="/news" className="inline-flex rounded-full bg-olive px-5 py-3 font-semibold text-white">Back to news</Link>
        </div>
      </div>
    </main>
  );
}
