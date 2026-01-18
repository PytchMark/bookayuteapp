import Link from 'next/link';

export const metadata = {
  title: 'Join the Roster',
};

export default function ApplyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-6 py-16">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-scarlet">Join the Roster</p>
        <h1 className="text-4xl font-semibold">Apply to BookaYute</h1>
        <p className="text-sm text-white/70">
          We partner with visionary performers ready for premium stages. Share your profile and we
          will follow up with next steps.
        </p>
      </div>
      <div className="rounded-3xl border border-white/10 bg-graphite/70 p-8">
        <ul className="space-y-3 text-sm text-white/70">
          <li>Artist name and stage persona</li>
          <li>Recent performance links</li>
          <li>Location and touring availability</li>
        </ul>
      </div>
      <Link
        href="mailto:roster@bookayute.com"
        className="inline-flex rounded-full bg-scarlet px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
      >
        Email the Team
      </Link>
    </div>
  );
}
