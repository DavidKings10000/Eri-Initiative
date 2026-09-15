"use client";

import Link from 'next/link';

export default function AmbassadorBlogPost() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">Blog</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">Our Eyes on the Ground: Introducing the ERI Street Ambassadors Program</h1>
        <p className="mt-4 text-sm text-slate-500">Published 8 August 2026 · 10 minute read</p>
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
        <div className="mt-8 space-y-8 text-slate-600">
          <section><h2 className="text-2xl font-semibold text-navy">Why local visibility matters</h2><p className="mt-3 leading-8">Formal services often see only the moments when a person reaches an office, clinic, shelter, or event. Street ambassadors help ERI understand what happens between those moments. They notice changing conditions, listen to concerns, and share information through relationships that already exist.</p><p className="mt-3 leading-8">This does not mean monitoring people or collecting stories without consent. The program is built around respectful contact, clear boundaries, and referrals when a concern requires trained support. Visibility should lead to care, not surveillance.</p></section>
          <section><h2 className="text-2xl font-semibold text-navy">Selecting and preparing ambassadors</h2><p className="mt-3 leading-8">Trusted presence is more important than a title. Ambassadors need patience, reliability, local knowledge, and the ability to listen without making promises they cannot keep. Preparation should cover safeguarding, confidentiality, consent, basic referral pathways, and how to respond when someone faces immediate danger.</p><p className="mt-3 leading-8">They also need support themselves. Regular check-ins give ambassadors a place to discuss difficult situations, clarify their role, and avoid carrying complex cases alone. A community-led program is sustainable only when its volunteers are treated with the same care it offers others.</p></section>
          <section><h2 className="text-2xl font-semibold text-navy">Turning observations into useful referrals</h2><p className="mt-3 leading-8">An observation becomes useful when it leads to an agreed next step. That might be a health referral, an identity-documentation conversation, a family contact, a protection concern, or an invitation to a safe community activity. ERI can then help assess the need and coordinate with the right partner.</p><p className="mt-3 leading-8">The process must avoid exaggeration and protect privacy. Ambassadors should share only information that is necessary for the referral, record consent where appropriate, and understand when a concern must be escalated urgently.</p></section>
          <section><h2 className="text-2xl font-semibold text-navy">Building trust over time</h2><p className="mt-3 leading-8">Trust rarely comes from one visit. It grows when people see that an ambassador returns, remembers what was discussed, gives honest updates, and does not disappear after collecting information. Consistency is especially important for people who have experienced rejection or broken promises from institutions.</p><p className="mt-3 leading-8">The program therefore values follow-up as much as first contact. A referral that is checked later can reveal whether a service was accessible, whether the person felt respected, and whether another route is needed.</p></section>
          <section><h2 className="text-2xl font-semibold text-navy">Working with existing leaders</h2><p className="mt-3 leading-8">Street ambassadors are not a replacement for local leadership, public services, or specialist organizations. They are a bridge between people and the networks that can help. Working with elders, youth leaders, faith groups, health workers, and child-protection partners creates a wider response and reduces the risk of one volunteer becoming the only point of support.</p><p className="mt-3 leading-8">Shared learning helps partners recognize patterns without exposing private details. Over time, those patterns can guide outreach locations, community conversations, and prevention work.</p></section>
          <section><h2 className="text-2xl font-semibold text-navy">Measuring impact responsibly</h2><p className="mt-3 leading-8">The program can track contacts, referrals, follow-ups, and connections to services, but numbers should be interpreted carefully. A high number of contacts does not automatically mean strong impact. Quality questions matter: did people understand their options, did referrals lead somewhere, and did the person feel safe and respected?</p><p className="mt-3 leading-8">Listening to ambassadors and the people they support will help ERI improve training and coordination. The ambition is not to create a large network for its own sake, but to make early support more reliable.</p></section>
        </div>
        <div className="mt-8">
          <Link href="/news" className="inline-flex rounded-full bg-olive px-5 py-3 font-semibold text-white">Back to news</Link>
        </div>
      </div>
    </main>
  );
}
