import { Component } from '@angular/core';
import { 
  NavController,
  LoadingController
} from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { State } from '../../store/reducer';
import {
  getQuery,
  getTweets,
  isLoading
} from '../../store/selectors';
import { 
  SearchAction,
  SetTweetsAction,
  SetTweetAction
} from '../../store/actions';

import { TwitterApi } from '../../services/twitter-api';
import { TweetDetailsPage } from '../tweet-details/tweet-details.page';

@Component({
  selector: 'search-tweets-page',
  templateUrl: 'search-tweets.page.html'
})
export class SearchTweetsPage {

  private query$: Observable<String>;
  private tweets$: Observable<any[]>;
  private loading$: Observable<boolean>;
  private isSearchVisible = false;
  private loader: any;

  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private twitterApi: TwitterApi,
    private store: Store<State>
  ) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.query$ = store.select(getQuery);
    this.tweets$ = store.select(getTweets);
    this.loading$ = store.select(isLoading)
    this.loading$.subscribe(loading => this.toggleLoading(loading));

  }

  toggleLoading(loading: boolean) {
    if (loading) this.loader.present();
    else this.loader.dismiss();
  }

  toggleSearchBar() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  searchTweets(event: any) {
    const query = event.target.value;
    this.store.dispatch(new SearchAction(query));
    this.twitterApi.search(query)
      .then(tweets => new SetTweetsAction(tweets))
      .then(action => this.store.dispatch(action));
  }

  handleTweetClick(tweet: any) {
    this.store.dispatch(new SetTweetAction(tweet));
    this.navCtrl.push(TweetDetailsPage, {
      tweet: tweet
    });
  }

}
