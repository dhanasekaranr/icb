import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from '@ionic/angular';
import { Authentication } from '../../shared/authentication.service';
import { User } from '../../shared/user';

@Component({
  selector: 'page-forgotPassword',
  templateUrl: 'forgotPassword.html'
})
export class ForgotPassword {

  constructor(public nav: NavController,
              public navParams: NavParams,
              private authentication: Authentication,
              private user: User,
              private alertCtrl: AlertController) {
  }

  createSuccess = false;
  registerCredentials = { name: '', email: '', password: '', confirmation_password: '' };

  registerUser() {
    const username = 'info@icarebooks.com';
    this.user.registerExternalUser(this.authentication.getAccessToken(), username)
    .subscribe( response => {
      console.log('registered external user', response);
      // this.navCtrl.push(ValuesPage);
    });
  }

  public register() {
    if (this.registerCredentials.password !== this.registerCredentials.confirmation_password) {
      this.showPopup('Error', 'The password confirmation does not match.');
    } else {
      this.user.registerLocalUser(this.authentication.getAccessToken(), this.registerCredentials).subscribe(success => {
        if (success) {
          this.createSuccess = true;
          this.showPopup('Success', 'Account created.');
        } else {
          this.showPopup('Error', 'Problem creating account.');
        }
      },
        error => {
          this.showPopup('Error', error);
        });
    }
  }

  async showPopup(title: string, text: string) {
    const alert = await this.alertCtrl.create({
     // title: title,
     message : text,
      // subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
             // this.nav.popToRoot();
             this.nav.pop();
            }
          }
        }
      ]
    });
    alert.present();
  }

}
