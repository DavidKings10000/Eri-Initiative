"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageProvider';

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

type JourneyEntry = {
  year: string;
  labelKey: string;
  image: string;
  gallery: Array<{ src: string; title: string; caption: string }>;
};

const board: TeamMember[] = [
  { name: 'Arafat Mukasa', role: 'Board Advisor - Innovation and Business Development', image: 'arafat.jpeg', bio: 'Arafat guides ERI’s innovation pathways, helping young people discover practical opportunities for entrepreneurship, mentorship, and long-term stability.' },
  { name: 'Rajab (Malenga) Salim', role: 'Board Advisor - Communications and Advocacy', image: 'Rajab.png', bio: 'Rajab is a passionate advocate for communications and social impact, bringing extensive experience in strategic planning and community engagement to the board.' },
];

const seniorManagement: TeamMember[] = [
  { name: 'Lorraine Njeri', role: 'Founder Eri Street Initiative', image: '/lonje.jpeg', bio: 'Lorraine is passionate about fostering an inclusive and just society, with a particular commitment to advancing the rights and opportunities of those who are often overlooked in development efforts, especially street-connected individuals and people living with cerebral palsy.' },
  { name: 'David (Musa) Wekesa', role: 'Co-Founder and Director at Eri Street Initiative', image: '/Daudi Musa.png', bio: 'Musa brings lived experience and leadership to ERI’s strategy, shaping community-centered interventions that move people toward safe reintegration. His personal journey and commitment to social change inspire ERI’s mission, ensuring programs remain compassionate, practical, and responsive to the needs of street-connected individuals.' },
  { name: 'Melissa Wairimu', role: 'Finance & Administration Lead', image: '/Mel.jpeg', bio: 'Melissa leads ERI’s financial and administrative operations, ensuring effective resource management, financial accountability, and compliance. Her commitment to responsible stewardship supports the organization’s sustainable growth and long-term mission.' },
  { name: 'Donald Kiplagat', role: 'Secretary', image: '/Dona.jpeg', bio: 'Donald serves as the Secretary of Eri Street Initiative, ensuring strong documentation, effective organizational coordination, and clear communication across the network of partners, volunteers, and supporters. He plays a key role in maintaining governance, record-keeping, and operational efficiency to support ERI’s mission.' },
  { name: 'Levis Masanta', role: 'Communications & Media Lead', image: '/masanta.jpeg', bio: 'Levis leads ERI’s communications and media efforts, helping tell the organization’s story with clarity and care. Through impactful storytelling and community engagement, he connects ERI’s work with supporters, families, partners, and the wider public, strengthening awareness and inspiring action.' },
  { name: 'Wacuka Munyiri', role: 'Chief Strategy Officer', image: '/wacuka.jpeg', bio: 'Wacuka leads the organization’s long-term strategic planning, partnership development, and organizational growth. Working closely with the leadership team, they identify opportunities to expand ERI’s impact, strengthen collaborations with government, community, and private sector partners, and ensure that every initiative aligns with the organization’s mission of restoring dignity and empowering street-connected individuals.' },
  { name: 'David Munene', role: 'Director of Technology, Innovation & Digital Systems', image: '/David Munene(Edited).png', bio: 'David oversees the organization’s digital platforms, website, and communication systems, helping connect communities, partners, and supporters to ERI’s mission. His passion for technology and innovation drives the development of digital solutions that improve outreach, collaboration, and social impact.' },
];

const values = ['value_compassion', 'value_empowerment', 'value_trust', 'value_community_development'];

