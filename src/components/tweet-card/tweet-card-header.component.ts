import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'tweet-card-header',
  template: `
    <ion-item>
      <ion-avatar item-left>
        <img [src]="tweet.user.profile_image_url">
      </ion-avatar>
      <h2><b>{{tweet.user.name}}</b></h2>
      <h3><b>@{{tweet.user.screen_name}}</b></h3>
    </ion-item>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetCardHeader {

  @Input()
  tweet: any;

  constructor() {}

}
