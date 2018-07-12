import { Search } from '../../../shared/Search';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ICBService } from '../../../shared/service';
import { Authentication } from '../../../shared/authentication.service';
import { MasterDetailService } from '../../../providers/data-service/masterDetailService';


@Component({
    selector: 'page-currentRentals',
    templateUrl: 'currentRentals.html',
    providers: [ICBService, Search]
})
export class CurrentRentalsPage {
  queryval: any;
  rentals: Array<any>;
  code = '';
  description = '';
  FirstNameSearch = '';
  HomePage = 'N';

    constructor(public navCtrl: NavController,
                public authentication: Authentication, private ms: MasterDetailService) {
      this.rentals = this.ms.getDestn();
    }

  FilterUserDB(event: { target: { value: string; }; }) {
      this.FirstNameSearch = event.target.value;
  }

bookInfo( key: any) {
   this.ms.setDestn(key);
   this.navCtrl.navigateForward('/tabs/bookInfo');
 }
}
