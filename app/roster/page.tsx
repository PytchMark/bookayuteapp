import TalentCard from '../../components/TalentCard';

const roster = [
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

export const metadata = {
  title: 'Roster',
};

export default function RosterPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-scarlet">Global Talent</p>
        <h1 className="text-4xl font-semibold">Roster</h1>
        <p className="max-w-2xl text-sm text-white/70">
          A curated line-up of artists, performers, and tastemakers ready for executive-level
          bookings.
        </p>
        <p className="max-w-2xl text-sm text-white/60">
          You request. We vet, negotiate, and secure. No back-channel chaos.
        </p>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Editorial Talent Grid</h2>
          <span className="text-xs uppercase tracking-[0.3em] text-white/60">Request-ready</span>
        </div>
        <p className="max-w-2xl text-sm text-white/70">
          Each card opens a direct booking request. We respond with timelines, pricing, and
          availability.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {roster.map((artist) => (
            <TalentCard key={artist.slug} {...artist} />
          ))}
        </div>
      </section>
    </div>
  );
}
