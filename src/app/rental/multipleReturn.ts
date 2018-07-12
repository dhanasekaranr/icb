import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { MasterDetailService } from '../../providers/data-service/masterDetailService';
import { Authentication } from '../../shared/authentication.service';
import { ICBService } from '../../shared/service';

@Component({
    selector: 'page-MultipleReturn',
    templateUrl: 'multipleReturn.html',
    providers: [ICBService],
})
export class MultipleReturnPage {

  public book: any;
  public trans: Array<any>;
    constructor(public navCtrl: NavController, private bookService: ICBService,
                public toastCtrl: ToastController, public authentication: Authentication, public ms: MasterDetailService) {
        this.book = this.ms.getDestn();
        this.getData();
    }
    public getData() {
      this.bookService.getTransactionByISBN(this.book.ISBN).then(
        (data) => {
          this.trans = data;
        },
      );

    }
    public markReturn(trasnsId: any) {
           this.bookService.markReturn(trasnsId).then(
             async (data) => {
               const toast = await this.toastCtrl.create({
                message: 'Returned successfully !',
                duration: 2000,
              });
               this.getData();
               toast.present();
           },
       );
   }

}
