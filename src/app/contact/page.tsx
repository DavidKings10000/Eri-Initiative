import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">Reach out for partnerships, referrals, or collaboration.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">We welcome inquiries from donors, volunteers, families, and community organizations seeking to support our work.</p>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">Get in touch</p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Email: hello@erikenya.org</li>
              <li>Phone: +254 700 000 000</li>
              <li>Location: Nairobi, Kenya</li>
            </ul>
            <div className="mt-6 flex gap-4">
              <Link href="https://www.linkedin.com" className="text-sm font-semibold text-navy">LinkedIn</Link>
              <Link href="https://www.facebook.com" className="text-sm font-semibold text-navy">Facebook</Link>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-navy">Send a message</h2>
          <form className="mt-6 space-y-4">
            <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Name" />
            <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Email" />
            <textarea className="min-h-32 w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="How can we help?" />
            <button className="rounded-full bg-navy px-5 py-3 font-semibold text-white">Submit</button>
          </form>
        </section>
      </div>
    </main>
  );
}
