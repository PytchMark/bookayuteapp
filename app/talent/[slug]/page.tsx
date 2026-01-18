import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Link from 'next/link';

const talentRoster = [
  {
    slug: 'nova-keys',
    name: 'Nova Keys',
    genre: 'Neo Soul',
    bio: 'Soulful vocalist with lush soundscapes and a velvet stage presence.',
  },
  {
    slug: 'crimson-pulse',
    name: 'Crimson Pulse',
    genre: 'EDM',
    bio: 'Festival-ready duo bringing cinematic drops and laser-focused energy.',
  },
  {
    slug: 'sage-rivers',
    name: 'Sage Rivers',
    genre: 'R&B',
    bio: 'Smooth crooner mixing contemporary R&B with timeless elegance.',
  },
];

type TalentPageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: TalentPageProps): Metadata {
  const talent = talentRoster.find((item) => item.slug === params.slug);
  if (!talent) {
    return {
      title: 'Talent Not Found',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: talent.name,
    description: `${talent.name} · ${talent.genre} performer available for premium bookings.`,
    openGraph: {
      title: talent.name,
      description: `${talent.name} · ${talent.genre} performer available for premium bookings.`,
      type: 'profile',
    },
  };
}

export default function TalentProfilePage({ params }: TalentPageProps) {
  const talent = talentRoster.find((item) => item.slug === params.slug);
  if (!talent) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: talent.name,
    description: talent.bio,
    genre: talent.genre,
    url: `https://bookayute.com/talent/${talent.slug}`,
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-6 py-16">
      <Script id="talent-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-scarlet">{talent.genre}</p>
        <h1 className="text-4xl font-semibold">{talent.name}</h1>
        <p className="max-w-2xl text-sm text-white/70">{talent.bio}</p>
      </div>
      <div className="rounded-3xl border border-white/10 bg-graphite/70 p-8">
        <h2 className="text-lg font-semibold">Performance Snapshot</h2>
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          <li>Signature set length: 60-90 minutes</li>
          <li>Available worldwide with concierge travel support</li>
          <li>Stage styling aligned to premium brand identity</li>
        </ul>
      </div>
      <Link
        href={`/request/${talent.slug}`}
        className="inline-flex rounded-full bg-scarlet px-6 py-3 text-xs uppercase tracking-[0.3em] text-white shadow-glow"
      >
        Request Booking
      </Link>
    </div>
  );
}
