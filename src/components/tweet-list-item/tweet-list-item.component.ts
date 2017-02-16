import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'tweet-list-item',
  templateUrl: 'tweet-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetListItem {

  @Input()
  tweet: any;

  @Output()
  tweetClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  handleItemClick() {
    this.tweetClick.emit(this.tweet);
  }
}
