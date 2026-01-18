'use client';

import { useState } from 'react';

export default function BookingRequestLandingPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/booking-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, talentId: 'general' }),
      });

      if (!response.ok) {
        throw new Error('Failed');
      }
      setStatus('success');
      event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-6 py-16">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-scarlet">Booking Request</p>
        <h1 className="text-4xl font-semibold">Request talent</h1>
        <p className="text-sm text-white/70">
          Share your event details and our team will respond within 24 hours.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-3xl border border-white/10 bg-graphite/70 p-8"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <input
            name="name"
            required
            placeholder="Full Name"
            className="rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white"
          />
        </div>
        <input
          name="event"
          required
          placeholder="Event Type"
          className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white"
        />
        <textarea
          name="details"
          rows={4}
          placeholder="Tell us about your event vision"
          className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white"
        />
        <button
          type="submit"
          className="rounded-full bg-scarlet px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending' : 'Submit'}
        </button>
        {status === 'success' && (
          <p className="text-xs uppercase tracking-[0.3em] text-scarlet">
            Request received. We will be in touch.
          </p>
        )}
        {status === 'error' && (
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            Unable to submit right now. Please try again shortly.
          </p>
        )}
      </form>
    </div>
  );
}
