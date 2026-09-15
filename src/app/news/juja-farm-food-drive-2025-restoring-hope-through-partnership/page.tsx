"use client";

import Link from 'next/link';

export default function JujaFarmBlogPost() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">Blog</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">Juja Farm Food Drive 2025: Restoring Hope Through Partnership</h1>
        <p className="mt-4 text-sm text-slate-500">Published 10 January 2026 · 10 minute read</p>
        <p className="mt-6 text-lg leading-8 text-slate-700">The Juja Farm Food Drive 2025 brought together community leaders, volunteers, and partner organizations to support 160 beneficiaries with food, clothing, sanitary towels, infant formula, and hygiene supplies.</p>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-cream p-6">
          <h2 className="text-xl font-semibold text-navy">What made the event meaningful</h2>
          <p className="mt-3 text-slate-600">It was more than a charitable distribution. The event demonstrated how practical care and strong partnerships can restore dignity, build trust, and open long-term pathways to support.</p>
        </div>
        <div className="mt-8 space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-semibold text-navy">Starting with what families identified</h2>
            <p className="mt-3 leading-8">The planning process began with a simple question: what would make the greatest difference to families in Juja Farm at that moment? The answer was not one universal package. Food was central, but households also needed clothing, hygiene items, sanitary towels, and infant formula. Listening first helped the team treat the drive as a practical response rather than a one-size-fits-all donation exercise.</p>
            <p className="mt-3 leading-8">That approach also made room for needs that are easy to overlook. Menstrual health supplies support school attendance and daily confidence. Infant formula can provide immediate relief for a caregiver who is struggling to feed a child. Clean clothing and hygiene products can help a person feel prepared to engage with a clinic, school, employer, or support worker. Each item carried a purpose beyond its price.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">Partnership turned supplies into a response</h2>
            <p className="mt-3 leading-8">Community leaders and volunteers contributed local knowledge that an outside team could not easily reproduce. They understood how households were connected, which routes were accessible, and where a respectful conversation could take place. Partner organizations added capacity for sourcing, packing, transport, and coordination.</p>
            <p className="mt-3 leading-8">This division of responsibility mattered. A food drive can become confusing when too many people act without a shared plan. Clear roles helped the team prepare supplies, welcome families, manage movement, and respond to questions. It also made the event feel owned by the community instead of simply delivered to it.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">Distribution with dignity</h2>
            <p className="mt-3 leading-8">Dignity is expressed through ordinary details: explaining what is available, avoiding unnecessary public attention, keeping queues orderly, and allowing people to ask for clarification without embarrassment. Volunteers were not only moving packages; they were creating an environment in which families could receive help without being reduced to a number.</p>
            <p className="mt-3 leading-8">The presence of infant formula and sanitary supplies made individual conversations especially important. Families have different circumstances, and support is most useful when people can describe what they actually need. This is why the drive created opportunities for listening alongside distribution.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">More than one day of support</h2>
            <p className="mt-3 leading-8">An event can meet an urgent need while also revealing where longer-term support is required. Conversations during the drive helped partners notice questions about health, documentation, family stability, education, and livelihoods. Those questions cannot be solved by a single package, but they can become the beginning of a referral and follow-up pathway.</p>
            <p className="mt-3 leading-8">For ERI, this is the bridge between relief and rehabilitation. Immediate care helps a person feel seen and supported. Follow-up work then helps identify the practical conditions that would make greater stability possible. The two forms of support should reinforce each other.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">What the team learned</h2>
            <p className="mt-3 leading-8">The drive reinforced the value of preparation, local coordination, and flexible response. Household needs can change quickly, and a plan must leave room for unexpected concerns. It also showed that partnerships are strongest when they include communication after the event, not only contributions before it.</p>
            <p className="mt-3 leading-8">The figure of 160 beneficiaries describes the reach of the activity, but the deeper measure is whether relationships continued afterward. A successful response leaves partners better connected, volunteers better informed, and families with clearer routes to the next form of help.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">Building the next response</h2>
            <p className="mt-3 leading-8">Future food drives can build on this experience by strengthening referral records, planning for different household sizes, and creating clear follow-up responsibilities. Regular communication with community leaders can help ERI identify changing needs before they become emergencies. Volunteers can also be supported with guidance on privacy, safeguarding, and respectful conversations.</p>
            <p className="mt-3 leading-8">The Juja Farm experience offers a practical reminder: partnership is not a backdrop to community care. It is the method that makes care more relevant, more accountable, and more likely to continue after the distribution ends.</p>
          </section>
        </div>
        <div className="mt-8">
          <Link href="/news" className="inline-flex rounded-full bg-olive px-5 py-3 font-semibold text-white">Back to news</Link>
        </div>
      </div>
    </main>
  );
}
