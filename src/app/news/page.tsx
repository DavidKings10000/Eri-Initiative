"use client";

import Link from 'next/link';
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

const fallbackNews = [
  {
    slug: 'our-eyes-on-the-ground-introducing-the-eri-street-ambassadors-program',
    title: 'Our Eyes on the Ground: Introducing the ERI Street Ambassadors Program',
    date: 'August 8, 2026',
    excerpt: 'The ERI Street Ambassadors Program expands trusted community outreach and strengthens how ERI reaches people in need.',
  },
  {
    slug: 'juja-farm-food-drive-2025-restoring-hope-through-partnership',
    title: 'Juja Farm Food Drive 2025: Restoring Hope Through Partnership',
    date: 'January 10, 2026',
    excerpt: 'The Juja Farm initiative supported 160 beneficiaries with food, clothing, sanitary towels, infant formula, and hygiene supplies.',
  },
  {
    slug: 'building-stronger-communities-through-faith-based-partnerships',
    title: 'Building Stronger Communities Through Faith-Based Partnerships',
    date: 'March 14, 2026',
    excerpt: 'ERI’s collaboration with churches and community leaders continues to strengthen support networks across the region.',
  },
  {
    slug: 'understanding-street-connectedness-why-eri-exists',
    title: 'Understanding Street-Connectedness: Why ERI Exists',
    date: 'August 22, 2026',
    excerpt: 'A closer look at the social and structural challenges that shape street-connectedness and why long-term rehabilitation matters.',
  },
  {
    slug: 'new-community-referral-network',
    title: 'New community referral network supports street-connected households',
    date: 'August 10, 2026',
    excerpt: 'ERI partners with local leadership to build a referral system that connects families to health, protection, and legal support.',
  },
  {
    slug: 'impact-data-review',
    title: 'Impact data review highlights progress in Thika and Mombasa',
    date: 'July 22, 2026',
    excerpt: 'Recent outreach and rehabilitation work are showing increased access to services and safer pathways for street-connected people.',
  },
  {
    slug: 'youth-sports-mentorship',
    title: 'Youth sports and mentorship open new pathways in Mlango Kubwa',
    date: 'June 14, 2026',
    excerpt: 'ERI and partners are using football and training to support young people toward education and stability.',
  },
];

export default function NewsPage() {
  const { t } = useLanguage();
  const [posts, setPosts] = useState<any[]>(fallbackNews);

  useEffect(() => {
    getPosts().then((data) => {
      if (data?.length) setPosts(data);
    });
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <section className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
        <div className="relative h-72 bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
            alt="News updates"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 text-white md:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-olive">{t('news')}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">{t('news_title')}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-cream/90">{t('news_description')}</p>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-slate-100 px-6 py-4">
              <p className="text-sm uppercase tracking-[0.25em] text-olive">{post.date}</p>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-navy">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{post.excerpt || post.summary}</p>
              <Link href={`/news/${post.slug}`} className="mt-6 inline-flex rounded-full bg-olive px-4 py-2 text-sm font-semibold text-white transition hover:bg-olive/90">
                Read more
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
