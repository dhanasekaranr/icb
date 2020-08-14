import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { MasterDetailService } from '../../providers/data-service/masterDetailService';
import { Authentication } from '../../shared/authentication.service';
import { ICBService } from '../../shared/service';

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
              public toastCtrl: ToastController, public authentication: Authentication, public loading: LoadingController,
              private ms: MasterDetailService, private route: ActivatedRoute, public actionSheetCtrl: ActionSheetController,
              private router: Router) {
}
public searchTransDB() {
      this.icbservice.searchTrans('hold', '').then(
          (data) => {
           // console.log(data);
            this.holds = data;
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

public ionViewWillEnter() {
 this.sub  = this.route
      .queryParams
      .subscribe((params) => {
        if ( params.refresh) {
          this.holds = null;
        }
      });

 if (this.holds != null) {return; }
 if ( this.authentication.getAccessToken() != null) {
      this.loader = this.loading.create({
        message: 'Getting books...',
      });
      this.searchTransDB();
    } else {
     this.navCtrl.navigateForward('tabs/login');
    }
}

public async denied( key: any ) {
    this.loader = await this.loading.create({message: 'Updating...'});

    (await this.loader).present().then(() => {
      this.icbservice.updateHold(key.HolderId, key.Id, key.Code, key.ISBN, 29).then(
        async (data) => {
          const toast = await this.toastCtrl.create({
          message: 'Denied !',
          duration: 2000,
        });
          key.Status = 29;
          toast.present();
          this.loader.dismiss();
      });
    });
    this.searchTransDB();
  }

  public async markPickedUp( key: any ) {
    this.loader = await this.loading.create({message: 'Saving...'});

    (await this.loader).present().then(() => {
    this.icbservice.updateHold(key.HolderId, key.Id, key.Code, key.ISBN, 28).then(
      async (data) => {
        const toast = await this.toastCtrl.create({
         message: 'Picked Up !',
         duration: 2000,
       });
        key.Status = 28;
        toast.present();
        this.loader.dismiss();
      });
   // this.searchTransDB();
    });

  }

  public async rented( key: any ) {
    this.loader = await this.loading.create({message: 'Saving...'});
    (await this.loader).present().then(() => {
    this.icbservice.updateHold(key.HolderId, key.Id, key.Code, key.ISBN, 30).then(
      async (data) => {
        const toast = await this.toastCtrl.create({
         message: 'Closed !',
         duration: 2000,
       });
        key.Status = 30;
        toast.present();
        this.loader.dismiss();
    //    this.searchTransDB();
      });
    });
  }
  public async readyforPickup( key: any ) {
    this.loader = await this.loading.create({message: 'Saving...'});
    (await this.loader).present().then(() => {
      this.icbservice.updateHold(key.HolderId, key.Id, key.Code, key.ISBN, 27).then(
        async (data) => {
          const toast = await this.toastCtrl.create({
           message: 'Notified, Ready for PickUp !',
           duration: 2000,
         });
          key.Status = 27;
          toast.present();
          this.loader.dismiss();
        //  this.searchTransDB();
      });
    });
    }

}

