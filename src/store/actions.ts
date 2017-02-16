import { Action } from '@ngrx/store';

export const ActionTypes = {
  SEARCH: 'SEARCH',
  SET_TWEET: 'SET_TWEET',
  SET_TWEETS: 'SET_TWEETS',
  SET_LOADING: 'SET_LOADING',
  NEXT_TWEET: 'NEXT_TWEET'
};

export class SearchAction implements Action {
  type = ActionTypes.SEARCH;
  constructor(public payload: string) {}
}

export class SetTweetAction implements Action {
  type = ActionTypes.SET_TWEET;
  constructor(public payload: any) {}
}

export class SetTweetsAction implements Action {
  type = ActionTypes.SET_TWEETS;
  constructor(public payload: any[]) {}
}

export class NextTweetAction implements Action {
  type = ActionTypes.NEXT_TWEET;
  constructor(public payload: any) {}
}

export class SetLoadingAction implements Action {
  type = ActionTypes.SET_LOADING;
  constructor(public payload: boolean) {}
}

export type Actions = SearchAction
  | SetTweetAction
  | SetTweetsAction
  | SetLoadingAction
  | NextTweetAction
