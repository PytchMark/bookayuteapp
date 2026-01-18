import { noIndexMetadata } from '../../../lib/seo';

type PrivateRosterPageProps = {
  params: { rosterSlug: string };
};

export const metadata = {
  ...noIndexMetadata,
  title: 'Private Roster',
};

export default function PrivateRosterPage({ params }: PrivateRosterPageProps) {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-6 py-16">
      <h1 className="text-3xl font-semibold">Private Roster</h1>
      <p className="text-sm text-white/70">
        This curated roster is reserved for partners. Share the link only with approved teams.
      </p>
      <div className="rounded-3xl border border-white/10 bg-graphite/70 p-8">
        <p className="text-sm text-white/70">Roster: {params.rosterSlug}</p>
      </div>
    </div>
  );
}
