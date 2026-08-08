import { sql } from '@vercel/postgres';

async function main() {
  await sql`CREATE TABLE IF NOT EXISTS blog_posts (
    id SERIAL PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'past',
    image TEXT NOT NULL DEFAULT '',
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;

  await sql`CREATE TABLE IF NOT EXISTS impact_metrics (
    id SERIAL PRIMARY KEY,
    key_name TEXT UNIQUE NOT NULL,
    value TEXT NOT NULL,
    description TEXT NOT NULL
  );`;

  await sql`
    INSERT INTO blog_posts (slug, title, excerpt, content, status, image, published_at)
    VALUES
      ('new-referral-hub', 'ERI opens a new community referral hub', 'A new collaboration with local health workers improves access to care and documentation support.', 'ERI is expanding community reach with a new referral hub that allows families and case workers to connect with health, legal, and education services more quickly.', 'past', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80', '2026-07-18'),
      ('volunteer-training-day', 'Volunteer training day connects 30 new supporters', 'Our latest training workshop strengthened outreach and case follow-up practices.', 'The recent volunteer training day gathered community mentors, social workers, and civic partners to enhance outreach practices and support for rehabilitation programming.', 'past', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80', '2026-08-04'),
      ('mlango-kubwa-football-food-drive-2026', 'Football, Food, and Hope: ERI’s Mlango Kubwa Outreach 2026', 'A community football and food drive in Nairobi that combined sport, hygiene support, and street outreach to build trust and identify future community leaders.', 'In Q1 2026, ERI brought together 150 people for the Mlango Kubwa Football & Food Drive, pairing food distribution with a youth football tournament and street outreach to identify mentors, ambassadors, and referral needs. ZeroStreetChildFoundation and NFL Flag Football Africa helped strengthen trust, support sanitary supply distribution, and create pathways for longer-term rehabilitation.', 'past', 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1200&q=80', '2026-03-18'),
      ('thika-food-drive-2023', 'Thika Food Drive 2023: Restoring Hope One Household at a Time', 'A community-led food drive in Thika Town that delivered care packages to 92 households and identified vulnerable people for future rehabilitation.', 'On December 23, 2023, ERI convened partners at the Chief’s Office in Thika Town to deliver food, clothing, sanitary supplies, books and toys to more than 150 beneficiaries. The event exceeded its target of 60 households, raised KES 40,000 in donations, and helped establish a street ambassador network with local leaders, assistant chiefs and Nyumba Kumi representatives.', 'past', 'https://images.unsplash.com/photo-1522175784667-8f5565b0c805?auto=format&fit=crop&w=1200&q=80', '2023-12-23')
    ON CONFLICT (slug) DO NOTHING;
  `;

  await sql`
    INSERT INTO impact_metrics (key_name, value, description)
    VALUES
      ('people_supported', '1,240+', 'People supported through rehabilitation and referral pathways.'),
      ('identity_documents_supported', '612', 'Identity documents supported through legal aid and follow-up support.'),
      ('referral_partners', '18', 'Community and institutional referral partners.'),
      ('community_volunteers', '94', 'Community volunteers active in outreach and practical support.'),
      ('mlango_kubwa_meals', '150', 'Individuals supported with meals during the Mlango Kubwa Football & Food Drive 2026.'),
      ('mlango_kubwa_football', '8–35', 'Football tournament age range for the Mlango Kubwa outreach.'),
      ('mlango_kubwa_ambassadors', 'Street ambassadors', 'Street ambassadors identified through the outreach and tournament process.'),
      ('mlango_kubwa_partnership', 'ZeroStreetChildFoundation & NFL Flag Football Africa', 'Local and regional partners supporting community outreach, mentorship and sports development.'),
      ('thika_households', '92', 'Households supported during the Thika Food Drive 2023.'),
      ('thika_beneficiaries', '150+', 'Beneficiaries reached through the Thika Food Drive 2023.'),
      ('thika_target_exceeded', '60', 'Households target surpassed during the Thika Food Drive 2023.'),
      ('thika_funds', 'KES 40,000', 'Donations raised to support the Thika Food Drive 2023.'),
      ('thika_local_donations', '70 kg rice & clothing', 'Additional support donated by Township Sublocation partners in Thika Town.'),
      ('thika_ambassadors', 'Street ambassador network', 'A network established to continue outreach after the Thika Food Drive.')
    ON CONFLICT (key_name) DO NOTHING;
  `;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
