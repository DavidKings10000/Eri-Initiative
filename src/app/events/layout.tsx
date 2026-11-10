import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming and past ERI Street Initiative community events.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