const timeline: JourneyEntry[] = [
  {
    year: '2023',
    labelKey: 'timeline_eri_founded',
    image: '/Images/F1.jpg',
    gallery: [
       { src: '/Images/F5.jpg', title: '', caption: '' },
       { src: '/Images/F4.jpg', title: '', caption: '' },
       { src: '/Images/F3.jpg', title: '', caption: '' },
       { src: '/Images/F2.jpg', title: '', caption: '' },
       { src: '/Images/F1.jpg', title: '', caption: '' },
  ],
  },
  {
    year: 'Dec 2023',
    labelKey: 'timeline_thika_food_drive',
    image: '/Images/1.jpg',
    gallery: [
      { src: '/Images/02.jpg', title: '', caption: '' },
      { src: '/Images/01.jpg', title: '', caption: '' },
      { src: '/Images/T1.jpg', title: '', caption: '' },
      { src: '/Images/T2.jpg', title: '', caption: '' },
      { src: '/Images/T4.jpg', title: '', caption: '' },
      { src: '/Images/T8.jpg', title: '', caption: '' },
      { src: '/Images/T9.jpg', title: '', caption: '' },
      { src: '/Images/T10.jpg', title: '', caption: '' },
      { src: '/Images/T12.jpg', title: '', caption: '' },
      { src: '/Images/T17.jpg', title: '', caption: '' },
    ],
  },
  {
    year: 'Mar 2024',
    labelKey: 'timeline_mombasa_food_drive',
    image: '/Images/M1.jpg',
    gallery: [
      { src: '/Images/17.jpg', title: '', caption: '' },
      { src: '/Images/M2.jpg', title: '', caption: '' },
      { src: '/Images/M4.jpg', title: '', caption: '' },
      { src: '/Images/M5.jpg', title: '', caption: '' },
      { src: '/Images/M7.jpg', title: '', caption: '' },
      { src: '/Images/M8.jpg', title: '', caption: '' },
      { src: '/Images/M9.jpg', title: '', caption: '' },
 ],
  },
  {
    year: 'Dec 2025',
    labelKey: 'timeline_juja_farm_food_drive',
    image: '/Images/7.JPG',
    gallery: [
      { src: '/Images/6.JPG', title: '', caption: '' },
      { src: '/Images/14.JPG', title: '', caption: '' },
      { src: '/Images/10.JPG', title: '', caption: '' },
      { src: '/Images/5.jpg', title: '', caption: '' },
      { src: '/Images/11.JPG', title: '', caption: '' },
    ],
  },
  {
    year: '2026',
    labelKey: 'timeline_mlango_kubwa_food_drive',
    image: '/Images/12.JPG',
    gallery: [
      { src: '/Images/K1.JPG', title: '', caption: '' },
      { src: '/Images/K2.JPG', title: '', caption: '' },
      { src: '/Images/K3.JPG', title: '', caption: '' },
      { src: '/Images/K4.JPG', title: '', caption: '' },
      { src: '/Images/K5.JPG', title: '', caption: '' },
      { src: '/Images/K6.JPG', title: '', caption: '' },
    ],
  },
];

