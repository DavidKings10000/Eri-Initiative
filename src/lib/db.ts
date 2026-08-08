import { sql as postgresSql } from '@vercel/postgres';

const hasDatabaseConfig = Boolean(process.env.POSTGRES_URL || process.env.DATABASE_URL || process.env.POSTGRES_PRISMA_URL);
const sql = hasDatabaseConfig ? postgresSql : null;

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  status: string;
  image: string;
  published_at: string;
};

export type ImpactMetric = {
  id: number;
  key_name: string;
  value: string;
  description: string;
};

export async function getBlogPosts() {
  if (!sql) {
    return [];
  }

  try {
    const { rows } = await sql<BlogPost>`SELECT * FROM blog_posts ORDER BY published_at DESC`;
    return rows;
  } catch {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string) {
  if (!sql) {
    return null;
  }

  try {
    const { rows } = await sql<BlogPost>`SELECT * FROM blog_posts WHERE slug = ${slug} LIMIT 1`;
    return rows[0] ?? null;
  } catch {
    return null;
  }
}

export async function getImpactMetrics() {
  if (!sql) {
    return [];
  }

  try {
    const { rows } = await sql<ImpactMetric>`SELECT * FROM impact_metrics ORDER BY id ASC`;
    return rows;
  } catch {
    return [];
  }
}
