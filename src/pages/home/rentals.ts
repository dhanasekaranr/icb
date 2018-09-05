import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { icbService } from '../../shared/service';
import { Authentication } from '../../shared/shared';
import { Login } from '../login/login';
import { BookInfo } from './BookInfo';

@Component({
    selector: 'page-rentals',
    templateUrl: 'rentals.html',
    providers: [icbService]
})
export class RentalsPage {
  queryval: any;
  rentals: Array<any>;
  code :string = "";
  description :string = "";
  FirstNameSearch :string ="";
  HomePage:string="N";

    constructor(public navCtrl: NavController, private navParams: NavParams, private bookService: icbService,
      public authentication: Authentication,public toastCtrl: ToastController) {

      this.rentals = navParams.get('rentals');
     // console.log("Rentals");
     // console.log(this.rentals);
     // this.description = navParams.get('desc');
     // this.HomePage = navParams.get('home');
    }
      FilterUserDB(event){
      this.FirstNameSearch = event.target.value;
  }

   logOut() {
         this.authentication.logout();
         this.navCtrl.push(Login);
 }
 bookInfo( key)
 {
   this.navCtrl.push(BookInfo, {
     book:key
   });
 }
}
