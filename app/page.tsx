'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import TalentCard from '../components/TalentCard';

const featuredArtists = [
  { name: 'Nova Keys', genre: 'Neo Soul', slug: 'nova-keys', highlight: 'Velvet vocals with cinematic soul.' },
  { name: 'Crimson Pulse', genre: 'EDM', slug: 'crimson-pulse', highlight: 'Festival-ready synth energy.' },
  { name: 'Sage Rivers', genre: 'R&B', slug: 'sage-rivers', highlight: 'Silky vocals with moody textures.' },
  { name: 'The Arc Royals', genre: 'Pop', slug: 'arc-royals', highlight: 'Anthemic hooks and stadium glow.' },
  { name: 'Juno Luxe', genre: 'Afro Fusion', slug: 'juno-luxe', highlight: 'Global rhythms with luxe flair.' },
  { name: 'Maya Volt', genre: 'Hip-Hop', slug: 'maya-volt', highlight: 'Electric charisma on every stage.' },
];

const eventTypes = [
  'Festivals',
  'Private Celebrations',
  'Corporate Summits',
  'Brand Activations',
  'Luxury Retreats',
  'Global Tours',
];

const rosterNames = [
  'Echo Monroe',
  'Kairo Nine',
  'Zahara Bloom',
  'Lux Atlantic',
  'Rio Vanta',
  'Luna Crest',
  'Nox Vale',
  'Ayana C',
];

