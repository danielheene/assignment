export interface Tweet extends ExternalTweet {
  id: string;
  isLiked: boolean;
}

export interface State {
  tweets: Tweet[];
  likedOnly: boolean;
  sortDirection: 'ASC' | 'DESC';
  maxAge: number;
}

export enum ActionType {
  TWEET_ADD_NEW = 'TWEET_ADD_NEW',
  TWEET_TOGGLE_LIKE = 'TWEET_TOGGLE_LIKE',
  TWEET_CLEAR_STORAGE = 'TWEET_CLEAR_STORAGE',
  TOGGLE_LIKED_ONLY = 'TOGGLE_LIKED_ONLY',
  TOGGLE_SORT_DIRECTION = 'TOGGLE_SORT_DIRECTION',
  TOGGLE_MAX_AGE = 'TOGGLE_MAX_AGE',
}

export type Action =
  | {
      type: ActionType.TWEET_ADD_NEW;
      payload: ExternalTweet;
    }
  | {
      type: ActionType.TWEET_TOGGLE_LIKE;
      payload: Tweet['id'];
    }
  | {
      type: ActionType.TWEET_CLEAR_STORAGE;
    }
  | {
      type: ActionType.TOGGLE_LIKED_ONLY;
    }
  | {
      type: ActionType.TOGGLE_SORT_DIRECTION;
    }
  | {
      type: ActionType.TOGGLE_MAX_AGE;
    };
