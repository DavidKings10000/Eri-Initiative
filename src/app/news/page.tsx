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
    image: '/Images/F1.jpg',
  },
  {
    slug: 'juja-farm-food-drive-2025-restoring-hope-through-partnership',
    title: 'Juja Farm Food Drive 2025: Restoring Hope Through Partnership',
    date: 'January 10, 2026',
    excerpt: 'The Juja Farm initiative supported 160 beneficiaries with food, clothing, sanitary towels, infant formula, and hygiene supplies.',
    image: '/Images/7.JPG',
  },
  {
    slug: 'building-stronger-communities-through-faith-based-partnerships',
    title: 'Building Stronger Communities Through Faith-Based Partnerships',
    date: 'March 14, 2026',
    excerpt: 'ERI’s collaboration with churches and community leaders continues to strengthen support networks across the region.',
    image: '/Images/M1.jpg',
  },
  {
    slug: 'understanding-street-connectedness-why-eri-exists',
    title: 'Understanding Street-Connectedness: Why ERI Exists',
    date: 'August 22, 2026',
    excerpt: 'A closer look at the social and structural challenges that shape street-connectedness and why long-term rehabilitation matters.',
    image: '/Images/F3.jpg',
  },
  {
    slug: 'community-care-network-expands-support-for-vulnerable-families',
    title: 'Community care network expands support for vulnerable families',
    date: 'September 2, 2026',
    excerpt: 'ERI is strengthening referral pathways between faith groups, local leaders, and service providers to reach families earlier and with more dignity.',
    image: '/Images/T1.jpg',
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
            {post.image ? <img src={post.image} alt={post.title} className="h-52 w-full object-cover" /> : null}
            <div className="bg-slate-100 px-6 py-4">
              <p className="text-sm uppercase tracking-[0.25em] text-olive">{post.date}</p>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-navy">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{post.excerpt || post.summary}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-olive">{post.readTime || '10 minute read'}</p>
              <Link href={post.slug ? `/news/${post.slug}` : '/news'} className="mt-6 inline-flex rounded-full bg-olive px-4 py-2 text-sm font-semibold text-white transition hover:bg-olive/90">
                {t('read_more')}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
