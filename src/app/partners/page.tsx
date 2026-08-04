const partners = [
  { name: 'Ministry of Labour and Social Protection', type: 'Government' },
  { name: 'Nairobi County Children Services', type: 'Government' },
  { name: 'Aunties of Hope Foundation', type: 'Strategic partner' },
  { name: 'Shining Light Health Network', type: 'Health partner' },
];

export default function PartnersPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">Partners</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">Collaborations that strengthen safety, care, and opportunity.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">ERI works with public institutions and civil society organizations to expand access to services and create lasting community support.</p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {partners.map((partner) => (
          <div key={partner.name} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">{partner.type}</p>
            <h2 className="mt-3 text-xl font-semibold text-navy">{partner.name}</h2>
          </div>
        ))}
      </section>
    </main>
  );
}
