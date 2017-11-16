import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { icbService } from '../../shared/service';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import { Authentication } from '../../shared/shared';
import { Login } from '../login/login';
@Component({
    selector: 'page-Return',
    templateUrl: 'Return.html',
    providers: [icbService]
})
export class ReturnPage {

  book: Array<any>;
  users: Array<any>;
    constructor(public navCtrl: NavController, private navParams: NavParams, private bookService: icbService,
      public toastCtrl: ToastController,public authentication: Authentication) {
        this.book = navParams.get('book');
        //console.log ('action:',navParams.get('action'));
        this.bookService.getTransaction(navParams.get('isbn')).then(
          data => {
            this.users = data;
           // console.log(data);
          }
        );

    }
    updateStat(id){
      // console.log(event.target.value);
           this.bookService.markReturn(id).then(
             data => {
             //  console.log(data);
               this.users = data;
               let toast = this.toastCtrl.create({
                message: "Updated successfully !",
                duration: 2000
              });
              toast.present();
              if(this.users.length == 0)
                this.navCtrl.push(HomePage);
           }
       );
   }
   logOut() {
    // console.log(event.target.value);
         this.authentication.logout();
         this.navCtrl.push(Login);

 }

}