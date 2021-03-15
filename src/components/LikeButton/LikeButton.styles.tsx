import { css, keyframes, SerializedStyles } from '@emotion/react';

import { Theme } from '../../theme';

const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  15% {
    transform: scale(0.85);
  }
  70% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const styles = {
  base: (theme: Theme): SerializedStyles => css`
    color: ${theme.colors.heart};
    font-size: 3rem;
    width: 3rem;
    height: 3rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
  `,
  liked: (theme: Theme): SerializedStyles => css`
    color: ${theme.colors.heart};
    animation: ${bounce} 200ms ease-in-out forwards;
  `,
};
