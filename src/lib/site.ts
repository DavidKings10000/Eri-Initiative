/** Production address on Vercel. Used until a custom domain is configured. */
const VERCEL_PRODUCTION_URL = 'https://eri-street-initiative-website.vercel.app';

const isLocalhost = (url: string) => /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/i.test(url);

/**
 * NEXT_PUBLIC_SITE_URL if it is set to a real public address. A localhost value
 * (e.g. copied from .env.example into the Vercel dashboard) is ignored in
 * production so live links never point at a developer's machine.
 */
export function configuredSiteUrl(): string | undefined {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!value) return undefined;
  if (process.env.NODE_ENV === 'production' && isLocalhost(value)) return undefined;
  return value.replace(/\/+$/, '');
}

/**
 * Canonical public URL of the site, without a trailing slash.
 *
 * 1. NEXT_PUBLIC_SITE_URL: set this in Vercel once the custom domain is live
 *    (e.g. https://eristreetinitiative.org).
 * 2. VERCEL_PROJECT_PRODUCTION_URL: Vercel's automatic production address.
 * 3. Production builds: the known Vercel address above.
 * 4. Local development: http://localhost:3000.
 */
function resolveSiteUrl() {
  const configured = configuredSiteUrl();
  if (configured) return configured;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.NODE_ENV === 'production') return VERCEL_PRODUCTION_URL;
  return 'http://localhost:3000';
}

export const SITE_URL = resolveSiteUrl().replace(/\/+$/, '');
