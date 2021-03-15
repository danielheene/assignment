import { css, SerializedStyles } from '@emotion/react';

import { Theme } from '../../theme';

export const styles = {
  container: (theme: Theme): SerializedStyles => css`
    margin: 0 auto;
    padding: 0 ${theme.space.xlarge};
  `,
  base: (theme: Theme): SerializedStyles => css`
    display: flex;
    background-color: ${theme.colors.dark};
    color: ${theme.colors.light};
    border-radius: ${theme.radii.default};
    box-shadow: ${theme.boxShadow.default};
    overflow: hidden;
  `,
};
