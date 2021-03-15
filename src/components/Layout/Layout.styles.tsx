import { css, SerializedStyles } from '@emotion/react';

import { Theme } from '../../theme';

export const globalStyles = (
  theme: Theme,
  wallpaper?: string
): SerializedStyles => css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: inherit;
  }

  html {
    font-size: 62.5%;
    font-family: ${theme.fonts.body};
    height: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    touch-action: manipulation;
  }

  body {
    height: 100%;
    min-height: 100%;
    color: white;
    background-color: black;
    font-size: 1.6rem;
    font-feature-settings: 'kern';
    padding-top: 4rem;

    ${wallpaper !== undefined &&
    css`
      background-image: url(${wallpaper});
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
    `}
  }

  *,
  *::before,
  *::after {
    border-width: 0;
    border-style: solid;
    box-sizing: border-box;
  }

  code,
  pre {
    font-family: ${theme.fonts.monospace};
  }
`;
