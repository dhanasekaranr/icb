import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { icbService } from '../../shared/service';

@Component({
    selector: 'page-trans',
    templateUrl: 'trans.html',
    providers: [icbService]
})
export class TransPage {

  book: Array<any>;
  users: Array<any>;
    constructor(public navCtrl: NavController, private navParams: NavParams, private bookService: icbService) {
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
           }
       );
   }

}
