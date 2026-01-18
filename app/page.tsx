'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import TalentCard from '../components/TalentCard';

const featuredArtists = [
  {
    name: 'Nova Keys',
    category: 'Neo Soul',
    location: 'Los Angeles, CA',
    slug: 'nova-keys',
    highlight: 'Velvet vocals with cinematic soul.',
    tags: ['Festival-ready', 'Luxury brands'],
    mediaClass: 'from-scarlet/30 via-black/70 to-ink',
  },
  {
    name: 'Crimson Pulse',
    category: 'EDM',
    location: 'Berlin, DE',
    slug: 'crimson-pulse',
    highlight: 'Festival-ready synth energy.',
    tags: ['Main stage', 'Visual show'],
    mediaClass: 'from-red-500/20 via-black/60 to-black/90',
  },
  {
    name: 'Sage Rivers',
    category: 'R&B',
    location: 'New York, NY',
    slug: 'sage-rivers',
    highlight: 'Silky vocals with moody textures.',
    tags: ['Corporate', 'Private suites'],
    mediaClass: 'from-scarlet/20 via-graphite/70 to-black/90',
  },
  {
    name: 'The Arc Royals',
    category: 'Pop',
    location: 'London, UK',
    slug: 'arc-royals',
    highlight: 'Anthemic hooks and stadium glow.',
    tags: ['Arena-ready', 'Brand events'],
    mediaClass: 'from-rose-500/20 via-black/60 to-ink',
  },
  {
    name: 'Juno Luxe',
    category: 'Afro Fusion',
    location: 'Lagos, NG',
    slug: 'juno-luxe',
    highlight: 'Global rhythms with luxe flair.',
    tags: ['International', 'Resorts'],
    mediaClass: 'from-red-400/30 via-black/70 to-black/90',
  },
  {
    name: 'Maya Volt',
    category: 'Hip-Hop',
    location: 'Atlanta, GA',
    slug: 'maya-volt',
    highlight: 'Electric charisma on every stage.',
    tags: ['Nightlife', 'Brand deals'],
    mediaClass: 'from-scarlet/25 via-black/70 to-black/90',
  },
];

const eventTypes = [
  'Festivals',
  'Corporate',
  'Weddings',
  'Brand Activations',
  'Private Parties',
  'Nightlife',
  'Hotels/Resorts',
  'Conferences',
  'Cultural Showcases',
  'Campus',
];

const marqueeEvents = [
  'Festivals',
  'Corporate',
  'Weddings',
  'Activations',
  'Private Parties',
  'Nightlife',
  'Hotels/Resorts',
  'Conferences',
  'Cultural Showcases',
  'Campus',
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
  'Vera Sol',
  'Orion Hale',
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
              href="/request"
              className="rounded-xl border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-scarlet"
            >
              Request Booking
            </Link>
          </div>
        </div>
      </section>

      <Section className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-scarlet">Events We Cover</p>
          <h2 className="text-3xl font-semibold">Booked for the moments that matter.</h2>
          <p className="max-w-2xl text-sm text-white/70">
            Tell us the event. We&rsquo;ll match the talent.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {eventTypes.map((event) => (
            <div
              key={event}
              className="rounded-2xl border border-white/10 bg-graphite/70 px-4 py-5 text-xs uppercase tracking-[0.25em] text-white/80"
            >
              {event}
            </div>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-graphite/40 py-5">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            className="flex gap-8 whitespace-nowrap px-6 text-xs uppercase tracking-[0.4em] text-white/60"
          >
            {marqueeEvents.concat(marqueeEvents).map((event, index) => (
              <span key={`${event}-${index}`}>{event}</span>
            ))}
          </motion.div>
        </div>
        <motion.div
          animate={{ boxShadow: ['0 0 0 rgba(255,47,47,0)', '0 0 28px rgba(255,47,47,0.45)', '0 0 0 rgba(255,47,47,0)'] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex rounded-2xl"
        >
          <Link
            href="/request"
            className="rounded-2xl bg-scarlet px-10 py-4 text-xs uppercase tracking-[0.35em] text-white transition hover:scale-[1.02]"
          >
            Request Talent
          </Link>
        </motion.div>
      </Section>

      <Section className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="flex items-end justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-scarlet">Featured Artists</p>
            <h2 className="text-3xl font-semibold">Curated talent with boardroom polish.</h2>
            <p className="max-w-2xl text-sm text-white/70">
              Editorial-level talent with verified readiness. Booked properly, represented
              professionally.
            </p>
          </div>
          <Link href="/roster" className="text-xs uppercase tracking-[0.3em] text-scarlet">
            See full roster
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredArtists.map((artist) => (
            <TalentCard key={artist.slug} {...artist} />
          ))}
        </div>
      </Section>

      <Section className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-scarlet">Already Signed</p>
          <h2 className="text-3xl font-semibold">Talent already moving with us.</h2>
          <p className="max-w-2xl text-sm text-white/70">
            If you&rsquo;re ready for real bookings, apply.
          </p>
        </div>
        <div className="relative space-y-4">
          <div className="pointer-events-none absolute inset-x-0 -bottom-6 h-10 bg-gradient-to-r from-transparent via-scarlet/40 to-transparent blur-2xl" />
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
        <Link
          href="/apply"
          className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-8 py-3 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-scarlet hover:bg-scarlet hover:text-white"
        >
          Join the Roster
        </Link>
      </Section>

      <Section className="mx-auto max-w-6xl space-y-10 px-6 pb-20">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-scarlet">Book With Us</p>
          <h2 className="text-3xl font-semibold">Book talent the professional way.</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-graphite/60 p-8">
            <h3 className="text-lg font-semibold">Book in 3 steps</h3>
            <div className="space-y-5 text-sm text-white/70">
              {[
                'Submit the request.',
                'We confirm availability + terms.',
                'You get the show.',
              ].map((step, index) => (
                <div key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-xs text-scarlet">
                    0{index + 1}
                  </span>
                  <p className="pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-graphite/50 p-8">
            <h3 className="text-lg font-semibold">Trust in every step</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                'Verified talent with executive-ready teams.',
                'Contracts, logistics, and timelines handled.',
                'Single point of contact from brief to encore.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-scarlet" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              animate={{ boxShadow: ['0 0 0 rgba(255,47,47,0)', '0 0 32px rgba(255,47,47,0.5)', '0 0 0 rgba(255,47,47,0)'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex w-full"
            >
              <Link
                href="/request"
                className="flex w-full items-center justify-center rounded-2xl bg-scarlet px-8 py-5 text-sm uppercase tracking-[0.4em] text-white transition"
              >
                Book Now
              </Link>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
}
