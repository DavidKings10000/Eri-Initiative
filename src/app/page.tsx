"use client";

import Link from 'next/link';
import { ArrowRight, Handshake, ShieldCheck, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { useEffect, useState } from 'react';
import { partnerOrganizations } from '@/lib/partnerOrganizations';

const values = [
  {
    title: 'Dignity first',
    text: 'We meet each person with empathy, respect, and a clear pathway to belonging.',
    icon: ShieldCheck,
  },
  {
    title: 'Community-led care',
    text: 'Our work is shaped by families, local leaders, and trusted partners in Nairobi and beyond.',
    icon: Handshake,
  },
  {
    title: 'Sustainable change',
    text: 'We connect people to skills, documentation, health care, and safe reintegration support.',
    icon: Users,
  },
];

export default function HomePage() {
  const { t } = useLanguage();
  const [slide, setSlide] = useState(0);
  const [partnerGroup, setPartnerGroup] = useState(0);
  const slides = [
    {
      title: 'Restoring dignity for street-connected Kenyans',
      image: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Connecting people to shelter, healthcare, and legal support',
      image: 'https://images.unsplash.com/photo-1523978591478-c753949ff840?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Building safer pathways to education and livelihoods',
      image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const stats = [
    { label: t('people_supported'), value: '1,860+' },
    { label: t('rehabilitation_stages'), value: '5' },
    { label: t('community_partners'), value: '18' },
  ];

  const partnerLogos = partnerOrganizations.map((partner) => ({
    name: partner.name,
    short: partner.name
      .split(' ')
      .filter((word) => word.length > 0)
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase(),
    accent: 'from-olive to-emerald-700',
    logo: partner.logo,
  }));

  const partnerGroups = partnerLogos.reduce<Array<typeof partnerLogos>>((groups, partner, index) => {
    const groupIndex = Math.floor(index / 4);
    if (!groups[groupIndex]) {
      groups[groupIndex] = [];
    }
    groups[groupIndex].push(partner);
    return groups;
  }, []);

  const aboutSections = [
    {
      title: 'The ERI system',
      text: 'ERI supports street-connected individuals with holistic support, including shelter, medical care, legal identity, counseling, and reintegration planning.',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      link: '/about',
    },
    {
      title: 'How we help',
      text: 'Our programs identify urgent needs, coordinate recovery services, and empower people with the skills and stability needed to rebuild their lives.',
      image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80',
      link: '/programs',
    },
  ];

  const workCards = [
    {
      title: 'Street outreach',
      text: 'Mobile teams connect directly with individuals on the street to deliver food, hygiene, and referrals to safe spaces.',
      image: 'https://images.unsplash.com/photo-1544717305-996b815c338c?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Case management',
      text: 'Personalized support plans ensure people receive shelter, counseling, health care, and legal documentation.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Skills & reintegration',
      text: 'Training, education, and livelihood pathways help participants move from crisis to independence.',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const flagshipItems = [
    {
      title: 'Shelter and protection',
      text: 'A flagship initiative providing safe accommodation and trauma-informed care for people transitioning off the streets.',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Legal identity access',
      text: 'We support registration, documentation, and the rights that allow people to access services and dignified opportunities.',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const featuredPrograms = [
    {
      title: 'ERI Street Ambassadors Program',
      text: 'A community-led outreach model that strengthens visibility, reporting, referrals, and engagement across neighborhoods.',
      link: '/programs',
    },
  ];

  const coastalCards = [
    {
      title: 'Safe living spaces',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Youth empowerment',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Community resilience',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPartnerGroup((prev) => (prev + 1) % partnerGroups.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [partnerGroups.length]);

  return (
    <main className="min-h-screen bg-cream text-slate-800">
      <section className="w-full overflow-hidden pt-16">
        <div className="relative h-[420px] sm:h-[580px] w-full">
          <img
            src={slides[slide].image}
            alt={slides[slide].title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-6 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-cream/80">Highlights</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">{slides[slide].title}</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {aboutSections.map((section) => (
            <div key={section.title} className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-olive">{section.title}</p>
                <p className="text-lg leading-8 text-slate-700">{section.text}</p>
                <Link href={section.link} className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <img src={section.image} alt={section.title} className="h-56 w-full rounded-[1.5rem] object-cover lg:h-[260px]" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-olive">Our work</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy">Supporting communities with practical action and care</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {workCards.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
              <img src={card.image} alt={card.title} className="h-64 w-full object-cover" />
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-navy">{card.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-olive">Featured programs</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy">Programs that deepen outreach and long-term support</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-1">
          {featuredPrograms.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-semibold text-navy">{item.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-slate-700">{item.text}</p>
                </div>
                <Link href={item.link} className="inline-flex items-center gap-2 rounded-full bg-olive px-5 py-3 text-sm font-semibold text-white">Learn more <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {flagshipItems.map((item) => (
            <div key={item.title} className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-olive">Flagship initiatives</p>
                <h3 className="text-2xl font-semibold text-navy">{item.title}</h3>
                <p className="text-lg leading-8 text-slate-700">{item.text}</p>
              </div>
              <img src={item.image} alt={item.title} className="h-80 w-full rounded-[1.5rem] object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-olive">Coastal resilience</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy">Local solutions that protect people and ecosystems</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {coastalCards.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
              <img src={card.image} alt={card.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-navy">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-olive">Trusted partners</p>
            <h2 className="mt-3 text-3xl font-semibold text-navy">Organizations and networks standing with ERI</h2>
          </div>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${partnerGroup * 100}%)` }}>
              {partnerGroups.map((group, index) => (
                <div key={`partner-group-${index}`} className="w-full flex-shrink-0">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {group.map((partner) => (
                      <div key={partner.name} className="rounded-[1.5rem] border border-slate-200 bg-cream p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100 mx-auto">
                          <img src={partner.logo} alt={`${partner.name} logo`} className="h-16 w-16 object-contain" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-navy text-center">{partner.name}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="space-y-3">
                <div className="inline-flex rounded-full bg-cream p-3 text-olive">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-navy">{value.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{value.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
