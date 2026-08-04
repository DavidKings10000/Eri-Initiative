import { sql } from '@vercel/postgres';

async function main() {
  await sql`CREATE TABLE IF NOT EXISTS blog_posts (
    id SERIAL PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;

  await sql`CREATE TABLE IF NOT EXISTS impact_metrics (
    id SERIAL PRIMARY KEY,
    key_name TEXT UNIQUE NOT NULL,
    value TEXT NOT NULL,
    description TEXT NOT NULL
  );`;

  await sql`
    INSERT INTO blog_posts (slug, title, excerpt, content)
    VALUES
      ('new-referral-hub', 'ERI opens a new community referral hub', 'A new collaboration with local health workers improves access to care and documentation support.', 'ERI is expanding community reach with a new referral hub that allows families and case workers to connect with health, legal, and education services more quickly.'),
      ('volunteer-training-day', 'Volunteer training day connects 30 new supporters', 'Our latest training workshop strengthened outreach and case follow-up practices.', 'The recent volunteer training day gathered community mentors, social workers, and civic partners to enhance outreach practices and support for rehabilitation programming.')
    ON CONFLICT (slug) DO NOTHING;
  `;

  await sql`
    INSERT INTO impact_metrics (key_name, value, description)
    VALUES
      ('people_supported', '1,240+', 'People supported through rehabilitation and referral pathways.'),
      ('identity_documents_supported', '612', 'Identity documents supported through legal aid and follow-up support.'),
      ('referral_partners', '18', 'Community and institutional referral partners.'),
      ('community_volunteers', '94', 'Community volunteers active in outreach and practical support.')
    ON CONFLICT (key_name) DO NOTHING;
  `;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
