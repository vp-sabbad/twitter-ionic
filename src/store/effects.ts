import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { TwitterApi } from '../services/twitter-api';
import * as actions from './actions';

@Injectable()
export class TwitterEffects {

  constructor(
    private actions$: Actions,
    private twitterApi: TwitterApi
  ) { }

  @Effect()
  search$ = this.actions$
    .ofType(actions.ActionTypes.SEARCH)
    .map((action: actions.SearchAction) => action.payload)
    .switchMap(query => {
      if (query === '') return Observable.from([]);
      else return Observable.fromPromise(this.twitterApi.search(query));
    })
    .map(tweets => new actions.SearchCompletedAction(tweets));
}
