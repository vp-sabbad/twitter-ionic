import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'tweet-card',
  template: `
    <ion-card>
      <tweet-card-header [tweet]="tweet"></tweet-card-header>
      <tweet-card-content [tweet]="tweet"></tweet-card-content>
      <tweet-card-footer
        [tweet]="tweet"
        (nextTweet)="handleNextTweet($event)"
        (previousTweet)="handlePreviousTweet($event)">
      </tweet-card-footer>
    </ion-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TweetCard {

  @Input()
  tweet: any;

  @Output()
  nextTweet: EventEmitter<any> = new EventEmitter();

  @Output()
  previousTweet: EventEmitter<any> = new EventEmitter();

  constructor() {}

  handleNextTweet() {
    this.nextTweet.emit({});
  }

  handlePreviousTweet() {
    this.previousTweet.emit({});
  }

}
