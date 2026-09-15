"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageProvider';

const events = [
  {
    slug: 'partner-strategy-summit',
    title: 'Partner Strategy Summit',
    date: 'September 24, 2026',
    status: 'upcoming',
    location: 'Nairobi, Kenya',
    summary: 'A strategic workshop with community, government and health partners to expand service access and strengthen referral pathways.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'annual-impact-review',
    title: 'Annual Impact Review',
    date: 'December 1, 2026',
    status: 'future',
    location: 'Nairobi, Kenya',
    summary: 'Planning our next year of work with new milestones for identification, education support, and community reintegration.',
    image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'mlango-kubwa-football-food-drive-2026',
    title: 'Football, Food, and Hope: ERI’s Mlango Kubwa Outreach 2026',
    date: 'March 18, 2026',
    status: 'past',
    location: 'Mlango Kubwa, Nairobi',
    summary: 'A football and food drive that paired meals with sport-based outreach to build trust and identify mentors and future street ambassadors.',
    image: '/Images/12.JPG',
    href: '/news/mlango-kubwa-football-food-drive-2026',
  },
  {
    slug: 'thika-food-drive-2023',
    title: 'Thika Food Drive 2023: Restoring Hope One Household at a Time',
    date: 'December 23, 2023',
    status: 'past',
    location: "Chief's Office, Thika Town, Kiambu County",
    summary: 'A community-led food drive that supported 92 households, exceeded outreach targets, and helped identify vulnerable people for future rehabilitation support.',
    image: '/Images/1.jpg',
    href: '/news/thika-food-drive-2023',
  },
  {
    slug: 'juja-farm-food-drive-2025',
    title: 'Juja Farm Food Drive 2025: Restoring Hope Through Partnership',
    date: 'January 10, 2026',
    status: 'past',
    location: 'Juja Farm, Kiambu County',
    summary: 'A large community outreach event that brought together volunteers, local leaders, and service partners to distribute food, clothing, and practical supplies.',
    image: '/Images/7.JPG',
    href: '/news/juja-farm-food-drive-2025-restoring-hope-through-partnership',
  },
  {
    slug: 'community-health-and-hope-day',
    title: 'Community Health and Hope Day',
    date: 'June 6, 2025',
    status: 'past',
    location: 'Mombasa, Kenya',
    summary: 'A neighborhood outreach day focused on health referrals, counselling, and connecting families to practical support and dignity-centered care.',
    image: '/Images/M1.jpg',
    href: '/news/events/community-health-and-hope-day',
  },
  {
    slug: 'family-reunification-circle',
    title: 'Family Reunification and Support Circle',
    date: 'November 15, 2024',
    status: 'past',
    location: 'Thika Community Hub',
    summary: 'A family-centred outreach event that brought together service providers, elders, and caregivers to support safer transitions and reconnect families.',
    image: '/Images/F1.jpg',
    href: '/news/events/family-reunification-circle',
  },
  {
    slug: 'school-readiness-and-protection-day',
    title: 'School Readiness and Protection Day',
    date: 'March 4, 2024',
    status: 'past',
    location: 'Nairobi, Kenya',
    summary: 'An engagement day focused on documentation support, school transition, and safeguarding awareness for youth and caregivers.',
    image: '/Images/10.JPG',
    href: '/news/events/school-readiness-and-protection-day',
  },
];

const statusOrder = ['upcoming', 'past', 'future'] as const;

type Status = (typeof statusOrder)[number];

export default function EventsPage() {
  const { t } = useLanguage();

  const grouped = statusOrder.map((status) => ({
    status,
    items: events.filter((event) => event.status === status),
  }));

  const statusLabels: Record<Status, string> = {
    upcoming: t('status_upcoming'),
    past: t('status_past'),
    future: t('status_future'),
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <section className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
        <div className="relative h-72 bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
            alt="Community events"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 text-white md:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-olive">{t('events')}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">{t('events_title')}</h1>
          </div>
        </div>
      </section>

      {grouped.map((group) => (
        <section key={group.status} className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-navy">{statusLabels[group.status]}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {group.items.map((event) => (
              <article key={event.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-cream shadow-sm">
                <img src={event.image} alt={event.title} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-olive">{event.date}</p>
                  <h3 className="mt-3 text-xl font-semibold text-navy">{event.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{event.summary}</p>
                  <p className="mt-3 text-sm text-slate-500">{event.location}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-olive">10 minute read</p>
                  <Link href={event.href || '/news'} className="mt-5 inline-flex rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy/90">
                    {t('learn_more')}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
