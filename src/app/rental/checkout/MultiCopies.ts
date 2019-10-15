import { MasterDetailService } from './../../../providers/data-service/masterDetailService';
import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ICBService } from '../../../shared/service';
import { Authentication } from '../../../shared/authentication.service';

@Component({
    selector: 'page-MultiCopies',
    templateUrl: 'MultiCopies.html',
    providers: [ICBService]
})
export class MultiCopiesPage {
  queryval: any;
  book: any;
  books: Array<any>;
  isbn: any;
  copy = 0;
  code = '';
  CodeSearch = '';
  description = '';

  constructor(public navCtrl: NavController, private bookService: ICBService,
              public authentication: Authentication, public toastCtrl: ToastController, public ms: MasterDetailService) {
    }
    ionViewWillEnter() {
        this.book = this.ms.getDestn();
        this.isbn = this.book.ISBN;
        this.description = this.book.Description;
        this.code = this.book.Code;
        this.bookService.getBookProfile(this.isbn).then(
            data => {
              this.books = data;
          });

    }
  FilterBookDB(event: any) {
      this.CodeSearch = event.target.value;
  }
  updateStat(book: any) {
       this.ms.setDestn(book);
       this.ms.setHome('C');
       this.navCtrl.navigateForward('tabs/checkoutPage');
   }

}
