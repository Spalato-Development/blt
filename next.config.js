const withWPEHeadless = require('@wpengine/headless/nextConfig');

module.exports = withWPEHeadless({
  // future: {
  //   webpack5: true,
  // },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Unset client-side javascript that only works server-side
      // https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
      config.node = { fs: 'empty', module: 'empty' };
    }

    return config;
  },
});
