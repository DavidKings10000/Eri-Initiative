import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-semibold text-navy">Page not found</h1>
      <p className="mt-4 text-lg text-slate-700">The page you are looking for does not exist, but our mission continues.</p>
      <Link href="/" className="mt-8 rounded-full bg-navy px-6 py-3 font-semibold text-white">
        Return home
      </Link>
    </main>
  );
}
