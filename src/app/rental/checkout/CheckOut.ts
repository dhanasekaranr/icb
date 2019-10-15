import { MasterDetailService } from 'src/providers/data-service/masterDetailService';
import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ICBService } from '../../../shared/service';
import { Authentication } from '../../../shared/authentication.service';

@Component({
    selector: 'page-CheckOut',
    templateUrl: 'CheckOut.html',
    providers: [ICBService]
})
export class CheckOutPage {
  queryval: any;
  users: Array<any>;
  code = '';
  description = '';
  NameSearch = '';
  HomePage = 'N';
    constructor(public navCtrl: NavController,  private bookService: ICBService,
                public authentication: Authentication, public toastCtrl: ToastController, private ms: MasterDetailService) {


    }
    ionViewWillEnter() {
     this.code = this.ms.getDestn().Code;
     this.description = this.ms.getDestn().Description;
     this.HomePage = this.ms.getHome();
     this.searchUserDB(null);
    }
  FilterUserDB(event) {
      this.NameSearch = event.target.value;
  }
    searchUserDB(event) {
      this.queryval = '';
      if ( event ) {
        if (event.target.value !== undefined) {
          this.queryval = event.target.value;
        }
       }

      if (this.queryval.length > 1 || this.queryval === '') {
          this.bookService.getUserByISBN(this.queryval, this.code).then(
              data => {
                this.users = data;
            }
        );
        }
  }
  updateStat(id: any) {
      this.bookService.markRent(this.queryval, id, this.code).then(
        async data => {
          const toast = await this.toastCtrl.create({
          message: 'Checked out successfully !',
          duration: 2000
        });
          if (data) {
          toast.present();
        }
          this.navCtrl.pop();
          if (this.HomePage === 'N') {
            this.navCtrl.navigateForward('tabs/rental', { queryParams: { refresh:  1 }} ); } else if (this.HomePage === 'C') {
              this.navCtrl.navigateForward('tabs/catalogue'); } else {
          this.navCtrl.navigateForward('tabs/home');
        }
      });
   }
}