function FlipCard({ person }: { person: TeamMember }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const isActive = isHovered || isFlipped;

  return (
    <button
      type="button"
      onClick={() => setIsFlipped((prev) => !prev)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full w-full text-left"
    >
      <div className="group relative h-full min-h-[380px] [perspective:1000px]">
        <div className={`relative h-full w-full rounded-[1.75rem] border border-slate-200 bg-cream shadow-sm transition-all duration-500 [transform-style:preserve-3d] ${isActive ? '[transform:rotateY(180deg)]' : ''}`}>
          <div className="absolute inset-0 flex h-full flex-col p-5 [backface-visibility:hidden]">
            <img src={person.image} alt={person.name} className="h-40 w-full rounded-[1.2rem] object-cover sm:h-60" />
            <div className="mt-4 flex-1">
              <h3 className="text-lg font-semibold text-navy">{person.name}</h3>
              <p className="mt-1 text-sm font-medium text-olive">{person.role}</p>
            </div>
          </div>
          <div className="absolute inset-0 flex h-full flex-col justify-center rounded-[2.5rem] bg-navy p-5 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <p className="text-sm uppercase tracking-[0.25em] text-olive/80">Bio</p>
            <h3 className="mt-3 text-lg font-semibold">{person.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-200">{person.bio}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();
  const [selectedJourney, setSelectedJourney] = useState<JourneyEntry | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  useEffect(() => {
    if (!selectedJourney) return;

    const interval = window.setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % selectedJourney.gallery.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [selectedJourney]);

  useEffect(() => {
    if (!selectedJourney) return;
    setActivePhotoIndex(0);
  }, [selectedJourney]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">{t('about')}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-navy">{t('about_title')}</h1>
          <p className="text-lg leading-8 text-slate-700">ERI is a non-profit organization committed to supporting street-connected individuals in achieving social and financial self-sustainability. We serve communities in Thika and Mombasa with compassionate outreach, rehabilitation pathways, and practical support.</p>
          <p className="text-lg leading-8 text-slate-700">Founded by members who themselves benefitted from financial and social support, ERI believes that a simple helping hand can transform lives and restore dignity.</p>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">{t('mission')} & {t('vision')}</h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-navy">{t('mission')}</h3>
                <p className="mt-2 text-slate-600">{t('mission_text')}</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy">{t('vision')}</h3>
                <p className="mt-2 text-slate-600">{t('vision_text')}</p>
              </div>
            </div>
          </div>
        </section>
        <div className="rounded-3xl bg-navy p-8 text-white shadow-sm">
          <h2 className="text-2xl font-semibold">{t('values_title')}</h2>
          <ul className="mt-6 space-y-3 text-sm text-slate-200">
            {values.map((valueKey) => (
              <li key={valueKey} className="rounded-2xl bg-white/10 px-4 py-3">{t(valueKey)}</li>
            ))}
          </ul>
          <Link href="/get-involved" className="mt-8 inline-flex rounded-full bg-olive px-5 py-3 font-semibold text-white">{t('join_work')}</Link>
        </div>
      </div>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-navy">Our journey</h2>
        <div className="mt-6 space-y-4">
          {timeline.map((item) => (
            <button key={item.year} type="button" onClick={() => setSelectedJourney(item)} className="flex w-full flex-col gap-4 rounded-[1.5rem] border border-slate-200 bg-cream p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={t(item.labelKey)} className="h-20 w-20 rounded-2xl object-cover" />
                <div>
                  <span className="inline-flex items-center rounded-full bg-olive/10 px-4 py-2 text-sm font-semibold text-olive">{item.year}</span>
                  <p className="mt-3 text-slate-600">{t(item.labelKey)}</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-navy">{t('open_gallery')}</span>
            </button>
          ))}
        </div>
      </section>

      {selectedJourney ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm" onClick={() => setSelectedJourney(null)}>
          <div className="w-full max-w-5xl rounded-[2rem] border border-white/10 bg-white p-4 shadow-2xl sm:p-6" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">{selectedJourney.year}</p>
                <h3 className="text-2xl font-semibold text-navy">{t(selectedJourney.labelKey)}</h3>
              </div>
              <button type="button" onClick={() => setSelectedJourney(null)} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">{t('close')}</button>
            </div>
            <div className="mt-6">
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-cream p-3">
                <div className="relative">
                  <img key={selectedJourney.gallery[activePhotoIndex].title} src={selectedJourney.gallery[activePhotoIndex].src} alt={selectedJourney.gallery[activePhotoIndex].title} className="h-[320px] w-full rounded-[1.2rem] object-cover transition-all duration-500 sm:h-[420px]" />
                  <div className="absolute inset-0 flex items-end rounded-[1.2rem] bg-gradient-to-t from-slate-950/65 via-transparent to-transparent p-5">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cream/80">Journey highlight</p>
                      <h4 className="mt-2 text-xl font-semibold text-white">{selectedJourney.gallery[activePhotoIndex].title}</h4>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-200">{selectedJourney.gallery[activePhotoIndex].caption}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex gap-2">
                    {selectedJourney.gallery.map((photo, index) => (
                      <button key={photo.title} type="button" onClick={() => setActivePhotoIndex(index)} className={`h-2.5 rounded-full transition-all ${activePhotoIndex === index ? 'w-8 bg-olive' : 'w-2.5 bg-slate-300'}`} />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => setActivePhotoIndex((prev) => (prev === 0 ? selectedJourney.gallery.length - 1 : prev - 1))} className="rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700">Previous</button>
                    <button type="button" onClick={() => setActivePhotoIndex((prev) => (prev + 1) % selectedJourney.gallery.length)} className="rounded-full bg-olive px-3 py-2 text-sm font-semibold text-white">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-navy">The challenge we’re addressing</h2>
        <p className="mt-4 text-slate-600">Street-connectedness is shaped by poverty, homelessness, family breakdown, missed education, drug use, and weak social support systems. ERI exists to ensure that people are met with dignity, rehabilitation, and long-term pathways back into stable community life.</p>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-navy">Why ERI exists</h2>
        <p className="mt-4 text-slate-600">ERI was founded because long-term rehabilitation matters. Prevention and reintegration are equally important, and our work combines both through outreach, care, practical support, and community engagement.</p>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-navy">Long-term community engagement</h2>
        <p className="mt-4 text-slate-600">The ERI Street Ambassadors Program is one of our long-term strategies for building trust, improving collaboration, and helping communities respond earlier and more effectively.</p>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-navy">{t('board')}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {board.map((person) => (
            <FlipCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-navy">{t('senior_management')}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {seniorManagement.map((person) => (
            <FlipCard key={person.name} person={person} />
          ))}
        </div>
      </section>
    </main>
  );
}
