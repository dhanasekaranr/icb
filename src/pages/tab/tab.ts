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
@Component({
    templateUrl: 'tab.html'
})
export class Tab {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root: any = HomePage;
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

}
