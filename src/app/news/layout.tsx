import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News',
  description: 'Stories and updates from ERI Street Initiative outreach, food drives, and community programs.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
