import React, { ReactElement } from 'react';
import {
  ImSortAmountAsc,
  ImSortAmountDesc,
  MdTimer,
  MdTimerOff,
  RiDeleteBinLine,
} from 'react-icons/all';
import { RiDeleteBinFill, RiHeartFill, RiHeartLine } from 'react-icons/ri';

import { ControlButton } from './ControlButton';
import { styles } from './Controls.styles';

interface ControlsProps {
  width?: number;
  likedLength: number;
  likedOnly: boolean;
  toggleLikedOnly: () => void;
  sortDirection: string;
  toggleSort: () => void;
  maxAge: number;
  toggleMaxAge: () => void;
  listLength: number;
  clearList: () => void;
}

export const Controls = ({
  width,
  likedLength,
  likedOnly,
  toggleLikedOnly,
  sortDirection,
  toggleSort,
  maxAge,
  toggleMaxAge,
  listLength,
  clearList,
}: ControlsProps): ReactElement => (
  <nav css={[styles.container, width && { maxWidth: width }]}>
    <div css={styles.base}>
      <ControlButton
        onClick={toggleLikedOnly}
        title="toggle only liked tweets visibility"
        active={likedOnly}
      >
        {likedOnly ? <RiHeartFill /> : <RiHeartLine />}
        {likedLength}
      </ControlButton>
      <ControlButton onClick={toggleSort} title="sort tweets by date">
        {sortDirection === 'ASC' ? <ImSortAmountAsc /> : <ImSortAmountDesc />}
      </ControlButton>
      <ControlButton
        onClick={toggleMaxAge}
        title="set maximum age for tweets"
        active={maxAge !== Infinity}
      >
        {maxAge !== Infinity ? <MdTimer /> : <MdTimerOff />}
      </ControlButton>
      <ControlButton
        onClick={clearList}
        disabled={listLength === 0}
        title="empty list and wait for new tweets"
      >
        {listLength ? <RiDeleteBinFill /> : <RiDeleteBinLine />}
      </ControlButton>
    </div>
  </nav>
);
