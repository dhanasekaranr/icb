import { Component } from '@angular/core';
import { ActionSheetController, LoadingController, NavController, Platform } from '@ionic/angular';
import { MasterDetailService } from '../../providers/data-service/masterDetailService';
import { Authentication } from '../../shared/authentication.service';
import { ICBService } from '../../shared/service';
import { ToastService } from 'src/shared/toaster.service';

@Component({
  selector: 'app-receiving',
  templateUrl: 'receiving.page.html',
  styleUrls: ['receiving.page.scss'],
})
export class ReceivingPage  {
  public sub: any;
  public holds: Array<any>;
  public loader: any; public DescriptionSearch = '';
  constructor(public navCtrl: NavController, private icbservice: ICBService, public platform: Platform,
              public toastCtrl: ToastService, public authentication: Authentication, public loading: LoadingController,
              private ms: MasterDetailService, public actionSheetCtrl: ActionSheetController) {
}
public searchTransDB() {
  this.loader.present().then(() => {
    this.icbservice.searchTrans('hold', '').then(
        (data) => {
          this.holds = data;
          this.loader.dismiss();
      },
      ).catch((err) => {
        console.log(err);
        this.loader.dismiss();
    });

    });
}
public bookInfo( key: any ) {
  this.ms.setDestn(key);
  this.navCtrl.navigateForward('tabs/bookInfo');
}

public FilterBookDB(event) {
  this.DescriptionSearch = event.target.value;

}
public OnDestroy() {
  this.sub.unsubscribe();
}

public async ionViewWillEnter() {
if ( this.authentication.getAccessToken() != null) {
     this.loader = await this.loading.create({message: 'Getting Holds...'});
     this.searchTransDB();
    } else {
     this.navCtrl.navigateForward('tabs/login');
    }
}

public async denied( key: any ) {

      this.icbservice.updateHold(key.HolderId, key.Id, key.Code, key.ISBN, 29).then(
        async (data) => {
          this.toastCtrl.showToastException('Hold Denied. Notified!')
          key.Status = 29;
          this.searchTransDB();
      });


  }

  public async markPickedUp( key: any ) {

    this.icbservice.updateHold(key.HolderId, key.Id, key.Code, key.ISBN, 28).then(
      async (data) => {
        this.toastCtrl.showToast('Picked Up !');
        key.Status = 28;
        this.searchTransDB();

      });
   //


  }

  public async rented( key: any ) {
    this.icbservice.updateHold(key.HolderId, key.Id, key.Code, key.ISBN, 30).then(
      async (data) => {
        this.toastCtrl.showToast('Request Closed and Rented out!');
        key.Status = 30;
        this.searchTransDB();

      });

  }
  public async readyforPickup( key: any ) {
      this.icbservice.updateHold(key.HolderId, key.Id, key.Code, key.ISBN, 27).then(
        async (data) => {
          this.toastCtrl.showToast('Notified, Ready for PickUp !');
          key.Status = 27;
          this.searchTransDB();

      });
    }

}

