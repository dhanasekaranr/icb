import { Values } from './../../shared/values';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { icbService } from '../../shared/service';

@Component({
    selector: 'page-rent',
    templateUrl: 'Rent.html',
    providers: [icbService]
})
export class RentPage {
  queryval: any;
  book: Array<any>;
  users: Array<any>;
  isbn: any;
    constructor(public navCtrl: NavController, private navParams: NavParams, private bookService: icbService) {
      this.book = navParams.get('book');
      this.isbn = navParams.get('isbn');
      this.searchUserDB(null);
    }
    searchUserDB(event) {
      this.queryval = "";
      if( event )
        this.queryval = event.target.value;

      if (this.queryval.length > 1 || this.queryval == "") {
          this.bookService.getUserByISBN(this.queryval,this.isbn).then(
              data => {
                this.users = data;
             //   console.log(data);
            }
        );
        }
  }
    updateStat(id){


           this.bookService.markRent(this.queryval,id,this.isbn).then(
             data => {
            //   console.log(data);
               this.users = data;
           }
       );
   }

}
