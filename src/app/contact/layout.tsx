import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with ERI Street Initiative in Nairobi, Kenya.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
