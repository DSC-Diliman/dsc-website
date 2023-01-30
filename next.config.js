module.exports = {
  swcMinify: true,
  compress: true,
  // The `i18n` option below and image optimization apparently aren't compatible with `next export`,
  // the command we currently use to generate the site. I'll use `next start` as our build option for now,
  // since I believe image optimization is one of the main things that makes our site run smoother.
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
