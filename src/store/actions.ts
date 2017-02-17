import { Action } from '@ngrx/store';

export const ActionTypes = {
  SEARCH: 'SEARCH',
  SET_TWEET: 'SET_TWEET',
  SEARCH_COMPLETED: 'SEARCH_COMPLETED',
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

export class SearchCompletedAction implements Action {
  type = ActionTypes.SEARCH_COMPLETED;
  constructor(public payload: any[]) {}
}

export class NextTweetAction implements Action {
  type = ActionTypes.NEXT_TWEET;
  constructor(public payload: any) {}
}

export type Actions = SearchAction
  | SetTweetAction
  | NextTweetAction
  | SearchCompletedAction;
