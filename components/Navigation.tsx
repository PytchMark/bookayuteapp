'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Roster', href: '/roster' },
  { label: 'Talent Portal', href: '/dashboard' },
  { label: 'Admin', href: '/admin' },
];

export default function Navigation() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed left-0 right-0 top-0 z-40"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-[0.2em]">
          BOOKAYUTE
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.2em] text-white/70 transition hover:text-white hover:[transform:perspective(600px)_rotateX(6deg)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/apply"
            className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-scarlet hover:text-white"
          >
            Join
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
