import Link from 'next/link';

const leadership = [
  { name: 'Moses Otieno', role: 'Executive Director', bio: 'Leads community partnerships and reintegration strategy.' },
  { name: 'Asha Wanjiru', role: 'Programs Lead', bio: 'Oversees identification, health, and education referrals.' },
  { name: 'Daniel Mugo', role: 'Operations Manager', bio: 'Coordinates outreach, logistics, and volunteer support.' },
];

const values = ['Dignity', 'Accountability', 'Collaboration', 'Sustainability'];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">About ERI</p>
          <h1 className="text-4xl font-semibold tracking-tight text-navy">Founded in 2023, ERI is building humane pathways for young people and families navigating street life.</h1>
          <p className="text-lg leading-8 text-slate-700">
            Our work begins with listening. We support each person with practical steps toward legal identity, health care, learning, safety, and lasting livelihoods, always with respect for personal agency and community healing.
          </p>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Mission & Vision</h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-navy">Mission</h3>
                <p className="mt-2 text-slate-600">To restore dignity and transform the lives of street-connected persons through coordinated rehabilitation and strategic partnerships.</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy">Vision</h3>
                <p className="mt-2 text-slate-600">A Kenya where every person has access to safety, documentation, opportunity, and belonging.</p>
              </div>
            </div>
          </div>
        </section>
        <aside className="rounded-3xl bg-navy p-8 text-white shadow-sm">
          <h2 className="text-2xl font-semibold">Our values</h2>
          <ul className="mt-6 space-y-3 text-sm text-slate-200">
            {values.map((value) => (
              <li key={value} className="rounded-2xl bg-white/10 px-4 py-3">{value}</li>
            ))}
          </ul>
          <Link href="/get-involved" className="mt-8 inline-flex rounded-full bg-olive px-5 py-3 font-semibold text-white">Join our work</Link>
        </aside>
      </div>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-navy">Leadership & team</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {leadership.map((person) => (
            <div key={person.name} className="rounded-2xl border border-slate-200 bg-cream p-5">
              <h3 className="text-lg font-semibold text-navy">{person.name}</h3>
              <p className="mt-1 text-sm font-medium text-olive">{person.role}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{person.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
