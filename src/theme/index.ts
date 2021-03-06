import breakpointsMap from './breakpoints';
import * as modes from './modes';

const colors = { modes: { ...modes } };

const space = { none: 0, xxs: 8, xs: 16, s: 32, m: 52, l: 64, xl: 96, xxl: 256, xxxl: 512 };

const fonts = {
  body: 'Eina',
};

const fontSizes = {
  h1: '3rem',
  h2: '2.5rem',
  h2Mobile: '1.625rem',
  h3: '1.5rem',
  h3Mobile: '1.25rem',
  h4: '1.75rem',
  h6: '1rem',
  h7: '0.75rem',
  h8: '0.625rem',
  bodyS: '0.875rem',
  bodyL: '1.125rem',
};

const fontWeights = { light: 100, regular: 400, bold: 700 };

const breakpoints = Object.values(breakpointsMap);

const lineHeights = { base: 1.5, heading: 1.25 };

const letterSpacings = {
  regularS: '0.01em',
  regular: '0.1em',
  mediumS: '0.05em',
  medium: '0.5em',
  looseS: '0.08em',
  loose: '0.8em',
};

const shadows = {};

const radii = {};

const sizes = {
  emailForm: 400,
  productCard: { width: 260, height: 544 },
  button: 56,
  input: 48,
};

const transitions = { html: '0.5s', buttons: '0.4s' };

export default {
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
  breakpoints,
  lineHeights,
  letterSpacings,
  shadows,
  radii,
  sizes,
  transitions,
};
