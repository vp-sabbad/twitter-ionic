import { initialState } from './reducer';

export const getTweets = (state = initialState) => state.tweets;
export const isLoading = (state= initialState) => state.loading;
export const getQuery= (state= initialState) => state.query;
export const getTweet = (state= initialState) => state.tweet;
