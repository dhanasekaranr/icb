import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { ICBService } from '../../shared/service';
import { Authentication } from '../../shared/authentication.service';

@Component({
    selector: 'page-MultiCopies',
    templateUrl: 'MultiCopies.html',
    providers: [ICBService]
})
export class MultiCopies {
  queryval: any;
  book: Array<any>;
  books: Array<any>;
  isbn: any;
  copy = 0;
  code = '';
  CodeSearch = '';
  description = '';

  constructor(public navCtrl: NavController, private navParams: NavParams, private bookService: ICBService,
              public authentication: Authentication, public toastCtrl: ToastController) {
      this.book = this.navParams.get('book');
      this.isbn = this.navParams.get('isbn');
      this.description = navParams.get('desc');
      this.code = navParams.get('code');
      this.getBookProfile();
    }
    getBookProfile() {

          this.bookService.getBookProfile(this.isbn).then(
              data => {
                this.books = data;
            }
        );

  }
  FilterBookDB(event: any) {
      this.CodeSearch = event.target.value;
  }
  updateStat(selcode: any, seldesc: any) {
      /*this.navCtrl.push(CheckOutPage, {
          code: selcode, desc: seldesc, action: 'Out'
       });*/
      this.navCtrl.navigateForward('Login');
   }

}
