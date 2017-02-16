import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StoreModule } from '@ngrx/store'
import { App } from './app.component';
import { SearchTweetsPage } from '../pages/search-tweets/search-tweets.page';
import { TweetDetailsPage } from '../pages/tweet-details/tweet-details.page';
import { TweetListItem } from '../components/tweet-list-item/tweet-list-item.component'
import { TweetsList } from '../components/tweets-list/tweets-list.component'
import { TweetCard } from '../components/tweet-card/tweet-card.component';
import { TweetCardHeader } from '../components/tweet-card/tweet-card-header.component';
import { TweetCardContent } from '../components/tweet-card/tweet-card-content.component';
import { TweetCardFooter } from '../components/tweet-card/tweet-card-footer.component';
import { TwitterApi } from '../services/twitter-api';
import { reducer } from '../store/reducer';

@NgModule({
  declarations: [
    App,
    SearchTweetsPage,
    TweetsList,
    TweetListItem,
    TweetDetailsPage,
    TweetCard,
    TweetCardHeader,
    TweetCardContent,
    TweetCardFooter
  ],
  imports: [
    IonicModule.forRoot(App),
    StoreModule.provideStore(reducer)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    SearchTweetsPage,
    TweetDetailsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TwitterApi
  ]
})
export class AppModule {}
