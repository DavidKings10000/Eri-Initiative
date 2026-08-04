"use client";

// Footer is now integrated into the sidebar (SiteHeader)
import { SiteHeader } from '@/components/site-header';
import { LanguageProvider } from '@/context/LanguageProvider';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

export default function Shell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const stored = localStorage.getItem('eri_sidebar_collapsed');
    setCollapsed(stored === '1');
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    localStorage.setItem('eri_sidebar_collapsed', collapsed ? '1' : '0');
  }, [collapsed]);

  function toggleSidebar() {
    setCollapsed((prev) => !prev);
  }

  function openSidebar() {
    setCollapsed(false);
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream">
        <div className="min-h-screen flex">
          <SiteHeader collapsed={collapsed} onToggleSidebar={toggleSidebar} />

          <div className="flex-1 flex flex-col transition-all">
            <main className="flex-1">{children}</main>
          </div>
        </div>

        {collapsed && (
          <button
            onClick={openSidebar}
            aria-label="Open sidebar"
            className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-full bg-olive p-3 text-white shadow-md"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}
      </div>
    </LanguageProvider>
  );
}
