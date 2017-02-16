import * as actions from './actions';

export interface State {
  tweet: undefined,
  tweets: any[],
  query: string,
  loading: boolean
}

const initialState: State = {
  tweet: null,
  tweets: [],
  query: '',
  loading: false
}


export function reducer(state = initialState, action: actions.Actions) : State {
  switch (action.type) {
    case actions.ActionTypes.SEARCH: {
      if (action.payload === '') return initialState;
      return Object.assign({}, state, {
        query: action.payload,
        loading: true
      })
    }
    case actions.ActionTypes.SET_TWEETS: {
      return Object.assign({}, state, {
        tweets: action.payload,
        loading: false
      })
    }
    case actions.ActionTypes.SET_TWEET: {
      return Object.assign({}, state, {
        tweet: action.payload
      })
    }

  }
}

