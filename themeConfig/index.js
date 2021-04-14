const defaultTheme = require('tailwindcss/defaultTheme');

const rem = (px) => px / 16 + 'rem';
const colors = require('./colors');

module.exports = {
  colors,
  screens: {
    ...defaultTheme.screens,
  },
  spacing: {
    ...defaultTheme.spacing,
  },
  borderRadius: {
    ...defaultTheme.borderRadius,
    sm: rem(3),
  },

  borderWidth: {
    ...defaultTheme.borderWidth,
  },
  boxShadow: {
    ...defaultTheme.boxShadow,
  },
  maxWidth: {
    ...defaultTheme.maxWidth,
  },

  //Typography
  letterSpacing: {
    ...defaultTheme.letterSpacing,
    'max-w-xxl': '1400px',
  },
  lineHeight: {
    ...defaultTheme.lineHeight,
  },
  fontWeight: {
    ...defaultTheme.fontWeight,
    body: 400,
    heading: 400,
    bold: 700,
  },
  fontFamily: {
    ...defaultTheme.fontFamily,
    medium: `proxima_novamedium, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    light: `proxima_novalight, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    semibold: `proxima_novasemibold, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    script: `adinda_meliaregular`,
  },
  fontSize: {
    ...defaultTheme.fontSize,
    'f-12': rem(12),
    'f-16': rem(16),
    'f-18': rem(18),
    'f-22': rem(22),
    'f-24': rem(24),
    'f-26': rem(26),
    'f-30': rem(30),
    'f-40': rem(40),
    'f-60': rem(60),
    'f-64': rem(64),
  },
};
