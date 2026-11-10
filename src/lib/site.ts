/**
 * Canonical public URL of the site, without a trailing slash.
 *
 * 1. NEXT_PUBLIC_SITE_URL: set this in Vercel once the custom domain is live
 *    (e.g. https://eristreetinitiative.org).
 * 2. VERCEL_PROJECT_PRODUCTION_URL: Vercel's automatic production address
 *    (e.g. eri-initiative.vercel.app), so links work before a custom domain exists.
 * 3. VERCEL_URL: the address of the current deployment (preview builds).
 * 4. localhost for local development.
 */
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3000';
}

export const SITE_URL = resolveSiteUrl().replace(/\/+$/, '');
