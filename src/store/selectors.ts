import { State } from './reducer';

export const getTweets = (state: State) => state.tweets;
export const isLoading = (state: State) => state.loading;
export const getQuery= (state: State) => state.query;
export const getTweet = (state: State) => state.tweet;