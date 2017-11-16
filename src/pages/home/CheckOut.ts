import { Values } from './../../shared/values';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { icbService } from '../../shared/service';
import { HomePage } from '../home/home';
import { Tab } from '../tab/tab';
import { Authentication } from '../../shared/shared';
import { Login } from '../login/login';
import { ToastController } from 'ionic-angular';
@Component({
    selector: 'page-CheckOut',
    templateUrl: 'CheckOut.html',
    providers: [icbService]
})
export class CheckOutPage {
  queryval: any;
  book: Array<any>;
  users: Array<any>;
  isbn: any;
  copy = 0;
    constructor(public navCtrl: NavController, private navParams: NavParams, private bookService: icbService,
      public authentication: Authentication,public toastCtrl: ToastController) {
      this.book = navParams.get('book');
      this.isbn = navParams.get('isbn');
      this.copy = navParams.get('copy');
      this.searchUserDB(null);
    }
    searchUserDB(event) {
      this.queryval = "";
      if( event ){
        if(event.target.value != undefined)
          this.queryval = event.target.value;
       }

      if (this.queryval.length > 1 || this.queryval == "") {
          this.bookService.getUserByISBN(this.queryval,this.isbn).then(
              data => {
                this.users = data;
             //   console.log(data);
            }
        );
        }
  }
    updateStat(id){
           this.bookService.markRent(this.queryval,id,this.isbn).then(
             data => {
               console.log("copy:", this.copy);

               let toast = this.toastCtrl.create({
                message: "Checked out successfully !",
                duration: 2000
              });
              toast.present();
              this.copy--;
              if(this.copy == 0)
                this.navCtrl.push(HomePage, {});
               else
                 this.users = data;
           }
       );
   }
   logOut() {
    // console.log(event.target.value);
         this.authentication.logout();
         this.navCtrl.push(Login);

 }
}
