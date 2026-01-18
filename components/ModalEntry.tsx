'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModalEntry() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setOpen(true), 12000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!open) return;
    modalRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-scarlet px-6 py-3 text-xs uppercase tracking-[0.3em] text-white shadow-glow transition hover:scale-105"
      >
        Book/Join
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              tabIndex={-1}
              className="glass relative max-w-lg rounded-3xl p-8 outline-none"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 text-xs uppercase tracking-[0.3em] text-white/60"
              >
                Close
              </button>
              <h3 className="text-2xl font-semibold">Enter the Roster</h3>
              <p className="mt-2 text-sm text-white/70">
                Choose your next step. We handle every booking with white-glove precision.
              </p>
              <div className="mt-8 grid gap-4">
                <Link
                  href="/roster"
                  className="rounded-2xl border border-white/10 px-6 py-4 text-left text-sm uppercase tracking-[0.3em] text-white/80 transition hover:border-scarlet"
                  onClick={() => setOpen(false)}
                >
                  Book an Artist
                </Link>
                <Link
                  href="/apply"
                  className="rounded-2xl border border-white/10 px-6 py-4 text-left text-sm uppercase tracking-[0.3em] text-white/80 transition hover:border-scarlet"
                  onClick={() => setOpen(false)}
                >
                  Join the Roster
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
