import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

import {
  NavController,
  NavParams
} from 'ionic-angular';

import { Store } from '@ngrx/store';

import {State} from '../../store/reducer';
import { getTweet } from '../../store/selectors';

@Component({
  selector: 'tweet-details',
  templateUrl: 'tweet-details.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetDetailsPage {

  private tweet$: any;

  constructor(
    private navCtrl: NavController,
    private params: NavParams,
    private store: Store<State>
  ) {
    this.tweet$ = store.select(getTweet);
  }

}
