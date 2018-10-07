import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/shared/toaster.service';
import { MasterDetailService } from '../../../providers/data-service/masterDetailService';
import { Authentication } from '../../../shared/authentication.service';
import { ICBService } from '../../../shared/service';

@Component({
    selector: 'page-CheckOut',
    templateUrl: 'CheckOut.html',
    providers: [ICBService],
})
export class CheckOutPage {
  public queryval: any;
  public users: Array<any>;
  public code = '';
  public description = '';
  public NameSearch = '';
  public HomePage = 'N';
    constructor(public navCtrl: NavController,  private bookService: ICBService,
                public authentication: Authentication, public toastCtrl: ToastService, private ms: MasterDetailService) {

    }
    public ionViewWillEnter() {
      if ( this.authentication.getAccessToken() != null) {
        this.code = this.ms.getDestn().Code;
        this.description = this.ms.getDestn().Description;
        this.HomePage = this.ms.getHome();
        this.searchUserDB(null);
          } else {
         this.navCtrl.navigateForward('tabs/login');
       }
    }
  public FilterUserDB(event) {
      this.NameSearch = event.target.value;
  }
    public searchUserDB(event) {
      this.queryval = '';
      if ( event ) {
        if (event.target.value !== undefined) {
          this.queryval = event.target.value;
        }
       }

      if (this.queryval.length > 1 || this.queryval === '') {
          this.bookService.getUserByISBN(this.queryval, this.code).then(
              (data) => {
                this.users = data;
            },
        );
        }
  }
  public updateStat(id: any) {
      this.bookService.markRent(this.queryval, id, this.code).then(
        async (data) => {
          this.toastCtrl.showToast('Checked out successfully !');
          this.navCtrl.pop();
          if (this.HomePage === 'N') {
            this.navCtrl.navigateForward('tabs/rental', { queryParams: { refresh:  1 }} ); } else if (this.HomePage === 'C') {
              this.navCtrl.navigateForward('tabs/catalogue'); } else {
          this.navCtrl.navigateForward('tabs/home');
        }
      });
   }
}
