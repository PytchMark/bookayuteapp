import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bookayute.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/roster', '/apply'];
  const talent = ['nova-keys', 'crimson-pulse', 'sage-rivers'];

  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
    })),
    ...talent.map((slug) => ({
      url: `${siteUrl}/talent/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
