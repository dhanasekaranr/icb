import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { NavController, NavParams } from 'ionic-angular';
import { User, Authentication } from '../../shared/shared';
import { Login } from '../login/login';
import {Storage} from "@ionic/storage";
@Component({
    templateUrl: 'tab.html'
})
export class Tab {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root: any = HomePage;
    tab2Root: any = AboutPage;
    tab3Root: any = ContactPage;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private authentication: Authentication,
        private user: User,public storage: Storage) {

//        console.log(this.authentication.getAccessToken());
      this.storage.get('accessToken').then((token) => {
        console.log('here:',token);
              if (token == null) {

                  this.navCtrl.push(Login);
                  //this.user.
              } else {
                  console.log(this.authentication.getAccessToken());
              }

          });


  }

  logOut() {
    // console.log(event.target.value);
         this.authentication.logout();
         this.navCtrl.push(Login);

 }

}
