import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Who ERI Street Initiative is, our team, and the journey behind our community-led rehabilitation work in Kenya.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
