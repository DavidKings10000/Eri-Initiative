"use client";

import { useLanguage } from '@/context/LanguageProvider';

export default function ThikaFoodDrivePage() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">{t('news')}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-navy">Thika Food Drive 2023: Restoring Hope One Household at a Time</h1>
          <p className="text-lg leading-8 text-slate-700">
            ERI’s Thika Food Drive 2023 brought together community leaders, volunteers, and vulnerable households for a day of practical care, safe distribution, and outreach that identified people needing deeper rehabilitation support.
          </p>
          <p className="text-sm text-slate-500">Published 23 December 2023 · 10 minute read</p>

          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-navy">Event Overview</h2>
              <p className="mt-4 text-slate-600">Held on December 23, 2023 at the Chief’s Office in Thika Town, this community food drive delivered essential support to 92 households and reached more than 150 people in need.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-navy">Location</h2>
              <p className="mt-4 text-slate-600">Chief’s Office, Thika Town, Kiambu County</p>
            </div>
          </div>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Objectives</h2>
            <ul className="mt-4 list-inside list-disc space-y-3 text-slate-600">
              <li>Provide dependable food support to vulnerable households in Thika.</li>
              <li>Deliver clothing, sanitary items, books and toys to families and children.</li>
              <li>Build trust with county leadership and community safety networks.</li>
              <li>Identify individuals experiencing homelessness for referral and follow-up support.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Preparing for a high-need response</h2>
            <p className="mt-4 text-slate-600">The scale of the drive required more than collecting donations. Organizers had to estimate household needs, plan safe movement, coordinate with local leadership, and prepare volunteers for conversations that might reveal urgent welfare concerns. The involvement of Township Sublocation leaders, assistant chiefs, and Nyumba Kumi representatives helped the team understand the local context before distribution began.</p>
            <p className="mt-4 text-slate-600">Preparation also made it possible to respond with flexibility. Families do not all have the same number of children, health needs, or access to support. A careful process can keep distribution fair while leaving room for people to explain circumstances that require additional attention.</p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Community Engagement</h2>
            <p className="mt-4 text-slate-600">The food drive was coordinated with Township Sublocation leaders, assistant chiefs, and Nyumba Kumi representatives to ensure the response reached the most vulnerable families and strengthened local trust in ERI’s outreach model.</p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">From a package to a pathway</h2>
            <p className="mt-4 text-slate-600">A care package can relieve pressure for a household, but the outreach conversation helps explain what might happen next. People experiencing homelessness may need support with identity documents, health care, family contact, protection, shelter, education, or livelihoods. Identifying those needs during a food drive gives ERI and its partners a starting point for follow-up.</p>
            <p className="mt-4 text-slate-600">The transition from immediate relief to rehabilitation should be voluntary and paced around the person’s circumstances. A referral is useful only when it is understandable, accessible, and followed through. This is why the street ambassador network became an important part of the response.</p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Distribution of Care Packages</h2>
            <p className="mt-4 text-slate-600">Each care package included food, clothing, sanitary supplies, books and toys, helping families meet immediate needs while creating a safe space for meaningful follow-up conversations.</p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">What the numbers do and do not show</h2>
            <p className="mt-4 text-slate-600">Supporting 92 households and reaching more than 150 people shows the breadth of the response, and exceeding the initial target demonstrates the strength of community participation. The numbers do not, by themselves, show whether a family became safer or whether a person found a lasting pathway out of crisis.</p>
            <p className="mt-4 text-slate-600">That deeper impact depends on what happened afterward: whether referrals were completed, whether local relationships stayed active, and whether people could access support without stigma. Event reporting should therefore celebrate reach while remaining honest about the longer work still required.</p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Key Outcomes</h2>
            <ul className="mt-4 list-inside list-disc space-y-3 text-slate-600">
              <li>92 households supported through direct care packages.</li>
              <li>More than 150 beneficiaries reached across Thika Town.</li>
              <li>Target of 60 households exceeded, reflecting strong demand and partnership reach.</li>
              <li>Identified people experiencing homelessness and families needing further support.</li>
              <li>Established a network of street ambassadors to support ongoing outreach.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Community Feedback</h2>
            <p className="mt-4 text-slate-600">Leaders and residents welcomed ERI’s presence and support, affirming that well-coordinated community outreach makes a meaningful difference for households facing daily hardship.</p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Challenges</h2>
            <p className="mt-4 text-slate-600">The food drive highlighted the need for strong local coordination and careful distribution planning so that support reaches households safely and effectively.</p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Lessons Learned</h2>
            <p className="mt-4 text-slate-600">Working closely with county leadership and community safety groups helps ERI reach the most vulnerable people and build a stronger foundation for future rehabilitation activities.</p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Future Plans</h2>
            <p className="mt-4 text-slate-600">ERI will build on this experience by expanding support through local partners and deepening the referral process for people identified during the food drive.</p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Leadership Recognition</h2>
            <p className="mt-4 text-slate-600">The event was guided by ERI leadership including Lorraine Njeri, David Wekesa, Wacuka Munyiri, Faith Wainaina, and David Munene, working together with county representatives and community volunteers.</p>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-navy p-8 text-white shadow-sm">
            <h2 className="text-xl font-semibold">Thika Food Drive Snapshot</h2>
            <div className="mt-6 grid gap-4">
              <div className="rounded-3xl bg-cream/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-olive">Event date</p>
                <p className="mt-2 text-lg font-semibold">23 December 2023</p>
              </div>
              <div className="rounded-3xl bg-cream/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-olive">Location</p>
                <p className="mt-2 text-lg font-semibold">Chief's Office, Thika Town</p>
              </div>
              <div className="rounded-3xl bg-cream/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-olive">Households supported</p>
                <p className="mt-2 text-lg font-semibold">92</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-navy">Impact highlights</h2>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li>Supported 92 households with food and care packages.</li>
              <li>Reached over 150 beneficiaries.</li>
              <li>Exceeded the initial target of 60 households.</li>
              <li>Raised KES 40,000 through donations.</li>
              <li>Received 70 kg of rice and clothing from local partners.</li>
              <li>Established a street ambassador network.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-cream p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-navy">Gallery</h2>
            <div className="mt-6 grid gap-4">
              {['/Images/1.jpg', '/Images/02.jpg', '/Images/T1.jpg', '/Images/T2.jpg', '/Images/T4.jpg', '/Images/T8.jpg'].map((image) => (
                <img key={image} src={image} alt="Thika Food Drive community outreach" className="h-40 w-full rounded-3xl object-cover" />
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">Images from the Thika Food Drive journey gallery.</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
