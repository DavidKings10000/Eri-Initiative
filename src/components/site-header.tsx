import Link from 'next/link';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/impact', label: 'Impact' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/partners', label: 'Partners' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-navy">
          ERI Street Initiative
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-olive">
              {item.label}
            </Link>
          ))}
        </nav>
        <a href={process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.erikenya.org'} className="rounded-full bg-olive px-4 py-2 text-sm font-semibold text-white">
          Staff login
        </a>
      </div>
    </header>
  );
}
