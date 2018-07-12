
import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Authentication } from '../../../shared/authentication.service';
import { ICBService } from '../../../shared/service';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
  providers: [ICBService],

})
export class NewsPage {
  public tweets: Observable<any[]>;
  public loading: any;

  constructor( private service: ICBService,
               private alertCtrl: AlertController, private loadingCtrl: LoadingController,
               private toastCtrl: ToastController, public authentication: Authentication, public navCtrl: NavController) {
  }

  public ionViewWillEnter() {
    this.loadTimeline();
  }

  public loadTimeline(refresher?: undefined) {

    if ( this.authentication.getAccessToken() != null) {
      this.showLoading();
     } else {
       this.navCtrl.navigateForward('tabs/login');
     }

  }

  public dateForTweet(dateString: string) {
    const d = new Date(Date.parse(dateString));
    // http://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
    const datestring = ('0' + d.getDate()).slice(-2) + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' +
      d.getFullYear() + ' ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
    return datestring;
  }

  public async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...',
    });
    this.loading.present().then(() => {
      this.service.getTweets().then(
        (data) => {
          this.tweets = data;
          console.log(data);
          // this.NotificationCount = this.notification.length;
          this.loading.dismiss();
      });

    });
   // this.loading.present();
  }

  private showError(text: any) {
    this.loading.dismiss();
   /* let alert = this.alertCtrl.create({
      title: 'Error',
      message: text,
      buttons: ['OK']
    });*/
  //  alert.present(prompt);
  }

}
