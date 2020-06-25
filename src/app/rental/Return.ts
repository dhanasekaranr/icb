import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from '@ionic/angular';
import { ICBService } from '../../shared/service';
import { Authentication } from '../../shared/authentication.service';

@Component({
    selector: 'page-Return',
    templateUrl: 'Return.html'

})
export class ReturnPage {

  book: Array<any>;
  trans: Array<any>;
    constructor(public navCtrl: NavController, private navParams: NavParams, private bookService: ICBService,
      public toastCtrl: ToastController,public authentication: Authentication) {
        this.book = navParams.get('book');
        this.bookService.getTransaction(navParams.get('isbn')).then(
          data => {
            this.trans = data;
          }
        );

    }
    markReturn(trasnsId){
           this.bookService.markReturn(trasnsId).then(
             async data => {
               this.trans = data;
               let toast = await this.toastCtrl.create({
                 message: "Returned successfully !",
                 duration: 2000
               });
              toast.present();
              if(this.trans.length == 0)
                this.navCtrl.navigateBack('tabs/home');
           }
       );
   }
   logOut() {
    // console.log(event.target.value);
         this.authentication.logout();
         this.navCtrl.navigateBack('tabs/login');

 }

}
