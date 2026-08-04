async function getPosts() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blog`, { cache: 'no-store' });
    return response.ok ? await response.json() : [];
  } catch {
    return [];
  }
}

const fallbackPosts = [
  {
    title: 'ERI opens a new community referral hub',
    date: 'August 4, 2026',
    summary: 'A new collaboration with local health workers improves access to care and documentation support.',
  },
  {
    title: 'Volunteer training day connects 30 new supporters',
    date: 'July 18, 2026',
    summary: 'Our latest training workshop strengthened outreach and case follow-up practices.',
  },
];

export default async function NewsPage() {
  const posts = (await getPosts()).length ? await getPosts() : fallbackPosts;

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">News & updates</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">Stories from the field and updates from our growing network.</h1>
      </section>

      <section className="mt-10 space-y-6">
        {posts.map((post: { title: string; date?: string; published_at?: string; summary?: string; excerpt?: string }) => (
          <article key={post.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium text-olive">{post.date || post.published_at || 'Recent update'}</p>
            <h2 className="mt-2 text-xl font-semibold text-navy">{post.title}</h2>
            <p className="mt-3 text-slate-600">{post.summary || post.excerpt || 'Details coming soon.'}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
