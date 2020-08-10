import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Authentication } from '../../shared/authentication.service';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    public email: string;
    public pwd: string;
    public errMessage: string;
    public loader: any;
  constructor(private inAppBrowser: InAppBrowser , public navCtrl: NavController,
              private authentication: Authentication,
              private storage: Storage, public loading: LoadingController) {

                this.storage.get('username').then((username) => {
                        if (username != null) {
                            this.email = username;
                            this.storage.get('password').then((password) => {
                              this.pwd = password;
                            });
                        }
                    });

              }
              public options: InAppBrowserOptions = {
                location : 'yes', // Or 'no'
                hidden : 'no', // Or  'yes'
                clearcache : 'yes',
                clearsessioncache : 'yes',
                zoom : 'yes', // Android only ,shows browser zoom controls
                hardwareback : 'yes',
                mediaPlaybackRequiresUserAction : 'no',
                shouldPauseOnSuspend : 'no', // Android only
                closebuttoncaption : 'Close', // iOS only
                disallowoverscroll : 'no', // iOS only
                toolbar : 'yes', // iOS only
                enableViewportScale : 'no', // iOS only
                allowInlineMediaPlayback : 'no', // iOS only
                presentationstyle : 'pagesheet', // iOS only
                fullscreen : 'yes', // Windows only
            };
  public createAccount() {
      this.navCtrl.navigateForward('/RegisterExternalUser');
  }
  public ForgotPassword() {
  this.inAppBrowser.create('http://icarebooks.com/Account/ForgotPassword');
}
public Register() {
  this.navCtrl.navigateForward('tabs/registration');
}

public openWithInAppBrowser(url: string) {
  const target = '_blank';
  this.inAppBrowser.create(url, target, this.options);
}

  public async credentialsLogin() {
    const credentials = {
          username: this.email,
          password: this.pwd,
    };
    this.loader = await this.loading.create({message: 'Authenticating...'});
    this.loader.present().then(() => {
          this.authentication.credentialsLogin(credentials)
              .subscribe( (token) => {
                    this.loader.dismiss();
                    this.navCtrl.navigateForward('tabs');
                }, (error) => {
                this.errMessage = error.error.error_description;
                this.loader.dismiss();
      });
    });
  }
}
