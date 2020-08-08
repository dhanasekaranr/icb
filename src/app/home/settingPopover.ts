import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, PopoverController } from '@ionic/angular';
import { Authentication } from '../../shared/authentication.service';
@Component({

   template: `<ion-content>
    <ion-list>
        <!-- <ion-item (click)="goSettings()"
        text-wrap style="font-size: 1em;">
           Settings<ion-icon name="settings" slot="start"></ion-icon>
        </ion-item>
        -->
        <ion-item (click)="goProfile()"
        text-wrap style="font-size: 1em;">
           Profile<ion-icon name="person" slot="start"></ion-icon>
        </ion-item>
        <!-- <ion-item (click)="close()"
        text-wrap style="font-size: 1em;">
           Log Out<ion-icon name="log-out" slot="start"></ion-icon>
        </ion-item> -->
      </ion-list>
      </ion-content>`,

})
export class settingPopoverPage {

   constructor(public viewCtrl: ModalController, public navCtrl: NavController,
               public authentication: Authentication,
               public navParams: NavParams, private popoverController: PopoverController) {
   }
   public async goProfile() {
      await this.popoverController.dismiss();
      this.navCtrl.navigateForward('/tabs/profile');

    }
    public async goSettings() {
      await this.popoverController.dismiss();
      this.navCtrl.navigateForward('/tabs/settings');

    }
 public async close() {
   await this.popoverController.dismiss();
   this.authentication.logout();
   this.navCtrl.navigateForward('tabs/login');
 }
}
