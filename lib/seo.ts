import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bookayute.com';

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BookaYute | Premium Talent Booking',
    template: '%s | BookaYute',
  },
  description:
    'Book premium talent for concerts, branded activations, festivals, and private events with a red-carpet booking experience.',
  openGraph: {
    type: 'website',
    siteName: 'BookaYute',
    url: siteUrl,
    title: 'BookaYute | Premium Talent Booking',
    description:
      'Book premium talent for concerts, branded activations, festivals, and private events with a red-carpet booking experience.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookaYute | Premium Talent Booking',
    description:
      'Book premium talent for concerts, branded activations, festivals, and private events with a red-carpet booking experience.',
  },
};

export const noIndexMetadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};
