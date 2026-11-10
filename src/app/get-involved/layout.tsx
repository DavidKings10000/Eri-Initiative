import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Involved',
  description: 'Donate, volunteer, or partner with ERI Street Initiative to support street-connected individuals in Kenya.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
