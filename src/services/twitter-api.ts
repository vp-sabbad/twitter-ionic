import { Injectable } from '@angular/core';
import Codebird from 'codebird';
// import Promise from 'bluebird';

@Injectable()
export class TwitterApi {
  codebird: any;

  constructor() {
    this.codebird = new Codebird();
    this.codebird.setConsumerKey(
      'ilPiM3rxuYGePsf4FE1xjfjfZ',
      'FNRfe18cYqDefDJjx4b6bFhDC3teeRlC1Lvx2FzQsWRSK0Tefp'
    );
  }

  search(query: String) : Promise<any> {
    return new Promise((resolve, reject) => {
      return this.codebird.__call(
        'search_tweets',
        `q=${query}&count=100&include_entities=true`,
        (response) => resolve(response.statuses)
      );
    });
  }

}
