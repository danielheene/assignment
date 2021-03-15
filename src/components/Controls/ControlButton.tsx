import React, { ReactElement, ReactNode } from 'react';

import { styles } from './ControlButton.styles';

interface ControlButtonProps {
  children?: ReactNode | ReactNode[];
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  title?: string;
}

export const ControlButton = ({
  children,
  onClick,
  disabled,
  active,
  title,
}: ControlButtonProps): ReactElement => (
  <button
    title={title}
    css={[
      styles.base,
      active === false && styles.inactive,
      disabled === true && styles.disabled,
    ]}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
