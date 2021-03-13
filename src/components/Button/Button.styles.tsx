import { css } from '@emotion/react';

export const styles = {
  base: css`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  `,
  primary: css`
    color: white;
    background-color: #1ea7fd;
  `,
  secondary: css`
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset;
  `,
  small: css`
    font-size: 12px;
    padding: 10px 16px;
  `,
  medium: css`
    font-size: 14px;
    padding: 11px 20px;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 24px;
  `,
};
