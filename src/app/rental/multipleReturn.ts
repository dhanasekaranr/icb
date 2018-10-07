import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/shared/toaster.service';
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
                public toastCtrl: ToastService, public authentication: Authentication, public ms: MasterDetailService) {
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
               this.toastCtrl.showToast('Returned successfully !');
               this.getData();
           },
       );
   }

}
