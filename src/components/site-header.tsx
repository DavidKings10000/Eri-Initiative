"use client";

import React, { useMemo, useState } from 'react';
import Link from "next/link";
import { Globe2, Home, Info, Layers, HeartHandshake, Users, Newspaper, Mail, Search, LogIn, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";

const navItems = [
  { href: '/', key: 'home', icon: Home },
  { href: '/about', key: 'about', icon: Info },
  { href: '/programs', key: 'programs', icon: Layers },
  { href: '/impact', key: 'impact', icon: HeartHandshake },
  { href: '/get-involved', key: 'get_involved', icon: Users },
  { href: '/partners', key: 'partners', icon: Globe2 },
  { href: '/news', key: 'news', icon: Newspaper },
  { href: '/contact', key: 'contact', icon: Mail },
];

const languages = [
  { code: 'en', label: 'English' },
  { code: 'sw', label: 'Kiswahili' },
  { code: 'fr', label: 'French' },
  { code: 'de', label: 'German' },
  { code: 'es', label: 'Spanish' },
];

type SiteHeaderProps = {
  collapsed: boolean;
  onToggleSidebar: () => void;
};

export function SiteHeader({ collapsed, onToggleSidebar }: SiteHeaderProps) {
  const { lang, setLang, t } = useLanguage();
  const [search, setSearch] = useState('');

  const filteredNavItems = useMemo(() => {
    const normalized = search.toLowerCase().trim();
    return normalized
      ? navItems.filter((item) => t(item.key).toLowerCase().includes(normalized))
      : navItems;
  }, [search, t]);

  return (
    <div role="complementary" className={`relative h-screen transform bg-white/95 transition-[width] duration-200 ${collapsed ? 'w-16' : 'w-72'} border-r border-slate-200`}>
      <div className="flex h-full flex-col justify-between px-3 py-4">
        <div>
          <div className="mb-4 flex items-center justify-between relative">
            <Link href="/" className="inline-flex items-center gap-3 font-semibold text-navy">
              <img src="/Logo.png" alt="ERI Street Initiative" className="h-10 w-10 rounded-full object-cover" />
              {!collapsed && <span className="text-lg">ERI Street Initiative</span>}
            </Link>
            <button
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              aria-expanded={!collapsed}
              onClick={onToggleSidebar}
              className="absolute right-0 top-0 z-50 rounded-full bg-cream p-2 text-slate-700 shadow-xl ring-2 ring-white"
            >
              {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
            </button>
          </div>

          {!collapsed && (
            <div className="mb-4 rounded-3xl border border-slate-200 bg-cream p-3 text-slate-700">
              <label className="block text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 mb-2">{t('search_placeholder')}</label>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-3 py-2">
                <Search className="h-4 w-4 text-olive" />
                <input
                  type="text"
                  value={search}
                  placeholder={t('search_placeholder')}
                  className="w-full border-none bg-transparent p-0 text-sm text-slate-700 outline-none"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          )}

          {!collapsed && (
            <div className="mb-4 rounded-3xl border border-slate-200 bg-cream p-3 text-slate-700">
              <label className="block text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{t('language')}</label>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as any)}
                className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-olive/80"
              >
                {languages.map((l) => (
                  <option key={l.code} value={l.code}>{t(l.code === 'en' ? 'english' : l.code === 'sw' ? 'kiswahili' : l.code === 'fr' ? 'french' : l.code === 'de' ? 'german' : 'spanish')}</option>
                ))}
              </select>
            </div>
          )}

          <nav className="space-y-2">
            {filteredNavItems.map((item) => {
              const Icon = item.icon as any;
              return (
                <Link key={item.href} href={item.href} className={`group flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-olive/10 hover:text-navy ${collapsed ? 'justify-center' : ''}`}>
                  <Icon className="h-4 w-4" />
                  {!collapsed && <span>{t(item.key)}</span>}
                </Link>
              );
            })}
            {filteredNavItems.length === 0 && !collapsed && (
              <div className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-500">
                {t('no_results')}
              </div>
            )}
          </nav>
        </div>

        <div className="mt-4">
          <a
            href={process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.erikenya.org'}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full ${collapsed ? 'px-2 py-2' : 'px-4 py-3'} text-sm font-semibold text-white bg-olive`}
          >
            <LogIn className="h-4 w-4" />
            {!collapsed && t('staff_login')}
          </a>
        </div>
      </div>
    </div>
  );
}
