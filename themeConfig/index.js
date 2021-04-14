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
    base: rem(15),
    base2: rem(30),
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
    'shadow-section': '0 0 34px 0',
  },
  maxWidth: {
    ...defaultTheme.maxWidth,
    'max-w-xxl': '1400px',
  },

  //Typography
  letterSpacing: {
    ...defaultTheme.letterSpacing,
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
};
