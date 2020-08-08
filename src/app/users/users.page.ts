import { Component } from '@angular/core';
import { ActionSheetController, LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { Authentication } from '../../shared/authentication.service';
import { ICBService } from '../../shared/service';

@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss'],
})
export class UsersPage {

  public users: Array<any>;
  public arr: Array<any>;
  public queryval = '';
  public loader; public FirstNameSearch;
  constructor(public navCtrl: NavController, private icbservice: ICBService, public platform: Platform,
              public actionsheetCtrl: ActionSheetController, public toastCtrl: ToastController, public loading: LoadingController,
              public authentication: Authentication) {
}

public async ionViewWillEnter() {
  if ( this.authentication.getAccessToken() != null) {
        this.loader = await this.loading.create({message: 'Getting Users...'});
        this.searchUserDB(null);
    } else {
    this.navCtrl.navigateForward('tabs/login');
  }

 }
public searchUserDB(event: any) {
  this.queryval = '';
  if ( event ) {
      if (event.target.value !== undefined) {
        this.queryval = event.target.value;
      }
     }

  if (this.queryval.length > 1 || this.queryval === '') {
      this.loader.present().then(() => {
        this.icbservice.searchTrans('user', this.queryval).then(
            (data) => {
              this.users = data;
              this.loader.dismiss();
          });
      });
     }
}
public FilterUserDB(event: any) {
  this.FirstNameSearch = event.target.value;
}
public notify(userId: any, BookId: any, transactions: any) {
  this.icbservice.notify(userId, BookId, transactions, this.queryval).then(
               async (data) => {
                 this.users = data;
                 const toast = await this.toastCtrl.create({
                  message: 'Notified User !',
                  duration: 2000,
                });
                 toast.present();
             },
         );
     }
}
