import { noIndexMetadata } from '../../lib/seo';

export const metadata = {
  ...noIndexMetadata,
  title: 'Talent Portal',
};

export default function TalentDashboardPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 px-6 py-16">
      <h1 className="text-4xl font-semibold">Talent Portal</h1>
      <p className="text-sm text-white/70">
        Dashboard access is coming soon. Talent communications, bookings, and performance insights
        will live here.
      </p>
      <div className="rounded-3xl border border-white/10 bg-graphite/70 p-8">
        <p className="text-sm text-white/70">
          Need assistance today? Email talent@bookayute.com for priority support.
        </p>
      </div>
    </div>
  );
}
