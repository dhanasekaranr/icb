import { Component } from '@angular/core';
import { NavParams, ModalController, NavController, PopoverController } from '@ionic/angular';

@Component({

   template: `<ion-content>
    <ion-list>
        <ion-item (click)="goSettings()"
        text-wrap style="font-size: 1em;">
           Settings<ion-icon name="settings" slot="start"></ion-icon>
        </ion-item>
        <ion-item (click)="goProfile()"
        text-wrap style="font-size: 1em;">
           Profile<ion-icon name="person" slot="start"></ion-icon>
        </ion-item>
        <ion-item (click)="close()"
        text-wrap style="font-size: 1em;">
           Log Out<ion-icon name="log-out" slot="start"></ion-icon>
        </ion-item>
      </ion-list>
      </ion-content>`,

})
export class SettingPopover {

   constructor (public viewCtrl: ModalController, public navCtrl: NavController,
             public navParams: NavParams,private popoverController: PopoverController) {
   }
   async goProfile() {
      await this.popoverController.dismiss();
      this.navCtrl.navigateForward('/tabs/profile');
 
    }
    async goSettings() {
      await this.popoverController.dismiss();
      this.navCtrl.navigateForward('/tabs/settings');
 
    }
 async close() {
   await this.popoverController.dismiss();
 }
}