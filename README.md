# -Eri-Street-Initiative-Website
The **ERI Website** is a modern platform for Eri Street Initiative that combines a public website with a secure case management portal. It showcases ERI's mission, programs, impact, and donation opportunities while enabling authorized staff to securely manage and track rehabilitation cases through the organization's five-stage reintegration process.

## Live Site
- Public site: https://eristreetinitiative.org

## Deployment
- Hosted on Vercel with configuration in `vercel.json`
- Environment variables are managed through Vercel and the `NEXT_PUBLIC_SITE_URL` value is set to the live site domain
- Volunteer applications are sent to `eriinitiative@gmail.com` through Resend. Configure these Vercel environment variables for Production, Preview, and Development:
	- `RESEND_API_KEY`: an active Resend API key
	- `RESEND_FROM_EMAIL`: an email address or sender identity verified in Resend, for example `ERI Street Initiative <no-reply@erikenya.org>`

The volunteer form sends the applicant's name, email, phone, location, preferred date and time, interests, experience, and motivation. Without the Resend variables, the form returns a configuration error instead of implying that the application was delivered.

The contact form (`/api/contact`) uses the same Resend configuration and delivers messages to the same inbox.

## Local Development
Requires Node.js 20.9 or newer.

```bash
npm ci                         # install exact versions from package-lock.json
cp .env.example .env.local     # optional: every variable has a safe local fallback
npm run dev                    # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (Next.js core-web-vitals + TypeScript rules) |
| `npm run typecheck` | TypeScript check without emitting files |
| `npm run check` | Typecheck + lint; run before pushing |
| `npm run clean` | Delete the `.next` build cache |
| `npm run images` | Regenerate blurred image previews after adding or replacing photos (`-- --shrink` also downsizes oversized JPEGs in place) |
| `npm run seed` | Create and seed the Postgres tables (needs `DATABASE_URL` in `.env.local`) |

### Notes
- Images: use `SiteImage` (`src/components/site-image.tsx`) instead of `<img>`. It serves resized AVIF/WebP versions of the large photos in `public/Images` and shows a blurred preview while they load. Pass a `sizes` prop that matches the layout. After adding or replacing photos, run `npm run images`. Optimized images are cached for 30 days, so give a replacement photo a new filename.
- Fonts: Inter is self-hosted from `@fontsource-variable/inter`, so builds don't need to reach Google Fonts.
- Translations live in `src/context/LanguageProvider.tsx`; missing keys fall back to English.

## Build
- `npm run build`
