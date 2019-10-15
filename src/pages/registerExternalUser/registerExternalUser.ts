import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from '@ionic/angular';
import { User} from '../../shared/user';
import { Authentication } from '../../shared/authentication.service';


@Component({
  selector: 'page-register-user',
  templateUrl: 'registerExternalUser.html'
})
export class RegisterExternalUser {

  constructor(public nav: NavController,
              public navParams: NavParams,
              private authentication: Authentication,
              private user: User,
              private alertCtrl: AlertController) {
  }

  createSuccess = false;
  registerCredentials = { name: '', email: '', password: '', confirmation_password: '' };




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
      header: title,
      subHeader : text,
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
   // alert.present();
  }

}
