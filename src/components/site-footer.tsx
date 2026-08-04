import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 ERI Street Initiative. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-olive">About</Link>
          <Link href="/contact" className="hover:text-olive">Contact</Link>
         
        </div>
      </div>
    </footer>
  );
}
