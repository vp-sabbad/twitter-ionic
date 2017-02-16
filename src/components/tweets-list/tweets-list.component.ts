import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'tweets-list',
  templateUrl: 'tweets-list.component.html'
})
export class TweetsList {

  @Input()
  query: String;

  @Input()
  tweets: any[];

  @Output()
  tweetClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  handleTweetClick(tweet: any) {
    this.tweetClick.emit(tweet);
  }

}
