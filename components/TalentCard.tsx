'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type TalentCardProps = {
  name: string;
  category: string;
  location: string;
  slug: string;
  tags: string[];
  highlight?: string;
  mediaClass?: string;
};

export default function TalentCard({
  name,
  category,
  location,
  slug,
  tags,
  highlight,
  mediaClass,
}: TalentCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
      className="tilt-card group relative overflow-hidden rounded-2xl border border-white/10 bg-graphite/60 p-6 shadow-glow transition"
    >
      <div className="absolute inset-0 bg-radial-glow opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative z-10 space-y-5">
        <div
          className={`flex h-40 w-full items-end rounded-2xl border border-white/10 bg-gradient-to-br p-4 text-xs uppercase tracking-[0.35em] text-white/70 ${
            mediaClass ?? 'from-scarlet/30 via-black/70 to-black/90'
          }`}
        >
          Featured
        </div>
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-scarlet/90">
            <span>{category}</span>
            <span className="text-white/40">•</span>
            <span className="text-white/60">{location}</span>
          </div>
          <h3 className="text-2xl font-semibold">{name}</h3>
          {highlight && <p className="text-sm text-white/60">{highlight}</p>}
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
        <motion.div
          animate={{ boxShadow: ['0 0 0 rgba(255,47,47,0)', '0 0 24px rgba(255,47,47,0.35)', '0 0 0 rgba(255,47,47,0)'] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex rounded-xl"
        >
          <Link
            href={`/request/${slug}`}
            className="inline-flex items-center gap-2 rounded-xl border border-scarlet/50 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-scarlet/20"
          >
            Request Booking
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
