"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageProvider';

export default function MlangoKubwaPage() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">{t('news')}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">Football, Food, and Hope: ERI’s Mlango Kubwa Outreach 2026</h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            In March 2026, ERI brought together local youth and street-connected families in Mlango Kubwa, Nairobi for a football and food drive that combined nourishment, sport, and outreach to strengthen trust and open doors for longer-term rehabilitation.
          </p>
          <p className="mt-4 text-sm text-slate-500">Published 18 March 2026 · 10 minute read</p>
          <div className="mt-10 space-y-10">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-navy">Event Overview</h2>
              <p className="mt-4 text-slate-600">The Mlango Kubwa Football & Food Drive 2026 brought together 150 individuals for a day of communal meals, a youth football tournament, street assessments, and a campaign to build safe pathways through sport and outreach.</p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-navy">Why sport created an opening</h2>
              <p className="mt-4 text-slate-600">Football gave young people a shared activity that did not begin with a form, an assessment, or a difficult question. It created a familiar setting where volunteers could listen, encourage participation, and build relationships naturally. The sport was not presented as a cure for poverty or exclusion. It was a practical way to create belonging and make future conversations possible.</p>
              <p className="mt-4 text-slate-600">That distinction matters. A tournament can offer joy and confidence while still being connected to wider support. When participants and families choose to speak with outreach workers, those conversations can lead toward referrals rather than being forced into the event.</p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-navy">Listening alongside distribution</h2>
              <p className="mt-4 text-slate-600">Food distribution met an immediate need, while street assessments helped the team understand what support might be needed next. The combination required care: people should be able to receive food without feeling that they must disclose private information. Outreach conversations were most useful when they respected that choice and made clear what ERI could and could not provide.</p>
              <p className="mt-4 text-slate-600">This approach helped connect the event to health, family support, education, protection, and documentation pathways. It also gave local leaders a clearer picture of where follow-up would be valuable.</p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-navy">Objectives</h2>
              <ul className="mt-4 list-inside list-disc space-y-3 text-slate-600">
                <li>Provide food and essential supplies to street-connected families in Mlango Kubwa.</li>
                <li>Use football to build trust, encourage inclusion, and create a safe space for young people.</li>
                <li>Identify street ambassadors and local leaders for future mentorship and outreach.</li>
                <li>Strengthen partnerships with local and regional sports and child protection networks.</li>
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-navy">What responsible follow-up requires</h2>
              <p className="mt-4 text-slate-600">The event created leads, not completed cases. Follow-up requires confirming consent, prioritizing urgent safety concerns, and connecting each person to an appropriate partner. It also requires returning information to the community so that participants understand what happened after the event.</p>
              <p className="mt-4 text-slate-600">Street ambassadors can help maintain this connection, but they should not be expected to solve complex needs alone. Clear supervision and referral pathways protect both families and volunteers.</p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-navy">Making participation inclusive</h2>
              <p className="mt-4 text-slate-600">A community sports event needs to make room for different ages, abilities, confidence levels, and experiences. Not every young person will want to compete, and not every family will be comfortable in a crowded activity. Welcoming spectators, caregivers, younger children, and people who need a quieter conversation helps the event serve the whole community rather than only the strongest players.</p>
              <p className="mt-4 text-slate-600">Inclusion also means paying attention to the practical details around an activity: access to water and food, respectful language, clear rules, and adults who know how to respond to concerns. These details shape whether people experience the event as safe and belonging-oriented.</p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-navy">Safeguarding in an open community setting</h2>
              <p className="mt-4 text-slate-600">An open event brings energy and opportunity, but it also requires care. Children and young people need trusted adults, clear supervision, and a way to report discomfort or harm. Volunteers should understand that enthusiasm for sport never overrides a participant’s right to safety, privacy, and respectful treatment.</p>
              <p className="mt-4 text-slate-600">The same principle applies to conversations about street-connectedness. People should not be photographed, interviewed, or referred without appropriate consent. Safeguarding is not separate from the event’s success; it is what allows community activities to build trust responsibly.</p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-navy">Keeping the partnership active</h2>
              <p className="mt-4 text-slate-600">The strongest outcome of the Mlango Kubwa initiative will be measured after the final whistle. Regular sanitary supply support, sports-based mentorship, and continued outreach can turn a one-day gathering into a dependable relationship. That requires partners to agree on communication, referral responsibilities, and realistic timelines.</p>
              <p className="mt-4 text-slate-600">ERI’s role is to keep the wider pathway visible: immediate care, trusted follow-up, family and community engagement, and connections to services that support longer-term stability. Sport brought people together, but partnership and consistency are what help that connection last.</p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-navy">Community Engagement</h2>
              <p className="mt-4 text-slate-600">The initiative brought together residents, youth, and street-connected individuals through a football tournament for people ages 8–35, food distribution, and outreach conversations that helped ERI identify referral needs and trusted community connectors.</p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-navy">Key Outcomes</h2>
              <ul className="mt-4 list-inside list-disc space-y-3 text-slate-600">
                <li>150 individuals supported with meals.</li>
                <li>Football tournament for young people aged 8–35.</li>
                <li>Street assessments completed to identify family and welfare needs.</li>
                <li>Street ambassadors identified to support future outreach.</li>
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-navy">Partnerships</h2>
              <p className="mt-4 text-slate-600">The initiative was strengthened through collaboration with ZeroStreetChildFoundation and NFL Flag Football Africa, creating pathways for youth mentorship, sports development, and community outreach.</p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-navy">Lessons Learned</h2>
              <p className="mt-4 text-slate-600">Combining meals with sport and outreach helps ERI build trust quickly, identify community leaders, and create positive experiences that open doors for further rehabilitation support.</p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-navy">Challenges</h2>
              <p className="mt-4 text-slate-600">Delivering support in a busy urban setting required careful coordination, clear communication with families, and strong partner collaboration to ensure people received safe care and practical follow-up support.</p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-navy">Future Commitments</h2>
              <ul className="mt-4 list-inside list-disc space-y-3 text-slate-600">
                <li>Support regular sanitary supply distribution with ZeroStreetChildFoundation every two months.</li>
                <li>Develop sports-based mentorship through NFL Flag Football Africa.</li>
                <li>Scale outreach to identify more street ambassadors and referral pathways.</li>
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-navy">Mlango Kubwa outreach gallery</h2>
              <p className="mt-4 text-slate-600">A visual record of the people, movement, and shared activities that shaped the outreach day.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {['/Images/12.JPG', '/Images/K1.JPG', '/Images/K2.JPG', '/Images/K3.JPG', '/Images/K4.JPG', '/Images/K5.JPG', '/Images/K6.JPG'].map((image) => (
                  <img key={image} src={image} alt="Mlango Kubwa outreach" className="h-52 w-full rounded-2xl object-cover" />
                ))}
              </div>
            </section>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-navy p-8 text-white shadow-sm">
            <h2 className="text-xl font-semibold">Mlango Kubwa Snapshot</h2>
            <div className="mt-6 grid gap-4">
              <div className="rounded-3xl bg-cream/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-olive">Event date</p>
                <p className="mt-2 text-lg font-semibold">March 18, 2026</p>
              </div>
              <div className="rounded-3xl bg-cream/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-olive">Location</p>
                <p className="mt-2 text-lg font-semibold">Mlango Kubwa, Nairobi</p>
              </div>
              <div className="rounded-3xl bg-cream/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-olive">People supported</p>
                <p className="mt-2 text-lg font-semibold">150 meals</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-navy">Impact Statistics</h2>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li>150 individuals supported with meals.</li>
              <li>Football tournament conducted for ages 8–35.</li>
              <li>Street assessments completed.</li>
              <li>Street ambassadors identified.</li>
              <li>Partnered with ZeroStreetChildFoundation.</li>
              <li>NFL Flag Football mentorship opportunities.</li>
              <li>Sanitary pad supply commitment every two months.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-navy">Leadership Recognition</h2>
            <p className="mt-4 text-slate-600">This initiative was led by ERI’s outreach and community team and supported by partner representatives from ZeroStreetChildFoundation and NFL Flag Football Africa.</p>
            <p className="mt-4 text-sm text-slate-500">Acknowledged team members include David (Musa) Wekesa and the ERI engagement staff who coordinated the event.</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
