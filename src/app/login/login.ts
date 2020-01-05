import { Component } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Authentication } from '../../shared/authentication.service';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    email: string;
    pwd: string;
    errMessage: string;
    loader: any;
  constructor(private inAppBrowser: InAppBrowser, public navCtrl: NavController,
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

  createAccount() {
      this.navCtrl.navigateForward('/RegisterExternalUser');
  }
  ForgotPassword() {
  this.inAppBrowser.create('http://icarebooks.com/Account/ForgotPassword');
}
Register() {
  this.navCtrl.navigateForward('tabs/registration');
}
  async credentialsLogin() {
    const credentials = {
          username: this.email,
          password: this.pwd
    };
    this.loader = await this.loading.create({message: 'Authenticating...'});
    this.loader.present().then(() => {
          this.authentication.credentialsLogin(credentials)
              .subscribe( token => {
                    this.loader.dismiss();
                    this.navCtrl.navigateForward('tabs');
                }, error => {
                this.errMessage = error.error.error_description;
                this.loader.dismiss();
      });
    });
  }
}
