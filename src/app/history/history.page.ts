import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ICBService } from 'src/shared/service';
import { Authentication } from 'src/shared/shared';
import { MasterDetailService } from 'src/providers/data-service/masterDetailService';

@Component({
  selector: 'app-history',
  templateUrl: 'history.page.html',
  styleUrls: ['history.page.scss']
})
export class HistoryPage {

  queryval: any;
  books: Array<any>;
  copy = 0;
  code = '';
  CodeSearch = '';
  renters: Array<any>;
  //
  i = 0;
  constructor(public navCtrl: NavController, private bookService: ICBService,
              public authentication: Authentication, public ms: MasterDetailService) {
    }
    ionViewWillEnter() {
      this.getBookRead();
    }
    getBookRead() {
        this.bookService.getBookRead().then(
            data => {
              this.books = data;
              const curr = data.map(d => d.BorrowerName);
              this.renters = curr.filter((x, i, a) => x && a.indexOf(x) === i);
          }
      );
  }
  bookInfo( key: any ) {
      this.ms.setDestn(key);
      this.navCtrl.navigateForward('/tabs/bookInfo');
  }
  FilterBookDB(event: any) {
      this.CodeSearch = event.target.value;
  }
  updateStat(selcode: any, seldesc: any) {
      /*this.navCtrl.push(CheckOutPage, {
          code: selcode, desc: seldesc, action: 'Out'
       });*/
   }
   searchUserDB() {
    this.getBookRead();

}

}
