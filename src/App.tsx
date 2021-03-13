import React, { ReactElement } from 'react';

import { Button } from '@components/Button';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

export const App = (): ReactElement => (
  <ThemeProvider theme={theme}>
    <Button onClick={() => console.log('clicked')}>Example Component</Button>
  </ThemeProvider>
);
