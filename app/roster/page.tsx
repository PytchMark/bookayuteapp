import TalentCard from '../../components/TalentCard';

const roster = [
  { name: 'Nova Keys', genre: 'Neo Soul', slug: 'nova-keys', highlight: 'Velvet vocals with cinematic soul.' },
  { name: 'Crimson Pulse', genre: 'EDM', slug: 'crimson-pulse', highlight: 'Festival-ready synth energy.' },
  { name: 'Sage Rivers', genre: 'R&B', slug: 'sage-rivers', highlight: 'Silky vocals with moody textures.' },
  { name: 'The Arc Royals', genre: 'Pop', slug: 'arc-royals', highlight: 'Anthemic hooks and stadium glow.' },
  { name: 'Juno Luxe', genre: 'Afro Fusion', slug: 'juno-luxe', highlight: 'Global rhythms with luxe flair.' },
  { name: 'Maya Volt', genre: 'Hip-Hop', slug: 'maya-volt', highlight: 'Electric charisma on every stage.' },
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
