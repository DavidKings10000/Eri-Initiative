import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partners',
  description: 'The organizations and networks standing with ERI Street Initiative.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
