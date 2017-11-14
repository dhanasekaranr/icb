import { Component } from '@angular/core';
import { NavController, Platform, ActionSheetController } from 'ionic-angular';
import { icbService } from '../../shared/service';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
  providers: [icbService]

})
export class UserPage {
  users: Array<any>;
  constructor(public navCtrl: NavController, private movieService: icbService, public platform: Platform,
    public actionsheetCtrl: ActionSheetController) {
      this.searchUserDB(null);
}
searchUserDB(event) {
    let queryval = "";
    if( event ){
      if(event.target.value != undefined)
        queryval = event.target.value;
     }

    if (queryval.length > 1 || queryval == "") {
        this.movieService.searchTrans('user',queryval).then(
            data => {
              this.users = data;
              console.log(data);
          }
      );
      }
}
openMenu(event, key) {
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
