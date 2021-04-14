const config = require('./themeConfig');
const rem = (px) => px / 16 + 'rem';

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    ...config,

    extend: {
      fontSize: {
        'f-12': rem(12),
        'f-16': rem(16),
        'f-18': rem(18),
        'f-22': rem(22),
        'f-24': rem(24),
        'f-26': rem(26),
        'f-30': rem(30),
        'f-36': rem(36),
        'f-40': rem(40),
        'f-60': rem(60),
        'f-64': rem(64),
      },
      boxShadow: {
        section: '0 0 34px 0 rgba(0, 0, 0, 0.1);',
      },
      maxWidth: {
        'max-w-1400': '1400px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
