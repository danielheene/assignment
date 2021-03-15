import { nanoid } from 'nanoid';

import { Action, ActionType, State } from './Tweets.types';

export const initialState: State = {
  tweets: [],
  likedOnly: false,
  sortDirection: 'DESC',
  maxAge: 30,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.TWEET_ADD_NEW: {
      const newTweet = {
        ...action.payload,
        id: nanoid(10),
        isLiked: false,
      };

      return {
        ...state,
        tweets: [...state.tweets, newTweet],
      };
    }
    case ActionType.TWEET_TOGGLE_LIKE: {
      const tweet = state.tweets.find(({ id }) => id === action.payload);
      if (!tweet) return state;

      const nextTweet = {
        ...tweet,
        isLiked: !tweet.isLiked,
      };
      const otherTweets = state.tweets.filter(
        ({ id }) => id !== action.payload
      );

      return {
        ...state,
        tweets: [...otherTweets, nextTweet],
      };
    }
    case ActionType.TWEET_CLEAR_STORAGE: {
      return {
        ...state,
        tweets: initialState.tweets,
      };
    }
    case ActionType.TOGGLE_LIKED_ONLY: {
      return {
        ...state,
        likedOnly: !state.likedOnly,
      };
    }
    case ActionType.TOGGLE_SORT_DIRECTION: {
      return {
        ...state,
        sortDirection: state.sortDirection === 'ASC' ? 'DESC' : 'ASC',
      };
    }
    case ActionType.TOGGLE_MAX_AGE: {
      return {
        ...state,
        maxAge:
          state.maxAge === initialState.maxAge ? Infinity : initialState.maxAge,
      };
    }
    default:
      throw new Error();
  }
};
