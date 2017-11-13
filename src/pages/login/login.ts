import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Authentication, User } from '../../shared/shared';
import { Tab } from '../tab/tab';
//import { RegisterExternalUser } from '../registerExternalUser/registerExternalUser';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
    email: string;
    pwd: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authentication: Authentication,
              private user: User,private storage: Storage) {

                this.storage.get('username').then((username) => {
                        if (username != null) {
                            this.email = username;
                            this.storage.get('password').then((password) => {
                              this.pwd = password;
                            });
                        }
                    });


              }


  facebookLogin () {
    this.authentication.facebookLogin()
    .subscribe( token => {
      // Now use the retrieved access token to perform authenticated requests to the API
      console.log('token retrieved', token);
      this.user.getUserInfo(token)
      .subscribe( user => {
        console.log('retrieved user, response:', user);

        // If the user has registered, proceed to the values page,
        // else go to the register external user page
        if (user.HasRegistered) {
          this.navCtrl.push(Tab);
        } else {

          // Register the user and continue
          this.user.registerExternalUser(token, 'icarebooks@facebook.com')
          .subscribe( response => {
              this.navCtrl.push(Tab);
          });
        }
      })
    });
  }

  credentialsLogin () {
    // Credentials should be fetched through input fields, but they are hardcoded here for clarity

      let credentials = {
          username: this.email,
          password: this.pwd
    };

    this.authentication.credentialsLogin(credentials)
    .subscribe( token => {
      // Now use the retrieved access token to perform authenticated requests to the API
   //   console.log('token retrieved', token);
      this.user.getUserInfo(token)
      .subscribe( user => {
  //      console.log('retrieved user, response:', user);

        // If the user has registered, proceed to the values page,
        // else go to the register external user page
        if (this.authentication.getAccessToken() != null) {
            this.navCtrl.push(Tab);
        } else {

          // Register the user and continue
          this.user.registerLocalUser(token, credentials)
          .subscribe( response => {
              this.navCtrl.push(Tab);

          });

        }
      })
    });
  }


}
