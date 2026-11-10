"use client";

import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { LanguageProvider } from '@/context/LanguageProvider';
import { useEffect, useState } from 'react';

export default function Shell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(true);

  function toggleSidebar() {
    setCollapsed((prev) => !prev);
  }

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (collapsed) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setCollapsed(true);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [collapsed]);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-cream">
        {/* Invisible until focused with Tab; lets keyboard users jump past the navigation. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>

        <SiteHeader collapsed={collapsed} onToggleSidebar={toggleSidebar} />

        {/* Each page renders its own <main>; this wrapper only provides spacing and the skip target. */}
        <div id="main-content" tabIndex={-1} className="flex-1 min-h-screen pt-20 outline-none">
          {children}
        </div>

        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}
