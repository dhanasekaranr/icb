import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { Authentication, User } from '../../shared/shared';
import { Tab } from '../tab/tab';
//import { RegisterExternalUser } from '../registerExternalUser/registerExternalUser';
import { Storage } from '@ionic/Storage';
=======

import { Authentication, User } from '../../shared/shared';

import { Tab } from '../tab/tab';
//import { RegisterExternalUser } from '../registerExternalUser/registerExternalUser';

>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
    email: string;
    pwd: string;
<<<<<<< HEAD
    errMessage: string;
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

=======
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authentication: Authentication,
              private user: User) {
  }
>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc

  facebookLogin () {
    this.authentication.facebookLogin()
    .subscribe( token => {
      // Now use the retrieved access token to perform authenticated requests to the API
<<<<<<< HEAD
    //  console.log('token retrieved', token);
      this.user.getUserInfo(token)
      .subscribe( user => {
    //    console.log('retrieved user, response:', user);
=======
      console.log('token retrieved', token);
      this.user.getUserInfo(token)
      .subscribe( user => {
        console.log('retrieved user, response:', user);
>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc

        // If the user has registered, proceed to the values page,
        // else go to the register external user page
        if (user.HasRegistered) {
          this.navCtrl.push(Tab);
        } else {

          // Register the user and continue
<<<<<<< HEAD
          this.user.registerExternalUser(token, 'icarebooks@facebook.com')
=======
          this.user.registerExternalUser(token, 'anders@facebook.com')
>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc
          .subscribe( response => {
              this.navCtrl.push(Tab);
          });
        }
      })
    });
  }

  credentialsLogin () {
    // Credentials should be fetched through input fields, but they are hardcoded here for clarity
<<<<<<< HEAD

      let credentials = {
          username: this.email,
          password: this.pwd
    };

    this.authentication.credentialsLogin(credentials)
    .subscribe( (token :any ) => {
      // Now use the retrieved access token to perform authenticated requests to the API
      console.log('token retrieved', token);
=======
      
      let credentials = {
          username: this.email, // 'test@test121.com',
          password: this.pwd //'Junkpass75@1'
    };

    this.authentication.credentialsLogin(credentials)
    .subscribe( token => {
      // Now use the retrieved access token to perform authenticated requests to the API
      console.log('token retrieved', token);

>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc
      this.user.getUserInfo(token)
      .subscribe( user => {
        console.log('retrieved user, response:', user);

        // If the user has registered, proceed to the values page,
        // else go to the register external user page
<<<<<<< HEAD
        if (this.authentication.getAccessToken() != null) {
=======
        if (user.HasRegistered) {
>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc
            this.navCtrl.push(Tab);
        } else {

          // Register the user and continue
          this.user.registerLocalUser(token, credentials)
          .subscribe( response => {
              this.navCtrl.push(Tab);
<<<<<<< HEAD

          });

        }
      }

    )
    }
    ,
    error => {
      this.errMessage = error;
      //reject(error);
    }
    ,
    () => {
      // No errors, route to new page
      console.log("complete");
    }

  );
  }


=======
          });
        }
      })
    });
  }
>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc
}
