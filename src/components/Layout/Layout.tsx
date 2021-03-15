import React, { ReactElement, ReactNode } from 'react';
import { Global, ThemeProvider } from '@emotion/react';

import { Theme } from '../../theme';
import { globalStyles } from './Layout.styles';

interface LayoutProps {
  children?: ReactNode | ReactNode[];
  theme: Theme;
  wallpaper: string;
}

export const Layout = ({
  children,
  theme,
  wallpaper,
}: LayoutProps): ReactElement => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles(theme, wallpaper)} />
    {children}
  </ThemeProvider>
);
