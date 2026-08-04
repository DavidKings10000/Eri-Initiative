const stages = [
  {
    title: 'Helping Hand',
    description: 'We meet people in crisis with food, care, and a safe first point of contact.',
  },
  {
    title: 'Identification',
    description: 'We support birth registration, ID processing, and legal documentation where possible.',
  },
  {
    title: 'Access & Rehabilitation',
    description: 'We connect people to medical care, psychosocial support, and case planning.',
  },
  {
    title: 'Reintegration',
    description: 'We prepare safe transitions back to family, school, training, or stable community living.',
  },
  {
    title: 'Resocialization',
    description: 'We strengthen lasting support through livelihoods, peer groups, and follow-up care.',
  },
];

export default function ProgramsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">Programs</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">A five-stage rehabilitation pathway built for dignity and long-term stability.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">Each step is designed to be humane, practical, and tailored to the needs of the person we are supporting. Our public-facing model is transparent and anchored in community care.</p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        {stages.map((stage, index) => (
          <div key={stage.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-olive/10 text-sm font-semibold text-olive">
              0{index + 1}
            </div>
            <h2 className="text-xl font-semibold text-navy">{stage.title}</h2>
            <p className="mt-3 text-slate-600">{stage.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
