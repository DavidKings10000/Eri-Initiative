"use client";

import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { LanguageProvider } from '@/context/LanguageProvider';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

export default function Shell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(true);

  function toggleSidebar() {
    setCollapsed((prev) => !prev);
  }

  function openSidebar() {
    setCollapsed(false);
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-cream">
        <SiteHeader collapsed={collapsed} onToggleSidebar={toggleSidebar} />

        <div className={`flex-1 min-h-screen transition-all duration-200 ${collapsed ? 'ml-16' : 'ml-72'}`}>
          <main className="flex-1">{children}</main>
        </div>

        <SiteFooter />

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
