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
  fontSize: {
    ...defaultTheme.fontSize,
    base: rem(16),
    md: rem(18),
    l: rem(24),
    xl: rem(38),
    xxl: rem(60),
    lp: rem(24),
    h1d: rem(60),
    h2d: rem(36),
    h3d: rem(26),
    h4d: rem(22),
    upperH: rem(24),
    headingAccentd: rem(48),
    lucidad: rem(64),
  },
};
