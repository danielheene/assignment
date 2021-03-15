/// <reference types="react-scripts" />
/// <reference types="@emotion/react/types/css-prop" />

type ExternalTweet = {
  account: string;
  timestamp: Date;
  content: string;
};

type OneOrMany<T> = T | T[];
