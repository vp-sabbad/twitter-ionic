import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'tweet-card-footer',
  template: `
    <ion-item>
      <button item-left ion-button outline icon-left>
        <ion-icon name="arrow-dropleft"></ion-icon>
        <span>previous</span>
      </button>
      <button item-right ion-button outline icon-right>
        <span>next</span>
        <ion-icon name="arrow-dropright"></ion-icon>
      </button>
    </ion-item>
  `
})
export class TweetCardFooter {

  @Input()
  tweet: any;

  constructor() {}

}
