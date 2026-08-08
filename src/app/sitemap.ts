import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://erikenya.org', lastModified: new Date() },
    { url: 'https://erikenya.org/about', lastModified: new Date() },
    { url: 'https://erikenya.org/programs', lastModified: new Date() },
    { url: 'https://erikenya.org/impact', lastModified: new Date() },
    { url: 'https://erikenya.org/get-involved', lastModified: new Date() },
    { url: 'https://erikenya.org/news', lastModified: new Date() },
    { url: 'https://erikenya.org/contact', lastModified: new Date() },
  ];
}
