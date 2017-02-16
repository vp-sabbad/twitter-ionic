import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TwitterApi } from '../../services/twitter-api';
import { TweetDetailsPage } from '../tweet-details/tweet-details.page';

@Component({
  selector: 'search-tweets-page',
  templateUrl: 'search-tweets.page.html'
})
export class SearchTweetsPage {

  private tweets: any[] = [];
  private query: String;
  private isSearchVisible = false;

  constructor(
    private navCtrl: NavController,
    private twitterApi: TwitterApi
  ) {}

  toggleSearchBar() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  searchTweets(event: any) {
    this.query = event.target.value;
    this.twitterApi.search(this.query)
      .then(tweets => this.tweets = tweets)
  }

  handleTweetClick(tweet: any) {
    this.navCtrl.push(TweetDetailsPage, {
      tweet: tweet
    });
  }

}
