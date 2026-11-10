import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Impact',
  description: 'The people, partners, and outcomes behind ERI Street Initiative’s rehabilitation and reintegration work.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
