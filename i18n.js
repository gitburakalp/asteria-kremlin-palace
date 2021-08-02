const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  ignoreRoutes: ['/.next/', '/static/', '/public/', '/img/', '/locales/', 'robots.txt', 'sitemap.xml', 'favicon.ico'],
  defaultLanguage: 'en',
  otherLanguages: ['tr', 'de', 'ru'],
  localeSubpaths: {
    tr: 'tr',
    ru: 'ru',
    de: 'de',
  },
  localePath: 'public/locales',
  initialLanguage: 'en',
  fallbackLng: 'en',
  browserLanguageDetection: false,
  serverLanguageDetection: false,
});

NextI18NextInstance.i18n.languages = ['en', 'tr', 'de', 'ru'];

module.exports = NextI18NextInstance;
