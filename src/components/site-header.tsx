"use client";

import React, { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { Home, Info, Layers, HeartHandshake, Users, Newspaper, Mail, Search, Menu, X, CalendarDays } from 'lucide-react';
import { translations, useLanguage } from '@/context/LanguageProvider';

const navItems = [
  { href: '/', key: 'home', icon: Home },
  { href: '/about', key: 'about', icon: Info },
  { href: '/programs', key: 'programs', icon: Layers },
  { href: '/impact', key: 'impact', icon: HeartHandshake },
  { href: '/get-involved', key: 'get_involved', icon: Users },
  { href: '/news', key: 'news', icon: Newspaper },
  { href: '/events', key: 'events', icon: CalendarDays },
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
    if (!normalized) return navItems;

    return navItems.filter((item) => {
      const translatedValues = Object.values(translations).map((locale) => locale[item.key]?.toLowerCase() ?? '');
      const searchTerms = [
        t(item.key).toLowerCase(),
        item.href.toLowerCase(),
        item.key.toLowerCase().replace(/_/g, ' '),
        ...translatedValues,
      ];

      return searchTerms.some((value) => value.includes(normalized));
    });
  }, [search, t]);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const navLinkClasses =
    'group relative inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-navy';

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="inline-flex items-center gap-3 font-semibold text-navy">
            <img src="/Logo.png" alt="ERI Street Initiative" className="h-10 w-10 rounded-full object-cover" />
            <span className="hidden text-lg sm:inline">ERI Street Initiative</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3">
          <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
            {filteredNavItems.map((item) => {
              const Icon = item.icon as any;
              return (
                <Link key={item.href} href={item.href} className={navLinkClasses}>
                  <span className="relative flex items-center gap-2 pb-1">
                    <Icon className="h-4 w-4" />
                    <span>{t(item.key)}</span>
                    <span className="absolute inset-x-0 -bottom-1 h-[3px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 shadow-[0_0_12px_rgba(251,191,36,0.9)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                </Link>
              );
            })}
            {filteredNavItems.length === 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500">
                {t('no_results')}
              </div>
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-2 rounded-full border border-slate-300 bg-cream px-3 py-2 shadow-sm">
              <button
                type="button"
                aria-label={t('search_placeholder')}
                onClick={() => searchInputRef.current?.focus()}
                className="inline-flex items-center justify-center text-slate-600 transition hover:text-navy"
              >
                <Search className="h-4 w-4 text-olive" />
              </button>
              <input
                ref={searchInputRef}
                type="text"
                value={search}
                placeholder={t('search_placeholder')}
                className="w-32 border-none bg-transparent p-0 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                onChange={(e) => setSearch(e.target.value)}
                aria-label={t('search_placeholder')}
              />
            </div>

            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as any)}
              aria-label={t('language')}
              className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-olive/80"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {t(l.code === 'en' ? 'english' : l.code === 'sw' ? 'kiswahili' : l.code === 'fr' ? 'french' : l.code === 'de' ? 'german' : 'spanish')}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            aria-label={collapsed ? 'Open navigation menu' : 'Close navigation menu'}
            aria-expanded={!collapsed}
            onClick={onToggleSidebar}
            className="inline-flex items-center justify-center rounded-full bg-cream p-2 text-slate-700 shadow-sm md:hidden"
          >
            {collapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {!collapsed && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav aria-label="Mobile navigation" className="grid gap-2">
            {filteredNavItems.map((item) => {
              const Icon = item.icon as any;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => onToggleSidebar()}
                  className="group relative flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-olive/10 hover:text-navy"
                >
                  <span className="relative flex w-full items-center gap-3 pb-1">
                    <Icon className="h-4 w-4" />
                    <span>{t(item.key)}</span>
                    <span className="absolute inset-x-0 -bottom-1 h-[3px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 shadow-[0_0_12px_rgba(251,191,36,0.9)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
