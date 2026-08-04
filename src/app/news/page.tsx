"use client";

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageProvider';

async function getPosts() {
  try {
    const response = await fetch('/api/blog');
    return response.ok ? await response.json() : [];
  } catch {
    return [];
  }
}

const fallbackEvents = [
  {
    title: 'Community referral hub opens',
    date: 'July 18, 2026',
    status: 'past',
    summary: 'Local partners now have a shared space to connect people with healthcare, identity support, and psychosocial care.',
  },
  {
    title: 'Volunteer training day',
    date: 'August 4, 2026',
    status: 'past',
    summary: 'A successful training session strengthened outreach and follow-up for our rehabilitation pathway.',
  },
  {
    title: 'Partner strategy summit',
    date: 'September 24, 2026',
    status: 'upcoming',
    summary: 'A strategic workshop with community, government and health partners to expand service access.',
  },
  {
    title: 'Annual impact review',
    date: 'December 1, 2026',
    status: 'future',
    summary: 'Planning our next year of work with new milestones for identification and reintegration.',
  },
];

const statusOrder = ['past', 'upcoming', 'future'] as const;

export default function NewsPage() {
  const { t } = useLanguage();
  const [posts, setPosts] = useState<any[]>(fallbackEvents);

  useEffect(() => {
    getPosts().then((data) => {
      if (data?.length) setPosts(data);
    });
  }, []);

  const statusLabels: Record<typeof statusOrder[number], string> = {
    past: t('status_past'),
    upcoming: t('status_upcoming'),
    future: t('status_future'),
  };

  const events = statusOrder.map((status) => ({
    status,
    items: posts.filter((event: any) => event.status === status),
  }));

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <section className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
        <div className="relative h-72 bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1400&q=80"
            alt="Community event"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 text-white md:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-olive">{t('news')}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">{t('news_title')}</h1>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-10 lg:grid-cols-3">
        {events.map((group) => (
          <div key={group.status} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-navy">{statusLabels[group.status]}</h2>
            <div className="mt-4 space-y-4">
              {(group.items.length ? group.items : [{ title: t('no_entries_yet'), date: '', summary: t('details_coming_soon'), image: 'https://images.unsplash.com/photo-1532074205216-d0e1f0c41f8c?auto=format&fit=crop&w=800&q=60' }]).map((post: any) => (
                <article key={post.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-cream shadow-sm">
                  <img
                    src={post.image || 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=60'}
                    alt={post.title}
                    className="h-44 w-full object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{post.date || t('planned')}</p>
                    <h3 className="mt-2 text-lg font-semibold text-navy">{post.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{post.summary || post.excerpt || t('details_coming_soon')}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
