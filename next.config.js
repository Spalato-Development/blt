const withWPEHeadless = require('@wpengine/headless/nextConfig');
const slashes = require('remove-trailing-slash');
const imgHost = slashes(process.env.NEXT_PUBLIC_WORDPRESS_URL).split('/')[2];
// console.log('imgHost');

module.exports = withWPEHeadless({
  // future: {
  //   webpack5: true,
  // },
  images: {
    // domains: [`${imgHost}`, `localhost`],
    domains: [`${imgHost}`, 'localhost'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Unset client-side javascript that only works server-side
      // https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
      config.node = { fs: 'empty', module: 'empty' };
    }

    return config;
  },
});
