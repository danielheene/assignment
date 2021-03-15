import React, { ReactElement } from 'react';
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';

import { styles } from '@components/LikeButton/LikeButton.styles';

interface LikeButtonProps {
  isLiked: boolean;
  onLikeClick: () => void;
}

export const LikeButton = ({
  isLiked,
  onLikeClick,
}: LikeButtonProps): ReactElement => (
  <button
    type="button"
    css={[styles.base, isLiked && styles.liked]}
    onClick={onLikeClick}
  >
    {isLiked ? <RiHeartFill /> : <RiHeartLine />}
  </button>
);
