"use client";

import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { LanguageProvider } from '@/context/LanguageProvider';
import { useState } from 'react';

export default function Shell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(true);

  function toggleSidebar() {
    setCollapsed((prev) => !prev);
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-cream">
        <SiteHeader collapsed={collapsed} onToggleSidebar={toggleSidebar} />

        <div className="flex-1 min-h-screen pt-20">
          <main className="flex-1">{children}</main>
        </div>

        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}
