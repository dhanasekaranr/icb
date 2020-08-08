import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
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
  public loader: Promise<HTMLIonLoadingElement>; public CodeSearch = '';
  constructor(public navCtrl: NavController, private icbservice: ICBService, public platform: Platform,
              public toastCtrl: ToastController, public authentication: Authentication, public loading: LoadingController,
              private ms: MasterDetailService, private route: ActivatedRoute,
              private router: Router) {
}
public searchTransDB() {
      this.icbservice.searchTrans('book', 'GetBookCodes').then(
          (data) => {
              this.books = data;
          });
}
public FilterBookDB(event) {
  this.CodeSearch = event.target.value;

}
public OnDestroy() {
  this.sub.unsubscribe();
}

public ionViewWillEnter() {
 this.sub  = this.route
      .queryParams
      .subscribe((params) => {
        if ( params.refresh) {
          this.books = null;
        }
      });

 if (this.books != null) {return; }
 if ( this.authentication.getAccessToken() != null) {
      this.loader = this.loading.create({
        message: 'Getting books...',
      });
      this.searchTransDB();
    } else {
     this.navCtrl.navigateForward('tabs/login');
    }
}
public markReturn(trasnsId: any) {
  this.icbservice.markReturn(trasnsId).then(
    async (data) => {
      const toast = await this.toastCtrl.create({
       message: 'Returned successfully !',
       duration: 2000,
     });
      toast.present();
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
