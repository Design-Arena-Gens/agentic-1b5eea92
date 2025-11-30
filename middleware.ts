import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ar', 'en', 'fr', 'es'],
  defaultLocale: 'ar',
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/', '/(ar|en|fr|es)/:path*']
};
