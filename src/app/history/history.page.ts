import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MasterDetailService } from '../../providers/data-service/masterDetailService';
import { Authentication } from '../../shared/authentication.service';
import { ICBService } from '../../shared/service';

@Component({
  selector: 'app-history',
  templateUrl: 'history.page.html',
  styleUrls: ['history.page.scss'],
})
export class HistoryPage {

  public queryval: any;
  public books: Array<any>;
  public copy = 0;
  public code = '';
  public CodeSearch = '';
  public renters: Array<any>;
  //
  public i = 0;
  constructor(public navCtrl: NavController, private bookService: ICBService,
              public authentication: Authentication, public ms: MasterDetailService) {
    }
    public ionViewWillEnter() {

        if ( this.authentication.getAccessToken() != null) {
            this.getBookRead();
           } else {
             this.navCtrl.navigateForward('tabs/login');
           }
    }
    public getBookRead() {
        this.bookService.getBookRead().then(
            (data) => {
              this.books = data;
              const curr = data.map((d) => d.BorrowerName);
              this.renters = curr.filter((x, i, a) => x && a.indexOf(x) === i);
          },
      );
  }
  public bookInfo( key: any ) {
      this.ms.setDestn(key);
      this.navCtrl.navigateForward('/tabs/bookInfo');
  }
  public FilterBookDB(event: any) {
      this.CodeSearch = event.target.value;
  }
  public updateStat(selcode: any, seldesc: any) {
      /*this.navCtrl.push(CheckOutPage, {
          code: selcode, desc: seldesc, action: 'Out'
       });*/
   }
   public searchUserDB() {
    this.getBookRead();

}

}
