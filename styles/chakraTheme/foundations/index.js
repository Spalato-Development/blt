import { createBreakpoints } from '@chakra-ui/theme-tools';

const rem = (px) => px / 16 + 'rem';

import config from '../../../themeConfig';

const {
  colors,
  screens,
  spacing,
  borderRadius,
  borderWidth,
  boxShadow,
  widths,
  letterSpacing,
  lineHeight,
  fontWeight,
  fontFamily,
  // fontSize,
} = config;
const fromTailwindToChakra = (fonts) => {
  {
    return Object.entries(fonts).reduce((acc, [key, value]) => {
      acc[key] = value[0];
      return acc;
    }, {});
  }
};

const fontSizes = {
  // ...fromTailwindToChakra(fontSize),
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
};

const foundations = {
  breakpoints: createBreakpoints(screens),
  colors,
  space: spacing,
  border: borderWidth,
  radii: borderRadius,
  shadows: boxShadow,
  sizes: widths,
  fontSizes,
  fontWeights: fontWeight,
  fonts: fontFamily,
  letterSpacings: letterSpacing,
  lineHeights: lineHeight,
  typography: {
    fontSizes,
    fontWeights: fontWeight,
    lineHeights: lineHeight,
  },
};

export default foundations;
