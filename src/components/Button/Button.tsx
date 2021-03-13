import React, { ReactElement, SyntheticEvent } from 'react';

import { styles } from './Button.styles';

export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  children: string;
  onClick?: (event?: SyntheticEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  children,
  onClick = () => undefined,
}: ButtonProps): ReactElement => (
  <button
    type="button"
    css={[
      styles.base,
      primary && styles.primary,
      !primary && styles.secondary,
      size === 'small' && styles.small,
      size === 'medium' && styles.medium,
      size === 'large' && styles.large,
    ]}
    onClick={onClick}
  >
    {children}
  </button>
);
