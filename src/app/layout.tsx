import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Shell from '@/components/shell';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ERI Street Initiative',
  description:
    'ERI Street Initiative restores dignity and transforms the lives of street-connected individuals through legal identity, healthcare, education, protection, and livelihoods.',
  keywords: ['ERI', 'street-connected', 'Kenya', 'rehabilitation', 'social protection'],
  openGraph: {
    title: 'ERI Street Initiative',
    description:
      'Community-led support for street-connected individuals in Kenya through rehabilitation and reintegration.',
    type: 'website',
    url: 'https://erikenya.org',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
