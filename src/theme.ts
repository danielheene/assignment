import { Theme as EmotionTheme } from '@emotion/react';
import { Theme as StyledSystemTheme } from 'styled-system';

export const theme = {
  name: 'base',
  colors: {
    primary: 'hotpink',
  },
};

export type Theme = EmotionTheme & StyledSystemTheme & typeof theme;
