import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

// Pages publiques indexables uniquement (ni API, ni redirections comme /fr)
const PUBLIC_PATHS = ['', '/about', '/faq', '/contact', '/legal', '/privacy', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_PATHS.map((path) => ({ url: `${SITE_URL}${path}` }));
}
