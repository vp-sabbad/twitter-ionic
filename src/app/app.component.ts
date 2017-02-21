import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SearchTweetsPage } from '../pages/search-tweets/search-tweets.page';

@Component({
  template: `
    <ion-nav [root]="rootPage"></ion-nav>
  `
})
export class App {
  rootPage = SearchTweetsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      StatusBar.overlaysWebView(false);
      Splashscreen.hide();
    });
  }
}
