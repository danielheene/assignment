import { css, SerializedStyles } from '@emotion/react';

import { Theme } from '../../theme';

export const styles = {
  base: (theme: Theme): SerializedStyles => css`
    font-size: 2.5rem;
    padding: ${theme.space.medium};
    flex-grow: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${theme.colors.dark};
    background-color: ${theme.colors.light};

    &:hover {
      background-color: ${theme.colors.lightAccent};
    }

    &:not(:first-of-type) {
      margin-left: 1px;
    }

    &:not(:last-of-type) {
      margin-right: 1px;
    }
  `,
  disabled: css`
    cursor: default;
  `,
  inactive: (theme: Theme): SerializedStyles => css`
    color: ${theme.colors.darkAccent};
  `,
};
