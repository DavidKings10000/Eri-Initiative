import Link from 'next/link';

export default function GetInvolvedPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">Get involved</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">Your support can create a safer, more hopeful next step.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">We welcome donations, volunteers, and aligned partners who believe in restorative care and long-term reintegration.</p>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-navy">Donate</h2>
          <p className="mt-3 text-slate-600">Support food, health care, school materials, and legal support for people on the path to stability.</p>
          <a href="https://buy.stripe.com/test_" className="mt-5 inline-flex rounded-full bg-navy px-5 py-3 font-semibold text-white">Start a test donation</a>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-navy">Volunteer</h2>
          <p className="mt-3 text-slate-600">Share your skills in outreach, fundraising, mentoring, or administrative support.</p>
          <Link href="/contact" className="mt-5 inline-flex rounded-full bg-olive px-5 py-3 font-semibold text-white">Sign up</Link>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-navy">Partner with us</h2>
          <p className="mt-3 text-slate-600">We collaborate with public agencies, businesses, schools, and civic groups.</p>
          <Link href="/partners" className="mt-5 inline-flex rounded-full border border-slate-300 px-5 py-3 font-semibold text-navy">View partners</Link>
        </div>
      </section>
    </main>
  );
}
