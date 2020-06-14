import { TwitterService } from 'ng2-twitter';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TwitterProvider {
  token = '1033414934229483520-XaIFKZ6IXHYZw5AVjqIqcAwEBMAsW0';
  tokenSecret = 'CedWB7bqVWnNizgcd0eiwOMBsHZCBc0siOADC8YaA2TYn';
  consumerKey = '7qNsxWtuhofuoyMnJbmZxXhqs';
  consumerSecret = 'KJw1aNybD67jUpjBfOYFLQ54Oz9q4Ol1DrLHpxEACBc1878n8O';
data:any;
  constructor(private twitter: TwitterService) { }

  setTokens(token, tokenSecret) {
    this.token = token;
    this.tokenSecret = tokenSecret;
  }

  postTweet(text) {
    return this.twitter.post(
      'https://api.twitter.com/1.1/statuses/update.json',
      {
        status: text
      },
      {
        consumerKey: this.consumerKey,
        consumerSecret: this.consumerSecret
      },
      {
        token: this.token,
        tokenSecret: this.tokenSecret
      }
    )
      .map(res => res.json());
  }

  getHomeTimeline() {




      return new Promise<any>( resolve => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + 'AAAAAAAAAAAAAAAAAAAAAI9g8QAAAAAAyuY3vH7Z31bmYQrxdfpmQpV5S88%3DhonupnyrwUj39yMs2iFQ4olEkoPzHCUqsaeJ2lZUyocOVFdEHl');
        //this.headers = {headers};

          this.twitter.get(
            'https://api.twitter.com/1.1/statuses/user_timeline.json?count=10&screen_name=iCare05955073&trim_user=1&exclude_replies=1',
            {
              count: 10
            },
            {
              consumerKey: this.consumerKey,
              consumerSecret: this.consumerSecret
            },
            {
              token: this.token,
              tokenSecret: this.tokenSecret
            }

          )
          .map(res => res.json())
          .subscribe( data =>{
            this.data = data;
            resolve(this.data);
          });
      });

    };

}
