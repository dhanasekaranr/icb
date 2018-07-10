<<<<<<< HEAD
import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import { ContactPage } from '../contact/contact';
import { DashPage } from '../dashboard/dash';
import { ScanPage } from '../scanner/scan';
import { NavController, NavParams } from 'ionic-angular';
import { User, Authentication } from '../../shared/shared';
import { Login } from '../login/login';
import {Storage} from "@ionic/Storage";
=======

import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { NavController, NavParams } from 'ionic-angular';

import { User, Authentication } from '../../shared/shared';
import { Login } from '../login/login';

>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc
@Component({
    templateUrl: 'tab.html'
})
export class Tab {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root: any = HomePage;
<<<<<<< HEAD
    tab2Root: any = UserPage;
    tab3Root: any = ContactPage;
    tab4Root: any = ScanPage;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private authentication: Authentication,
        private user: User,public storage: Storage) {
        this.storage.get('accessToken').then((token) => {
                if (token == null) {
                  this.navCtrl.push(Login);
                }
            });
  }

  logOut() {
         this.authentication.logout();
         this.navCtrl.push(Login);

 }

=======
    tab2Root: any = AboutPage;
    tab3Root: any = ContactPage;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private authentication: Authentication,
        private user: User) {

//        console.log(this.authentication.getAccessToken());

        if (this.authentication.getAccessToken() == null) {
            
            this.navCtrl.push(Login);
            //this.user.
        } else {
            console.log(this.authentication.getAccessToken());
        }
    }
    
    
    
    
>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc
}
