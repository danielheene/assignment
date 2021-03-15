import { css, keyframes } from '@emotion/react';

const slideIn = keyframes`
  from {
    max-height: 0;
    margin-bottom: 0;
  }
  to {
    max-height: 20rem;
    margin-bottom: 1rem;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const animatedListStyles = {
  list: css`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin: 0 auto;
  `,
  item: css`
    list-style-type: none;
    opacity: 0;
    max-height: 0;
    animation: ${slideIn} 300ms ease-out forwards,
      ${fadeIn} 300ms ease-in-out 300ms forwards;
    box-sizing: border-box;
    margin-bottom: 0;
  `,
};
