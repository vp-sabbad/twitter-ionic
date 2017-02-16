import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'tweet-list-item',
  templateUrl: 'tweet-list-item.component.html'
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
