import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Shell from '@/components/shell';
import { SITE_URL } from '@/lib/site';

// Inter is self-hosted from @fontsource-variable/inter so builds never depend on reaching Google Fonts.
// The Latin subset covers every site language (English, Kiswahili, French, German, Spanish).
const inter = localFont({
  src: '../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ERI Street Initiative',
    template: '%s | ERI Street Initiative',
  },
  description:
    'ERI Street Initiative restores dignity and transforms the lives of street-connected individuals through legal identity, healthcare, education, protection, and livelihoods.',
  keywords: ['ERI', 'street-connected', 'Kenya', 'rehabilitation', 'social protection'],
  icons: {
    icon: '/Logo.png',
    shortcut: '/Logo.png',
  },
  openGraph: {
    title: 'ERI Street Initiative',
    description:
      'Community-led support for street-connected individuals in Kenya through rehabilitation and reintegration.',
    type: 'website',
    url: SITE_URL,
    siteName: 'ERI Street Initiative',
    images: [{ url: '/Images/12.JPG', alt: 'ERI Street Initiative community outreach' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable}`}>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
