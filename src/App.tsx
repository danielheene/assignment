import React, { ReactElement } from 'react';

import { FontWeight, GoogleFontLoader } from '@components/GoogleFontLoader';
import { Header } from '@components/Header';
import { Layout } from '@components/Layout';
import { Tweets } from '@components/Tweets';
import { theme } from './theme';
import wallpaper from './wallpaper.jpg';

export const App = (): ReactElement => (
  <Layout theme={theme} wallpaper={wallpaper}>
    <GoogleFontLoader
      fontName="Open Sans"
      fontWeight={theme.fontWeights as FontWeight}
    />
    <Header />
    <Tweets />
  </Layout>
);
