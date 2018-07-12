import { Component } from '@angular/core';
import { NavController, Platform, ToastController, ActionSheetController, LoadingController } from '@ionic/angular';
import { ICBService } from '../../shared/service';
import { Authentication } from '../../shared/authentication.service';



@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss']
})
export class UsersPage {

  users: Array<any>;
  arr: Array<any>;
  queryval = '';
  loader; FirstNameSearch;
  constructor(public navCtrl: NavController, private icbservice: ICBService, public platform: Platform,
              public actionsheetCtrl: ActionSheetController, public toastCtrl: ToastController, public loading: LoadingController,
              public authentication: Authentication) {
}

async ionViewWillEnter() {
  if ( this.authentication.getAccessToken() != null) {
        this.loader = await this.loading.create({message: 'Getting Users...'});
        this.searchUserDB(null);
    } else {
    this.navCtrl.navigateForward('tabs/login');
  }

 }
searchUserDB(event: any) {
  this.queryval = '';
  if ( event ) {
      if (event.target.value !== undefined) {
        this.queryval = event.target.value;
      }
     }

  if (this.queryval.length > 1 || this.queryval === '') {
      this.loader.present().then(() => {
        this.icbservice.searchTrans('user', this.queryval).then(
            data => {
              this.users = data;
              this.loader.dismiss();
          });
      });
     }
}
FilterUserDB(event: any) {
  this.FirstNameSearch = event.target.value;
}
notify(userId: any, BookId: any, transactions: any) {
  this.icbservice.notify(userId, BookId, transactions, this.queryval).then(
               async data => {
                 this.users = data;
                 const toast = await this.toastCtrl.create({
                  message: 'Notified User !',
                  duration: 2000
                });
                 toast.present();
             }
         );
     }
}
