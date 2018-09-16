import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { User, Authentication  } from '../../shared/shared';


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

  registerUser () {
    let username = 'anders@anysom.dk';
    this.user.registerExternalUser(this.authentication.getAccessToken(), username)
    .subscribe( response => {
      console.log('registered external user', response);
      //this.navCtrl.push(ValuesPage);
    });
  }

  createSuccess = false;
  registerCredentials = { name: '', email: '', password: '', confirmation_password: '' };



  public register() {
    if (this.registerCredentials.password != this.registerCredentials.confirmation_password) {
      this.showPopup("Error", 'The password confirmation does not match.');
    } else {
      this.user.registerLocalUser(this.authentication.getAccessToken(),this.registerCredentials).subscribe(success => {
        if (success) {
          this.createSuccess = true;
          this.showPopup("Success", "Account created.");
        } else {
          this.showPopup("Error", "Problem creating account.");
        }
      },
        error => {
          this.showPopup("Error", error);
        });
    }
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

}
