import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { App } from './app.component';
import { SearchTweetsPage } from '../pages/search-tweets/search-tweets.page';
import { SearchHeader } from '../components/search-header/search-header.component'
import { TweetDetailsPage } from '../pages/tweet-details/tweet-details.page';
import { TweetListItem } from '../components/tweet-list-item/tweet-list-item.component'
import { TweetsList } from '../components/tweets-list/tweets-list.component'
import { TweetCard } from '../components/tweet-card/tweet-card.component';
import { TweetCardHeader } from '../components/tweet-card/tweet-card-header.component';
import { TweetCardContent } from '../components/tweet-card/tweet-card-content.component';
import { TweetCardFooter } from '../components/tweet-card/tweet-card-footer.component';
import { TwitterApi } from '../services/twitter-api';
import { reducer } from '../store/reducer';
import { TwitterEffects } from '../store/effects';
import { Focuser } from '../directives/focuser.directive';

@NgModule({
  declarations: [
    App,
    SearchTweetsPage,
    SearchHeader,
    TweetsList,
    TweetListItem,
    TweetDetailsPage,
    TweetCard,
    TweetCardHeader,
    TweetCardContent,
    TweetCardFooter,
    Focuser
  ],
  imports: [
    IonicModule.forRoot(App, {
      platforms: {
        ios: {
          statusBarPadding: true
        }
      }
    }),
    StoreModule.provideStore(reducer),
    EffectsModule.run(TwitterEffects)
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
