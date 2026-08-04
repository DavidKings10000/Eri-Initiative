import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://eristreetinitiative.org', lastModified: new Date() },
    { url: 'https://eristreetinitiative.org/about', lastModified: new Date() },
    { url: 'https://eristreetinitiative.org/programs', lastModified: new Date() },
    { url: 'https://eristreetinitiative.org/impact', lastModified: new Date() },
    { url: 'https://eristreetinitiative.org/get-involved', lastModified: new Date() },
    { url: 'https://eristreetinitiative.org/partners', lastModified: new Date() },
    { url: 'https://eristreetinitiative.org/news', lastModified: new Date() },
    { url: 'https://eristreetinitiative.org/contact', lastModified: new Date() },
  ];
}
