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
  users: Array<any>;
  code :string = "";
  description :string = "";
  FirstNameSearch :string ="";
    constructor(public navCtrl: NavController, private navParams: NavParams, private bookService: icbService,
      public authentication: Authentication,public toastCtrl: ToastController) {

      this.code = navParams.get('code');
      this.description = navParams.get('desc');
      this.searchUserDB(null);
    }
      FilterUserDB(event){
      this.FirstNameSearch = event.target.value;
  }
    searchUserDB(event) {
      this.queryval = "";
      if( event ){
        if(event.target.value != undefined)
          this.queryval = event.target.value;
       }

      if (this.queryval.length > 1 || this.queryval == "") {
          this.bookService.getUserByISBN(this.queryval,this.code).then(
              data => {
                this.users = data;

            }
        );
        }
  }
    updateStat(id){
           this.bookService.markRent(this.queryval,id,this.code).then(
             data => {
               let toast = this.toastCtrl.create({
                message: "Checked out successfully !",
                duration: 2000
              });
              toast.present();
                this.navCtrl.push(HomePage, {refresh: "false"});
           }
       );
   }
   logOut() {
         this.authentication.logout();
         this.navCtrl.push(Login);
 }
}
