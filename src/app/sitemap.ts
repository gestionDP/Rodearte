import type { MetadataRoute } from 'next';

// [PENDIENTE] — definir NEXT_PUBLIC_SITE_URL con el dominio definitivo de Rodearte.
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? '';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!baseUrl) return [];

  const legalPages = [
    'aviso-legal',
    'politica-privacidad',
    'politica-cookies',
    'condiciones-uso',
  ].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...legalPages,
  ];
}
