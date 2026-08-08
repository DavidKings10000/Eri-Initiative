import Link from 'next/link';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="bg-[#0f2f3f] text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:flex-row md:justify-between md:gap-8 lg:px-8">
        <div className="max-w-md space-y-4">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-white">
            <img src="/Logo.png" alt="ERI Street Initiative" className="h-10 w-10 rounded-full object-cover" />
            ERI Street Initiative
          </Link>
          <p className="text-sm leading-7 text-slate-300">
            Restoring dignity and transforming the lives of street-connected individuals in Kenya through protection, education,
            healthcare, legal identity, and sustainable livelihoods.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Explore</h3>
            <div className="space-y-3 text-sm text-slate-200">
              <Link href="/about" className="block hover:text-white">About</Link>
              <Link href="/programs" className="block hover:text-white">Programs</Link>
              <Link href="/impact" className="block hover:text-white">Impact</Link>
              <Link href="/news" className="block hover:text-white">News</Link>
              <Link href="/contact" className="block hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Contact Us</h3>
            <div className="space-y-3 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-olive" />
                <span>+254 728 852 274</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-olive" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-olive" />
                <span>eriinitiative@gmail.com</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=61573327822338" aria-label="Facebook" className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/eri_initiative?igsh=aHFyYTJqbGRhYTd4" aria-label="Instagram" className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
