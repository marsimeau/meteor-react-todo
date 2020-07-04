const locales = ['fr', 'en']
const defaultLocale = 'fr'
const langRegExp = new RegExp(`^/(${locales.join('|')})/`)

/**
 * Get default locale based on path.
 * /en/about -> en,
 * /a-propos -> fr (default).
 *
 * @param {string} path
 */
export const getPathLocale = (path = '/') => {
  const locale = (path.match(langRegExp) || [])[1]

  return locale || defaultLocale
}
