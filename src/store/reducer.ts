import { findIndex } from 'lodash';
import * as actions from './actions';

export interface State {
  tweet: undefined,
  tweetIndex: number,
  tweets: any[],
  query: string,
  loading: boolean
};

const initialState: State = {
  tweet: null,
  tweetIndex: -1,
  tweets: [],
  query: '',
  loading: false
};

export function reducer(state = initialState, action: actions.Actions) : State {
  switch (action.type) {
    case actions.ActionTypes.SEARCH: {
      return action.payload === ''
        ? initialState
        : Object.assign({}, state, {
          query: action.payload,
          loading: true
        })
    }
    case actions.ActionTypes.SEARCH_COMPLETED: {
      return Object.assign({}, state, {
        tweets: action.payload,
        loading: false
      })
    }
    case actions.ActionTypes.SET_TWEET: {
      return Object.assign({}, state, {
        tweet: action.payload,
        tweetIndex: findIndex(state.tweets, {id: action.payload.id})
      })
    }
    case actions.ActionTypes.NEXT_TWEET: {
      if (state.tweetIndex < state.tweets.length - 1) {
        const tweetIndex = state.tweetIndex + 1;
        return Object.assign({}, state, {
          tweet: state.tweets[tweetIndex],
          tweetIndex
        });
      }
      return state;
    }
    case actions.ActionTypes.PREVIOUS_TWEET: {
      if (state.tweetIndex > 0) {
        const tweetIndex = state.tweetIndex - 1;
        return Object.assign({}, state, {
          tweet: state.tweets[tweetIndex],
          tweetIndex
        });
      }
      return state;
    }
  }
}
