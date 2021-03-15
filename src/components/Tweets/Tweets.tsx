import React, { ReactElement, useEffect, useReducer } from 'react';
import { compareAsc, compareDesc, differenceInSeconds } from 'date-fns';
import { Subscribable } from 'rxjs';

import { AnimatedList } from '@components/AnimatedList';
import { Card } from '@components/Card/Card';
import { Controls } from '@components/Controls';
import { initialState, reducer } from './Tweets.state';
import { ActionType, Tweet } from './Tweets.types';

declare const tweets$: Subscribable<ExternalTweet>;

export const Tweets = (): ReactElement => {
  const [{ tweets, likedOnly, sortDirection, maxAge }, dispatch] = useReducer(
    reducer,
    initialState
  );

  /**
   * subscribes to rxjs store in global namespace and pushes new subscriptions to state
   */
  useEffect(() => {
    const subscription = tweets$.subscribe((newTweet) => {
      dispatch({
        type: ActionType.TWEET_ADD_NEW,
        payload: newTweet,
      });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  /* toggle like for given tweet id */
  const toggleTweetLike = (id: Tweet['id']) =>
    dispatch({
      type: ActionType.TWEET_TOGGLE_LIKE,
      payload: id,
    });

  /* delete all tweets from list in state */
  const clearTweetsStorage = () =>
    dispatch({ type: ActionType.TWEET_CLEAR_STORAGE });

  /* display only tweets that are flagged as liked */
  const toggleLikedOnly = () =>
    dispatch({ type: ActionType.TOGGLE_LIKED_ONLY });

  /* change sort direction of tweet list */
  const toggleSortDirection = () =>
    dispatch({ type: ActionType.TOGGLE_SORT_DIRECTION });

  /* only show tweets that are younger than 30s */
  const toggleMaxAge = () => dispatch({ type: ActionType.TOGGLE_MAX_AGE });

  let list = tweets;
  list = list.filter(
    ({ timestamp }) => differenceInSeconds(Date.now(), timestamp) < maxAge + 1
  );
  list = list.sort((a, b) =>
    sortDirection === 'ASC'
      ? compareAsc(a.timestamp, b.timestamp)
      : compareDesc(a.timestamp, b.timestamp)
  );
  list = list.filter(({ isLiked }) => (likedOnly ? isLiked : true));

  return (
    <>
      <Controls
        width={550}
        likedLength={list.filter(({ isLiked }) => isLiked).length}
        likedOnly={likedOnly}
        toggleLikedOnly={toggleLikedOnly}
        sortDirection={sortDirection}
        toggleSort={toggleSortDirection}
        maxAge={maxAge}
        toggleMaxAge={toggleMaxAge}
        listLength={tweets.length}
        clearList={clearTweetsStorage}
      />

      <AnimatedList width={550}>
        {list.map(({ id, account, content, isLiked }) => (
          <Card
            key={id}
            account={account}
            content={content}
            isLiked={isLiked}
            onLikeClick={() => toggleTweetLike(id)}
          />
        ))}
      </AnimatedList>
    </>
  );
};
