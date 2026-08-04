"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageProvider';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-semibold text-navy">{t('page_not_found')}</h1>
      <p className="mt-4 text-lg text-slate-700">{t('page_not_found_description')}</p>
      <Link href="/" className="mt-8 rounded-full bg-navy px-6 py-3 font-semibold text-white">
        {t('return_home')}
      </Link>
    </main>
  );
}
