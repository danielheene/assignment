import React, { ReactElement } from 'react';

import { LikeButton } from '@components/LikeButton';
import { Tweet } from '@components/Tweets';
import { cardStyles } from './Card.styles';

interface CardProps {
  account: Tweet['account'];
  content: Tweet['content'];
  isLiked: Tweet['isLiked'];
  onLikeClick: () => void;
}

/**
 * renders a twitter-ish card
 * @constructor
 */
export const Card = ({
  account,
  content,
  isLiked,
  onLikeClick,
}: CardProps): ReactElement => {
  return (
    <article css={cardStyles.article}>
      <header css={cardStyles.header}>
        <strong>{account}</strong>
        <LikeButton isLiked={isLiked} onLikeClick={onLikeClick} />
      </header>
      <p>{content}</p>
    </article>
  );
};
