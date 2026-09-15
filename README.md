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

## Local Development
- `npm install`
- `npm run dev`

## Build
- `npm run build`
