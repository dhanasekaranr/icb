import { MasterDetailService } from 'src/providers/data-service/masterDetailService';
import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ICBService } from '../../shared/service';
import { Authentication } from '../../shared/authentication.service';

@Component({
    selector: 'page-MultipleReturn',
    templateUrl: 'MultipleReturn.html',
    providers: [ICBService]
})
export class MultipleReturnPage {

  book: any;
  trans: Array<any>;
    constructor(public navCtrl: NavController, private bookService: ICBService,
                public toastCtrl: ToastController, public authentication: Authentication, public ms: MasterDetailService) {
        this.book = this.ms.getDestn();
        this.getData();
    }
getData() {
  this.bookService.getTransactionByISBN(this.book.ISBN).then(
    data => {
      this.trans = data;
    }
  );

}
    markReturn(trasnsId: any) {
           this.bookService.markReturn(trasnsId).then(
             async data => {
               const toast = await this.toastCtrl.create({
                message: 'Returned successfully !',
                duration: 2000
              });
               this.getData();
               toast.present();
           }
       );
   }

}
