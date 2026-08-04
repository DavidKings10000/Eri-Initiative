import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
