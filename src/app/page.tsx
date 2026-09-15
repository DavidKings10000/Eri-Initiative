"use client";

import Link from 'next/link';
import { ArrowRight, Handshake, ShieldCheck, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { useEffect, useState } from 'react';
import { partnerOrganizations } from '@/lib/partnerOrganizations';

const values = [
  {
    title: 'value_dignity_first',
    text: 'value_dignity_first_text',
    icon: ShieldCheck,
  },
  {
    title: 'value_community_care',
    text: 'value_community_care_text',
    icon: Handshake,
  },
  {
    title: 'value_sustainable_change',
    text: 'value_sustainable_change_text',
    icon: Users,
  },
];

export default function HomePage() {
  const { t } = useLanguage();
  const [slide, setSlide] = useState(0);
  const [partnerGroup, setPartnerGroup] = useState(0);
  const slides = [
    {
      title: 'hero_restoring_dignity',
      image: '/Images/12.JPG',
    },
    {
      title: 'hero_connecting_support',
      image: '/Images/2.jpg',
    },
    {
      title: 'hero_building_pathways',
      image: '/Images/1.jpg',
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
      title: 'home_eri_system',
      text: 'home_eri_system_text',
      image: '/Images/11.JPG',
      link: '/about',
    },
    {
      title: 'home_how_help',
      text: 'home_how_help_text',
      image: '/Images/10.JPG',
      link: '/programs',
    },
  ];

  const workCards = [
    {
      title: 'home_street_outreach',
      text: 'home_street_outreach_text',
      image: '/Images/6.JPG',
    },
    {
      title: 'home_case_management',
      text: 'home_case_management_text',
      image: '/Images/14.JPG',
    },
    {
      title: 'home_skills_reintegration',
      text: 'home_skills_reintegration_text',
      image: '/Images/15.jpg',
    },
  ];

  const flagshipItems = [
    {
      title: 'Supporting shelter and protection agencies',
      text: 'A flagship initiative providing support for safe accommodation and trauma-informed care for people transitioning off the streets.',
      image: '/Images/16.jpg',
    },
    {
      title: 'Legal identity access',
      text: 'We support registration, documentation, and the rights that allow people to access services and dignified opportunities.',
      image: '/Images/17.jpg',
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
      image: '/Images/16.jpg',
    },
    {
      title: 'Youth empowerment',
      image: '/Images/18.JPG',
    },
    {
      title: 'Community resilience',
      image: '/Images/15.jpg',
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
              <p className="text-sm uppercase tracking-[0.3em] text-cream/80">{t('highlights')}</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">{t(slides[slide].title)}</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {aboutSections.map((section) => (
            <div key={section.title} className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-olive">{t(section.title)}</p>
                <p className="text-lg leading-8 text-slate-700">{t(section.text)}</p>
                <Link href={section.link} className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                  {t('learn_more_short')} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <img src={section.image} alt={section.title} className="h-56 w-full rounded-[1.5rem] object-cover lg:h-[260px]" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-olive">{t('our_work')}</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy">{t('supporting_communities')}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {workCards.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
              <img src={card.image} alt={card.title} className="h-64 w-full object-cover" />
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-navy">{t(card.title)}</h3>
                <p className="text-sm leading-7 text-slate-600">{t(card.text)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-olive">{t('featured_programs')}</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy">{t('programs_that_deepen_outreach')}</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-1">
          {featuredPrograms.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-semibold text-navy">{item.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-slate-700">{item.text}</p>
                </div>
                <Link href={item.link} className="inline-flex items-center gap-2 rounded-full bg-olive px-5 py-3 text-sm font-semibold text-white">{t('learn_more_short')} <ArrowRight className="h-4 w-4" /></Link>
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
                <p className="text-sm uppercase tracking-[0.3em] text-olive">{t('flagship_initiatives')}</p>
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
          <p className="text-sm uppercase tracking-[0.3em] text-olive">{t('coastal_resilience')}</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy">{t('local_solutions')}</h2>
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
