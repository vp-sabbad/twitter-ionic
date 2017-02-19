import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'tweet-card-footer',
  template: `
    <ion-item>
      <button item-left
        ion-button
        outline
        icon-left
        (click)="handlePreviousTweet($event)">
        <ion-icon name="arrow-dropleft"></ion-icon>
        <span>previous</span>
      </button>
      <button item-right
        ion-button
        outline
        icon-right
        (click)="handleNextTweet($event)">
        <span>next</span>
        <ion-icon name="arrow-dropright"></ion-icon>
      </button>
    </ion-item>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetCardFooter {

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
