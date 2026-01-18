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
      <section className="relative overflow-hidden">
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
          <h1 className="text-4xl font-semibold md:text-6xl">
            Red-carpet talent experiences for stages, brands, and elevated events.
          </h1>
          <p className="max-w-xl text-sm text-white/70">
            BookaYute curates a global roster of artists, DJs, and performers. Every detail is
            managed end-to-end for seamless, luxury-level delivery.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/roster"
              className="rounded-full bg-scarlet px-6 py-3 text-xs uppercase tracking-[0.3em] text-white shadow-glow transition hover:scale-105"
            >
              Explore Roster
            </Link>
            <Link
              href="/request/featured"
              className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-scarlet"
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

      <Section className="mx-auto max-w-6xl space-y-10 px-6 pb-20">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold">Book With Us</h2>
          <span className="text-xs uppercase tracking-[0.3em] text-white/60">Three-step close</span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Tell us the vision',
              copy: 'Share dates, budget, and the energy you need on stage.',
            },
            {
              title: 'We curate the talent',
              copy: 'Our team aligns the perfect performers to match your brand.',
            },
            {
              title: 'We handle the show',
              copy: 'Contracts, logistics, and show-flow are fully managed.',
            },
          ].map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-graphite/60 p-6 shadow-glow"
            >
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-white/70">{step.copy}</p>
            </div>
          ))}
        </div>
        <Link
          href="/request/featured"
          className="block rounded-full bg-scarlet py-4 text-center text-sm uppercase tracking-[0.4em] text-white shadow-glow transition hover:scale-[1.02]"
        >
          Book Now
        </Link>
      </Section>
    </div>
  );
}
