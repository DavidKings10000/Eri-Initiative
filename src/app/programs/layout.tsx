import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programs',
  description: 'ERI programs supporting street-connected people with legal identity, healthcare, education, protection, and livelihoods.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
