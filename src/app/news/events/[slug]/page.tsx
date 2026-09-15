import Link from 'next/link';
import { notFound } from 'next/navigation';

const eventStories = {
  'community-health-and-hope-day': {
    title: 'Community Health and Hope Day',
    date: '6 June 2025',
    location: 'Mombasa, Kenya',
    image: '/Images/M1.jpg',
    summary: 'A neighborhood outreach day focused on health referrals, counselling, and connecting families to practical support and dignity-centered care.',
    gallery: ['/Images/M1.jpg', '/Images/M2.jpg', '/Images/M4.jpg', '/Images/M5.jpg'],
    sections: [
      ['Why the day mattered', 'Health concerns are often made harder by distance, cost, missing documents, and uncertainty about where to begin. The outreach created a welcoming point of contact where families could ask questions, describe what they were experiencing, and learn about practical routes to care. The purpose was not to replace a clinic. It was to reduce the distance between a person and the support that could help them.'],
      ['Listening before referring', 'A useful referral begins with listening. Volunteers worked to understand whether a person needed an urgent health response, counselling, information, family support, or help connecting to another service. This kept the conversation focused on the person’s circumstances rather than treating every concern as the same.'],
      ['Connecting health to stability', 'Health cannot be separated from housing, food, safety, identity, and family relationships. A person who is unwell may also be unable to work, attend school, or protect a child. The day therefore treated health referrals as part of a wider rehabilitation pathway and encouraged follow-up with trusted partners.'],
      ['Dignity in community care', 'Respect was visible in the small choices made throughout the day: explaining options clearly, protecting privacy, avoiding judgment, and allowing people to decide what support they wanted. These choices help people return for care instead of avoiding services because of shame or previous negative experiences.'],
      ['What follow-up requires', 'One outreach day can identify important needs, but lasting change depends on what happens next. Follow-up means checking whether a referral was accessible, helping solve practical barriers, and returning to the conversation when a first attempt did not work. Community partners help make that continuity possible.'],
      ['Lessons for future outreach', 'The event reinforced the value of local partners, clear referral information, and volunteers who know their boundaries. Future health days can build on this by strengthening appointment follow-up, sharing safeguarding guidance, and ensuring families know how to reach support after the event closes.'],
    ],
  },
  'family-reunification-circle': {
    title: 'Family Reunification and Support Circle',
    date: '15 November 2024',
    location: 'Thika Community Hub',
    image: '/Images/F1.jpg',
    summary: 'A family-centered outreach event that brought together service providers, elders, and caregivers to support safer transitions and reconnect families.',
    gallery: ['/Images/F1.jpg', '/Images/F2.jpg', '/Images/F3.jpg', '/Images/F4.jpg'],
    sections: [
      ['Reunification needs preparation', 'Reconnecting a person with family is not simply a matter of finding a telephone number or arranging transport. Families may carry grief, conflict, fear, or unresolved practical problems. A support circle creates space to understand those realities and prepare a transition that is safer and more honest for everyone involved.'],
      ['Making room for every voice', 'A family-centered conversation should not be dominated by the loudest person in the room. Young people, caregivers, elders, and service providers may see different parts of the situation. Listening to each perspective helps the team identify both risks and strengths before decisions are made.'],
      ['Safety comes first', 'Reunification should never be treated as automatically positive. Where there is violence, exploitation, serious conflict, or another protection concern, the plan must slow down and involve the right safeguarding partners. A person’s wishes and safety are central to deciding whether, when, and how contact continues.'],
      ['Practical support after contact', 'Families may need help with documents, school, health care, housing, counselling, or livelihoods after contact is restored. Without this practical support, the pressure that contributed to separation can return quickly. Follow-up turns a hopeful conversation into a pathway with realistic next steps.'],
      ['The role of community leaders', 'Elders and local leaders can help families access trusted spaces and reduce stigma, but they should not replace specialist services. Their contribution is strongest when they support communication, respect privacy, and connect families to providers who can address complex needs.'],
      ['A patient measure of progress', 'Progress may begin with one safe conversation, a completed referral, or a family agreeing to continue meeting. It may take time before a person can return home or before a relationship becomes stable. The circle reinforced that patient, supported steps are more durable than rushed outcomes.'],
    ],
  },
  'school-readiness-and-protection-day': {
    title: 'School Readiness and Protection Day',
    date: '4 March 2024',
    location: 'Nairobi, Kenya',
    image: '/Images/10.JPG',
    summary: 'An engagement day focused on documentation support, school transition, and safeguarding awareness for youth and caregivers.',
    gallery: ['/Images/10.JPG', '/Images/11.JPG', '/Images/14.JPG', '/Images/15.jpg'],
    sections: [
      ['Returning to learning takes more than a uniform', 'School transition can be difficult after homelessness, family instability, illness, or a long period away from the classroom. A child may need documents, a safe route to school, learning support, a conversation with teachers, or help rebuilding confidence. Readiness includes all of these conditions.'],
      ['Removing practical barriers', 'Families often know that education matters but lack the time, money, documents, or guidance needed to navigate enrollment. The event connected caregivers with information and referral options so that a missing document or confusing process did not become a permanent barrier to learning.'],
      ['Protection belongs in every education plan', 'Children learn best when they are safe. Safeguarding conversations helped caregivers and young people recognize warning signs, identify trusted adults, and understand where to seek help. Protection is not an extra topic added after school planning; it is part of making attendance sustainable.'],
      ['Supporting caregivers', 'Caregivers are partners in a successful transition. They may need information about school expectations, health services, household support, or how to communicate concerns. When caregivers are listened to rather than blamed, they are better positioned to help a young person stay connected to learning.'],
      ['Working with schools and communities', 'A school transition is stronger when teachers, local leaders, families, and support organizations communicate. Shared expectations help identify a problem early and prevent a child from disappearing from the system after one missed appointment or difficult week.'],
      ['Building a longer pathway', 'Education can open future opportunities, but one event cannot carry that responsibility alone. Continued mentoring, referral follow-up, and practical family support help turn school readiness into attendance, participation, and a greater sense of possibility over time.'],
    ],
  },
} as const;

export function generateStaticParams() {
  return Object.keys(eventStories).map((slug) => ({ slug }));
}

export default async function EventStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = eventStories[slug as keyof typeof eventStories];

  if (!story) notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">News</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">{story.title}</h1>
        <p className="mt-4 text-sm text-slate-500">Published {story.date} · 10 minute read · {story.location}</p>
        <img src={story.image} alt={story.title} className="mt-8 h-80 w-full rounded-3xl object-cover" />
        <p className="mt-8 text-lg leading-8 text-slate-700">{story.summary}</p>
        <div className="mt-10 space-y-8">
          {story.sections.map(([heading, body]) => (
            <section key={heading}>
              <h2 className="text-2xl font-semibold text-navy">{heading}</h2>
              <p className="mt-3 leading-8 text-slate-600">{body}</p>
            </section>
          ))}
        </div>
        <section className="mt-10 rounded-3xl border border-slate-200 bg-cream p-6">
          <h2 className="text-xl font-semibold text-navy">Gallery</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {story.gallery.map((image) => <img key={image} src={image} alt={`${story.title} community work`} className="h-52 w-full rounded-2xl object-cover" />)}
          </div>
        </section>
        <Link href="/events" className="mt-8 inline-flex rounded-full bg-olive px-5 py-3 font-semibold text-white">Back to events</Link>
      </article>
    </main>
  );
}