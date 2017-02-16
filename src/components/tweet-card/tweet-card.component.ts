import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'tweet-card',
  template: `
    <ion-card>
      <tweet-card-header [tweet]="tweet"></tweet-card-header>
      <tweet-card-content [tweet]="tweet"></tweet-card-content>
      <tweet-card-footer [tweet]="tweet"></tweet-card-footer>
    </ion-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TweetCard {

  @Input()
  tweet: any;

  constructor() {}

}