export default function HomePage() {
  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden rounded-[32px]">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-40"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-ink" />
        </div>
        <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center gap-6 px-6 py-20">
          <p className="text-xs uppercase tracking-[0.4em] text-scarlet">Premium Talent Booking</p>
          <h1 className="text-4xl font-semibold md:text-6xl">BOOK VERIFIED TALENT.</h1>
          <p className="max-w-xl text-sm text-white/70">
            Curated roster powered by Pytch Marketing. Represented professionally. Booked
            properly.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Link
                href="/roster"
                className="rounded-xl bg-scarlet px-6 py-3 text-xs uppercase tracking-[0.3em] text-white shadow-glow transition hover:scale-105"
              >
                Explore Roster
              </Link>
            </motion.div>
            <Link
              href="/request/featured"
              className="rounded-xl border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-scarlet"
            >
              Request Booking
            </Link>
          </div>
        </div>
      </section>

      <Section className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold">Events We Cover</h2>
          <span className="text-xs uppercase tracking-[0.3em] text-white/60">Worldwide</span>
        </div>
        <p className="max-w-2xl text-sm text-white/70">
          From closed-door boardrooms to stadium-scale spectacles. No DM gymnastics.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {eventTypes.map((event) => (
            <div
              key={event}
              className="rounded-2xl border border-white/10 bg-graphite/70 p-6 text-sm uppercase tracking-[0.25em] text-white/80"
            >
              {event}
            </div>
          ))}
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-graphite/40 py-4">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            className="flex gap-8 whitespace-nowrap px-6 text-xs uppercase tracking-[0.4em] text-white/60"
          >
            {eventTypes.concat(eventTypes).map((event, index) => (
              <span key={`${event}-${index}`}>{event}</span>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold">Featured Artists</h2>
          <Link href="/roster" className="text-xs uppercase tracking-[0.3em] text-scarlet">
            See full roster
          </Link>
        </div>
        <p className="max-w-2xl text-sm text-white/70">
          Editorial-level talent with verified readiness. Booked properly, represented professionally.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredArtists.map((artist) => (
            <TalentCard key={artist.slug} {...artist} />
          ))}
        </div>
      </Section>

      <Section className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold">Already Signed</h2>
          <span className="text-xs uppercase tracking-[0.3em] text-white/60">Roster spotlight</span>
        </div>
        <p className="max-w-2xl text-sm text-white/70">
          Names that travel well, behave well, and deliver on cue.
        </p>
        <div className="space-y-4">
          {[0, 1].map((row) => (
            <div
              key={`marquee-${row}`}
              className="overflow-hidden rounded-2xl border border-white/10 bg-graphite/50 py-4"
            >
              <motion.div
                animate={{ x: row % 2 === 0 ? ['0%', '-50%'] : ['-50%', '0%'] }}
                transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
                className="flex gap-10 whitespace-nowrap px-6 text-sm uppercase tracking-[0.35em] text-white/70"
              >
                {rosterNames.concat(rosterNames).map((name, index) => (
                  <span key={`${name}-${index}`}>{name}</span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold">Trust Signals</h2>
          <span className="text-xs uppercase tracking-[0.3em] text-white/60">Proof, not hype</span>
        </div>
        <p className="max-w-2xl text-sm text-white/70">
          Contracts handled. Logistics handled. Talent vetted. Your brand protected.
        </p>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-graphite/40 py-4">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
            className="flex gap-10 whitespace-nowrap px-6 text-xs uppercase tracking-[0.4em] text-white/60"
          >
            {[
              'Verified talent',
              'Contracts managed',
              'Brand-safe roster',
              'White-glove logistics',
              'Single point of contact',
              'Global availability',
              'Agency-grade vetting',
            ]
              .concat([
                'Verified talent',
                'Contracts managed',
                'Brand-safe roster',
                'White-glove logistics',
                'Single point of contact',
                'Global availability',
                'Agency-grade vetting',
              ])
              .map((signal, index) => (
                <span key={`${signal}-${index}`}>{signal}</span>
              ))}
          </motion.div>
        </div>
      </Section>

      <Section className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold">How Booking Works</h2>
          <span className="text-xs uppercase tracking-[0.3em] text-white/60">Three steps</span>
        </div>
        <p className="max-w-2xl text-sm text-white/70">
          A clean, executive flow built for busy teams and decisive clients.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Share the brief',
              copy: 'Dates, budget, and the exact energy you expect on stage.',
            },
            {
              title: 'We curate the roster',
              copy: 'We shortlist talent that aligns with your brand and audience.',
            },
            {
              title: 'We execute',
              copy: 'Contracts, logistics, and show flow handled end-to-end.',
            },
          ].map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-graphite/60 p-6 shadow-glow"
            >
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-white/70">{step.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold">Why This Roster Exists</h2>
          <span className="text-xs uppercase tracking-[0.3em] text-white/60">The standard</span>
        </div>
        <p className="max-w-3xl text-sm text-white/70">
          Because serious bookings need serious structure. We cut the chaos, remove the guesswork,
          and make talent access feel like a boardroom decision.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: 'Verified only', copy: 'Every artist is vetted for readiness and professionalism.' },
            { title: 'Built for brands', copy: 'Contracts, timelines, and expectations stay tight.' },
            { title: 'Confidence on call', copy: 'One team, one process, no loose ends.' },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-graphite/60 p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-white/70">{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="mx-auto max-w-6xl space-y-10 px-6 pb-20">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold">Who This Is For</h2>
          <span className="text-xs uppercase tracking-[0.3em] text-white/60">Decision makers</span>
        </div>
        <p className="max-w-2xl text-sm text-white/70">
          Brand leaders, event producers, and creative directors who need talent without the noise.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: 'Luxury & lifestyle', copy: 'Premium activations that demand flawless talent.' },
            { title: 'Corporate & private', copy: 'Executive-level bookings with zero surprises.' },
            { title: 'Media & culture', copy: 'Editorial-ready talent that looks right on camera.' },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-graphite/60 p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-white/70">{item.copy}</p>
            </div>
          ))}
        </div>
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Link
            href="/request/featured"
            className="block rounded-xl bg-scarlet py-4 text-center text-sm uppercase tracking-[0.4em] text-white shadow-glow transition hover:scale-[1.02]"
          >
            Book Now
          </Link>
        </motion.div>
      </Section>
    </div>
  );
}
