import { Injectable } from "@angular/core";
import { NavController } from 'ionic-angular';
import { Authentication } from './shared';
import { Login } from '../pages/login/login';
@Injectable()
export class GlobalFunctions {

  constructor (public navCtrl: NavController,
    private authentication: Authentication) {}


  logOut() {
    // console.log(event.target.value);
         this.authentication.logout();
         this.navCtrl.push(Login);

 }
}
