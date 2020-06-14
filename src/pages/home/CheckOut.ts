import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { icbService } from '../../shared/service';
import { HomePage } from './home';
import { Authentication } from '../../shared/shared';
import { Login } from '../login/login';
import { ContactPage } from '../contact/contact';
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
  HomePage:string="N";
    constructor(public navCtrl: NavController, private navParams: NavParams, private bookService: icbService,
      public authentication: Authentication,public toastCtrl: ToastController) {

      this.code = navParams.get('code');
      this.description = navParams.get('desc');
      this.HomePage = navParams.get('home');
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
              if(this.HomePage == 'N')
                this.navCtrl.push(ContactPage, {refresh: "true"});
              else
                this.navCtrl.push(HomePage, {refresh: "false"});
           }
       );
   }
   logOut() {
         this.authentication.logout();
         this.navCtrl.push(Login);
 }
}
