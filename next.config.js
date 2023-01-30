module.exports = {
  swcMinify: true,
  compress: true,
  // The `i18n` option below apparently isn't compatible with `next export`, the command we use
  // to generate the site. From what I understand, this is a compromise between performance and SEO;
  // I'll go with the former for now.
  //
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
};
