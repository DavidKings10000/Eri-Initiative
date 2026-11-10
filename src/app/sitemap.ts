import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

const pages = ['', '/about', '/programs', '/impact', '/get-involved', '/volunteer', '/partners', '/news', '/events', '/contact'];

const newsArticles = [
  'our-eyes-on-the-ground-introducing-the-eri-street-ambassadors-program',
  'juja-farm-food-drive-2025-restoring-hope-through-partnership',
  'building-stronger-communities-through-faith-based-partnerships',
  'understanding-street-connectedness-why-eri-exists',
  'mlango-kubwa-football-food-drive-2026',
  'thika-food-drive-2023',
];

const eventStories = ['community-health-and-hope-day', 'family-reunification-circle', 'school-readiness-and-protection-day'];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...pages.map((path) => ({ url: `${SITE_URL}${path}`, lastModified, priority: path === '' ? 1 : 0.8 })),
    ...newsArticles.map((slug) => ({ url: `${SITE_URL}/news/${slug}`, lastModified, priority: 0.6 })),
    ...eventStories.map((slug) => ({ url: `${SITE_URL}/news/events/${slug}`, lastModified, priority: 0.5 })),
  ];
}
