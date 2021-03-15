import React, { ReactElement } from 'react';
import { css } from '@emotion/react';

import { FontWeight, GoogleFontLoader } from '@components/GoogleFontLoader';
import { theme } from '../../theme';

export const Header = (): ReactElement => (
  <>
    <GoogleFontLoader
      fontName="Patrick Hand SC"
      fontWeight={theme.fontWeights as FontWeight}
    />
    <h1
      css={css`
        display: flex;
        margin-bottom: 2.5rem;
        font-size: 60px;
        line-height: 1;
        font-weight: bold;
        font-family: 'Patrick Hand SC', serif;
        justify-content: center;
      `}
    >
      TWEETS
    </h1>
  </>
);
