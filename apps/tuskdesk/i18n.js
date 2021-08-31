module.exports = {
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: async (locale, namespace) => {
    const i18n = await import(`./locales/${locale}/common`).then(
      (m) => m.default
    );
    return i18n;
  },
};
