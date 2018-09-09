import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
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
    errMessage: string;
    loader;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authentication: Authentication,
              private user: User,private storage: Storage,public loading: LoadingController) {

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
      this.user.getUserInfo(token)
      .subscribe( user => {

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
        this.loader = this.loading.create({content: 'Authenticating...'});
        this.loader.present().then(() => {

             this.authentication.credentialsLogin(credentials)

                     .subscribe( token => {
                      //if (this.authentication.getAccessToken() != null) {
                        this.loader.dismiss();
                        this.navCtrl.push(Tab);
                   // }
                              /*this.user.getUserInfo(token).toPromise()
                                .then( user => {if (this.authentication.getAccessToken() != null) {
                                      //this.loader.dismiss();
                                      this.navCtrl.push(Tab);
                                  } else {
                                      // Register the user and continue
                                      this.user.registerLocalUser(token, credentials)
                                      .subscribe( response => {
                                          this.navCtrl.push(Tab);
                                      });
                                  }
                                },error => {console.log(error);} );*/

                    },error => {
                    this.errMessage =JSON.parse(error._body).error_description;
                    this.loader.dismiss();
                    } );
        });

  }


}
