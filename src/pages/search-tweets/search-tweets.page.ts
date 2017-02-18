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
  SetTweetAction
} from '../../store/actions';

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
    private store: Store<State>
  ) {
    this.query$ = store.select(getQuery);
    this.tweets$ = store.select(getTweets);
    this.loading$ = store.select(isLoading);
    this.loading$.subscribe(this.toggleLoading.bind(this));
  }

  toggleLoading(loading) {
    if (loading) this.showLoading();
    else this.hideLoading();
  }

  showLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }

  hideLoading() {
    if (this.loader) this.loader.dismiss();
  }

  toggleSearchBar() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  searchTweets(event: any) {
    this.store.dispatch(new SearchAction(event.target.value));
  }

  handleTweetClick(tweet: any) {
    this.store.dispatch(new SetTweetAction(tweet));
    this.navCtrl.push(TweetDetailsPage, {
      tweet: tweet
    });
  }

}
