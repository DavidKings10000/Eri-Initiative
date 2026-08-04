async function getImpactData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/impact`, { cache: 'no-store' });
    return response.ok ? await response.json() : [];
  } catch {
    return [];
  }
}

const stories = [
  {
    title: 'A renewed path to school',
    quote: 'After receiving support for school transition and counseling, a young person returned to learning and found stability with family.',
  },
  {
    title: 'A safe first step',
    quote: 'A mother and her teenage daughter received health and documentation support, creating the foundation for a safer, more secure future.',
  },
];

export default async function ImpactPage() {
  const metrics = await getImpactData();
  const stats = metrics.length
    ? metrics.map((item: { key_name: string; value: string; description: string }) => ({
        label: item.description,
        value: item.value,
      }))
    : [
        { label: 'People assisted', value: '1,240+' },
        { label: 'Identity documents supported', value: '612' },
        { label: 'Referral partners', value: '18' },
        { label: 'Community volunteers', value: '94' },
      ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">Impact & stories</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">Publicly shared progress, grounded in consent and respect.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">We share aggregate impact data and anonymized stories that reflect the dignity and progress of the people we serve.</p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-4">
        {stats.map((stat: { label: string; value: string }) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-3xl font-semibold text-navy">{stat.value}</div>
            <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        {stories.map((story) => (
          <div key={story.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-navy">{story.title}</h2>
            <p className="mt-4 text-slate-600">“{story.quote}”</p>
          </div>
        ))}
      </section>
    </main>
  );
}
