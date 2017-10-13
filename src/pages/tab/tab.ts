
import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { NavController, NavParams } from 'ionic-angular';

import { User, Authentication } from '../../shared/shared';
import { Login } from '../login/login';

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
        private user: User) {

//        console.log(this.authentication.getAccessToken());

        if (this.authentication.getAccessToken() == null) {
            
            this.navCtrl.push(Login);
            //this.user.
        } else {
            console.log(this.authentication.getAccessToken());
        }
    }
    
    
    
    
}
