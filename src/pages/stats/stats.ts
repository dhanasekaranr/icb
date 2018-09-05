import { TwitterProvider } from './../../providers/twitter/twitter';
import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { icbService } from '../../shared/service';
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
  providers: [TwitterProvider,icbService]

})
export class StatsPage {
  tweets: Observable<any[]>;
  loading: Loading;

  constructor(public navCtrl: NavController, private service: icbService,private twitterProvider: TwitterProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private iab: InAppBrowser) {
  }

  ionViewWillEnter() {
    this.loadTimeline();
  }

  public loadTimeline(refresher?) {
    this.showLoading();
   // this.tweets = this.twitterProvider.getHomeTimeline();

    this.service.getTweets().then(
      data => {
        this.tweets =data;
        //this.NotificationCount = this.notification.length;
        //console.log("getTweets");
        //console.log(data);
        this.loading.dismiss();
    });

  }
  public composeTweet() {
    let prompt = this.alertCtrl.create({
      title: 'New Tweet',
      message: "Write your Tweet message below",
      inputs: [
        {
          name: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Tweet',
          handler: data => {
            this.postTweet(data.text);
          }
        }
      ]
    });
    prompt.present();
  }
  public dateForTweet(dateString) {
    let d = new Date(Date.parse(dateString));

    // http://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
    var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
      d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

    return datestring;
  }

  public openLinkUrl(url) {
    let browser = this.iab.create(url, 'blank');
  }

  public postTweet(text) {
    this.showLoading();
    this.twitterProvider.postTweet(text).subscribe(res => {
      this.loading.dismiss();
      let toast = this.toastCtrl.create({
        message: 'Tweet posted!',
        duration: 3000
      });
      toast.present();
    }, err => {
      this.showError(err);
    });
  }
  private showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  private showError(text) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Error',
      message: text,
      buttons: ['OK']
    });
  //  alert.present(prompt);
  }

}
