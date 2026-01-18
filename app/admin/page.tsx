import { noIndexMetadata } from '../../lib/seo';

export const metadata = {
  ...noIndexMetadata,
  title: 'Admin Portal',
};

export default function AdminDashboardPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 px-6 py-16">
      <h1 className="text-4xl font-semibold">Admin Portal</h1>
      <p className="text-sm text-white/70">
        Admin tools are being finalized. Booking approvals, roster management, and revenue insights
        will appear here.
      </p>
      <div className="rounded-3xl border border-white/10 bg-graphite/70 p-8">
        <p className="text-sm text-white/70">
          For urgent updates, contact ops@bookayute.com.
        </p>
      </div>
    </div>
  );
}
