import { Component } from '@angular/core';
import { NavController, Platform, ActionSheetController,ToastController } from 'ionic-angular';
import { icbService } from '../../shared/service';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
  providers: [icbService]

})
export class UserPage {
  users: Array<any>;
  queryval = "";
  constructor(public navCtrl: NavController, private icbservice: icbService, public platform: Platform,
    public actionsheetCtrl: ActionSheetController, public toastCtrl: ToastController) {
      this.searchUserDB(null);
}
ionViewWillEnter(){
  // this.searchBookDB(this.queryval);
   //console.log("Enter :", this.users)
   if(this.users) //reload the data.
     this.icbservice.searchTrans('user',this.queryval).then(data => {this.users = data;});

 }
searchUserDB(event) {
  this.queryval = "";
    if( event ){
      if(event.target.value != undefined)
        this.queryval = event.target.value;
     }

    if (this.queryval.length > 1 || this.queryval == "") {
        this.icbservice.searchTrans('user',this.queryval).then(
            data => {
              this.users = data;
              console.log(data);
          }
      );
      }
}
notify(userId, BookId, transactions){
     this.icbservice.notify(userId, BookId, transactions,this.queryval).then(
               data => {
                 console.log(data);
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
}
