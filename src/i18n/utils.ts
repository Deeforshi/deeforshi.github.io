import type { Locale } from './ui';

export function getLocalizedPath(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'fr') {
    return normalized;
  }
  return normalized === '/' ? '/en/' : `/en${normalized}`;
}

export function getProjectPath(locale: Locale, slug: string): string {
  return locale === 'fr' ? `/projets/${slug}` : `/en/projects/${slug}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}
