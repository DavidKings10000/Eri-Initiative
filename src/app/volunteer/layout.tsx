import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Volunteer',
  description: 'Apply to volunteer with ERI Street Initiative in outreach, mentorship, and community support.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
