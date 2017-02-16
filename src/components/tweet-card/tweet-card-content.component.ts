import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'tweet-card-content',
  template: `
    <ion-card-content>
      <p>{{tweet.text}}</p>
      <img width="100%"
        [hidden]="!tweet.entities.media"
        [src]="tweet.entities.media && tweet.entities.media[0].media_url"
      >
    </ion-card-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush  
})
export class TweetCardContent {

  @Input()
  tweet: any;

  constructor() {}

}
