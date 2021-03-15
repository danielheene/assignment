const colors = {
  dark: '#343a40',
  darkAccent: '#828b92',
  light: '#f8f9fa',
  lightAccent: '#e3e3e3',
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  heart: '#dc358b',
};

const breakpoints = ['40em', '52em', '64em'];

const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`,
};

const fonts = {
  body: `'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
  monospace: `SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;`,
};
const fontWeights = [400, 700];

const space = {
  small: '0.5rem',
  medium: '1rem',
  large: '1.5rem',
  xlarge: '2rem',
};

const boxShadow = {
  default: '0 0 10px rgba(125, 125, 125, 0.7)',
};

const radii = {
  default: '0.3rem',
};

export const theme = {
  space,
  colors,
  breakpoints,
  mediaQueries,
  fonts,
  fontWeights,
  boxShadow,
  radii,
};

export type Theme = typeof theme;
