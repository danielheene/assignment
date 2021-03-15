import React, { Children, ReactElement, ReactNode } from 'react';

import { animatedListStyles } from './AnimatedList.styles';

interface TweetListProps {
  children: ReactNode | ReactNode[];
  width?: number;
}

export const AnimatedList = ({
  children,
  width,
}: TweetListProps): ReactElement => (
  <ul css={[animatedListStyles.list, width && { maxWidth: width }]}>
    {Children.map(children, (child) => (
      <li css={animatedListStyles.item}>{child}</li>
    ))}
  </ul>
);
