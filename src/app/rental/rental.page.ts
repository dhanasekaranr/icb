import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { ToastService } from 'src/shared/toaster.service';
import { MasterDetailService } from '../../providers/data-service/masterDetailService';
import { Authentication } from '../../shared/authentication.service';
import { ICBService } from '../../shared/service';

@Component({
  selector: 'app-rental',
  templateUrl: 'rental.page.html',
  styleUrls: ['rental.page.scss'],
})
export class RentalPage {
  public sub: any;
  public books: Array<any>;
  public loader: any; public CodeSearch = '';
  constructor(public navCtrl: NavController, private icbservice: ICBService, public platform: Platform,
              public toastCtrl: ToastService, public authentication: Authentication, public loading: LoadingController,
              private ms: MasterDetailService, private route: ActivatedRoute,
              private router: Router) {
}
public searchTransDB() {
  this.loader.present().then(() => {
      this.icbservice.searchTrans('book', 'GetBookCodes').then(
          (data) => {
              this.books = data;
              this.loader.dismiss();
          },
          ).catch((err) => {
            console.log(err);
            this.loader.dismiss();
        });

        });

}
public FilterBookDB(event) {
  this.CodeSearch = event.target.value;

}
public OnDestroy() {
  this.sub.unsubscribe();
}

public async ionViewWillEnter() {

/*
 this.sub  = this.route
      .queryParams
      .subscribe((params) => {
        if ( params.refresh) {
          this.books = null;
        }
      });
*/
 // if (this.books != null) {return; }

  if ( this.authentication.getAccessToken() != null) {
     this.loader = await this.loading.create({message: 'Getting Rentals...'});
     this.searchTransDB();
    } else {
      this.navCtrl.navigateForward('tabs/login');
    }
}
public markReturn(trasnsId: any) {
  this.icbservice.markReturn(trasnsId).then(
    async (data) => {
      this.toastCtrl.showToast('Returned successfully !');
      this.searchTransDB();
  });
}
public checkout( key: any ) {
  this.ms.setDestn(key);
  this.ms.setAction('Out');
  this.ms.setHome('N');
  this.navCtrl.navigateForward('tabs/checkoutPage');
  }
}
