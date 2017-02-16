import {
  Component
} from '@angular/core';
import {
  NavController,
  NavParams
} from 'ionic-angular';

@Component({
  selector: 'tweet-details',
  templateUrl: 'tweet-details.page.html'
})
export class TweetDetailsPage {

  public tweet: any;

  constructor(
    private navCtrl: NavController,
    private params: NavParams
  ) {
    this.tweet = params.get('tweet');
  }

}
