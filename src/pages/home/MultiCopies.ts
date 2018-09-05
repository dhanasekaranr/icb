import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { icbService } from '../../shared/service';
import { HomePage } from './home';
import { Tab } from '../tab/tab';
import { Authentication } from '../../shared/shared';
import { Login } from '../login/login';

import { CheckOutPage } from './CheckOut';

@Component({
    selector: 'page-MultiCopies',
    templateUrl: 'MultiCopies.html',
    providers: [icbService]
})
export class MultiCopies {
  queryval: any;
  book: Array<any>;
  books: Array<any>;
  isbn: any;
  copy = 0;
  code :string = "";
  CodeSearch: string = "";
  description: string = "";

  constructor(public navCtrl: NavController, private navParams: NavParams, private bookService: icbService,
      public authentication: Authentication,public toastCtrl: ToastController) {
      this.book = navParams.get('book');
      this.isbn = navParams.get('isbn');
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
  FilterBookDB(event){
      this.CodeSearch = event.target.value;
  }
  updateStat(selcode,seldesc){
      this.navCtrl.push(CheckOutPage, {
          code: selcode,desc: seldesc,action: 'Out'
       });
   }
   logOut() {
    // console.log(event.target.value);
         this.authentication.logout();
         this.navCtrl.push(Login);
  }
}
