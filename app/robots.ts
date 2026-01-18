import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/roster', '/talent', '/categories'],
        disallow: ['/admin', '/dashboard', '/r'],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://bookayute.com'}/sitemap.xml`,
  };
}
