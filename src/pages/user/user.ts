import { Component } from '@angular/core';
import { NavController, Platform, ActionSheetController,ToastController,LoadingController } from 'ionic-angular';
import { icbService } from '../../shared/service';
import { HomePage } from '../home/home';
import { Authentication } from '../../shared/shared';
import { Login } from '../login/login';
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
  providers: [icbService]

})
export class UserPage {
  users: Array<any>;
  queryval = "";
  loader;FirstNameSearch;
  constructor(public navCtrl: NavController, private icbservice: icbService, public platform: Platform,
    public actionsheetCtrl: ActionSheetController, public toastCtrl: ToastController,public loading: LoadingController,
    public authentication: Authentication) {
      this.loader = this.loading.create({content: 'Getting Users...'});
      this.searchUserDB(null);
}
ionViewWillEnter(){
   if(this.users) { //reload the data.{
    this.loader = this.loading.create({content: 'Getting Users...'});
    this.icbservice.searchTrans('user',this.queryval).then(data => {this.users = data;});
  }
 }
searchUserDB(event) {
  this.queryval = "";
    if( event ){
      if(event.target.value != undefined)
        this.queryval = event.target.value;
     }

    if (this.queryval.length > 1 || this.queryval == "") {
      this.loader.present().then(() => {
        this.icbservice.searchTrans('user',this.queryval).then(
            data => {
              this.users = data;
              this.loader.dismiss();
          }
      );
      });
     }
}
FilterUserDB(event){
  this.FirstNameSearch = event.target.value;
}
notify(userId, BookId, transactions){
     this.icbservice.notify(userId, BookId, transactions,this.queryval).then(
               data => {
                 this.users = data;
                 let toast = this.toastCtrl.create({
                  message: "Notified User !",
                  duration: 2000
                });
                toast.present();
               //  this.navCtrl.push(HomePage);

             }
         );
     }
openMenu(key) {
  let actionSheet = this.actionsheetCtrl.create({
      title: 'Click the link below.',
      cssClass: 'action-sheets-basic-page',
      buttons: [
          {
              text: 'User Info',
              role: 'destructive',
              icon: !this.platform.is('ios') ? 'list' : null,
              handler: () => {
                  console.log('Delete clicked');
              }
          },
          {
              text: 'Share',
              icon: !this.platform.is('ios') ? 'share' : null,
              handler: () => {
                  console.log('Share clicked');
              }
          },
          {
              text: 'Cancel',
              role: 'cancel', // will always sort to be on the bottom
              icon: !this.platform.is('ios') ? 'close' : null,
              handler: () => {
                  console.log('Cancel clicked');
              }
          }
      ]
  });
  actionSheet.present();
}

logOut() {
  // console.log(event.target.value);
       this.authentication.logout();
       this.navCtrl.push(Login);

}

}
