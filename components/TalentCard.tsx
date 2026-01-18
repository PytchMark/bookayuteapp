'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type TalentCardProps = {
  name: string;
  genre: string;
  slug: string;
  highlight?: string;
};

export default function TalentCard({ name, genre, slug, highlight }: TalentCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 3, rotateY: -3 }}
      className="tilt-card group relative overflow-hidden rounded-3xl border border-white/10 bg-graphite/60 p-6 shadow-glow transition"
    >
      <div className="absolute inset-0 bg-radial-glow opacity-0 transition group-hover:opacity-100" />
      <div className="relative z-10 space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-scarlet">{genre}</p>
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-sm text-white/60">{highlight}</p>
        <Link
          href={`/request/${slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-scarlet/50 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-scarlet/20 animate-[pulse_3s_ease-in-out_infinite]"
        >
          Request Booking
        </Link>
      </div>
    </motion.div>
  );
}
