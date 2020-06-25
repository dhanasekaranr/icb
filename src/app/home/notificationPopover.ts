import { Component } from '@angular/core';
import { ICBService } from '../../shared/service';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
    template: `
    <ion-content>
      <ion-list no-padding no-margin>
      <ion-list-header>Current Rental</ion-list-header>
        <ion-item *ngFor="let wish of notifications" (click)="close()" text-wrap style="color: green; font-size: .8em;align-content: right">
        {{wish.AlertMessage.Message}}
        <p>{{wish.AlertMessage.SubMessage | date: 'MM/dd/yyyy'}}</p>
         <ion-icon name="trash" slot="end" ></ion-icon>
        </ion-item>
      </ion-list>
     </ion-content>
      `,
    providers: [ICBService]
  })
  export class NotificationPopoverPage {
    notifications: any;
    constructor(public viewCtrl: ModalController, navParams: NavParams) {
     this.notifications = navParams.data.data;
    }



    async close() {
      //this.viewCtrl.dismiss(this.notifications.length);
      const topLoader = await this.viewCtrl.getTop();
      if (topLoader ) {
        await topLoader.dismiss(this.notifications.length);
      }
    }
  }
