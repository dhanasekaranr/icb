import { Component } from '@angular/core';
import { NavController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ICBService } from '../../shared/service';
import { Authentication } from '../../shared/authentication.service';
import { MasterDetailService } from '../../providers/data-service/masterDetailService';

@Component({
  selector: 'app-rental',
  templateUrl: 'rental.page.html',
  styleUrls: ['rental.page.scss']
})
export class RentalPage {
  sub: any;
  books: Array<any>;
  loader: Promise<HTMLIonLoadingElement>; CodeSearch = '';
  constructor(public navCtrl: NavController, private icbservice: ICBService, public platform: Platform,
              public toastCtrl: ToastController, public authentication: Authentication, public loading: LoadingController,
              private ms: MasterDetailService, private route: ActivatedRoute,
              private router: Router) {
}
searchTransDB() {
      this.icbservice.searchTrans('book', 'GetBookCodes').then(
          data => {
              this.books = data;
          });
}
FilterBookDB(event) {
  this.CodeSearch = event.target.value;

}
OnDestroy() {
  this.sub.unsubscribe();
}

ionViewWillEnter() {
 this.sub  = this.route
      .queryParams
      .subscribe(params => {
        if ( params.refresh) {
          this.books = null;
        }
      });

 if (this.books != null) {return; }
 if ( this.authentication.getAccessToken() != null) {
      this.loader = this.loading.create({
        message: 'Getting books...'
      });
      this.searchTransDB();
    } else {
     this.navCtrl.navigateForward('tabs/login');
    }
}
markReturn(trasnsId: any) {
  this.icbservice.markReturn(trasnsId).then(
    async data => {
      const toast = await this.toastCtrl.create({
       message: 'Returned successfully !',
       duration: 2000
     });
      toast.present();
      this.searchTransDB();
  });
}
checkout( key: any ) {
  this.ms.setDestn(key);
  this.ms.setAction('Out');
  this.ms.setHome('N');
  this.navCtrl.navigateForward('tabs/checkoutPage');
  }
}
