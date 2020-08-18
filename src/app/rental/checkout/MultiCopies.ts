import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/shared/toaster.service';
import { Authentication } from '../../../shared/authentication.service';
import { ICBService } from '../../../shared/service';
import { MasterDetailService } from './../../../providers/data-service/masterDetailService';

@Component({
    selector: 'page-MultiCopies',
    templateUrl: 'MultiCopies.html',
    providers: [ICBService],
})
export class MultiCopiesPage {
  public queryval: any;
  public book: any;
  public books: Array<any>;
  public isbn: any;
  public copy = 0;
  public code = '';
  public CodeSearch = '';
  public description = '';

  constructor(public navCtrl: NavController, private bookService: ICBService,
              public authentication: Authentication, public toastCtrl: ToastService, public ms: MasterDetailService) {
    }
    public ionViewWillEnter() {
        this.book = this.ms.getDestn();
        this.isbn = this.book.ISBN;
        this.description = this.book.Description;
        this.code = this.book.Code;
        this.bookService.getBookProfile(this.isbn).then(
            (data) => {
              this.books = data;
          });

    }
  public FilterBookDB(event: any) {
      this.CodeSearch = event.target.value;
  }
  public updateStat(book: any) {
       this.ms.setDestn(book);
       this.ms.setHome('C');
       this.navCtrl.navigateForward('tabs/checkoutPage');
   }

}
