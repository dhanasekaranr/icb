import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ICBService } from '../../shared/service';

@Component({
    template: `
    <ion-content>
      <ion-list>
      <h5 style="text-align:center">Current Rental</h5>
        <ion-item *ngFor="let wish of notifications" (click)="close()" text-wrap >
        {{wish.AlertMessage.Message}}
        <p slot="end">{{wish.AlertMessage.SubMessage | date: 'MM/dd/yyyy'}}</p>
         <ion-icon name="trash" slot="end"></ion-icon>
        </ion-item>
      </ion-list>
     </ion-content>
      `,
    providers: [ICBService],
  })
  export class NotificationPopoverPage {
    public notifications: any;
    constructor(public viewCtrl: ModalController, navParams: NavParams) {
     this.notifications = navParams.data.data;
    }

    public async close() {
      // this.viewCtrl.dismiss(this.notifications.length);
      const topLoader = await this.viewCtrl.getTop();
      if (topLoader ) {
        await topLoader.dismiss(this.notifications.length);
      }
    }
  }
