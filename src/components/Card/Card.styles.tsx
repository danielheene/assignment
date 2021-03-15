import { css, SerializedStyles } from '@emotion/react';

import { Theme } from '../../theme';

export const cardStyles = {
  article: (theme: Theme): SerializedStyles => css`
    position: relative;
    color: ${theme.colors.dark};
    background-color: ${theme.colors.light};
    border-radius: ${theme.radii.default};
    box-shadow: ${theme.boxShadow.default};
    padding: ${theme.space.large};
  `,
  header: (theme: Theme): SerializedStyles => css`
    margin-bottom: ${theme.space.medium};
    display: flex;
    justify-content: space-between;
  `,
};
