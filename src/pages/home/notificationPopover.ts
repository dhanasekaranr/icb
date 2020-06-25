import { Component } from '@angular/core';
import { ICBService } from '../../shared/service';
import { ToastController,NavParams, ModalController  } from '@ionic/angular';


@Component({
    template: `
      <ion-list>
        <ion-item *ngFor="let wish of notifications" (click)="close()" text-wrap style="color: green; font-size: .8em;align-content: right">
        {{wish.AlertMessage.Message}}
        {{wish.AlertMessage.SubMessage}}
         <ion-icon name="trash" item-end ></ion-icon>
        </ion-item>
      </ion-list>
      `,
    providers: [ICBService]
  })
  export class NotificationPopoverPage {
    notifications: any;
    constructor(public viewCtrl: ModalController , private service: ICBService,public toastCtrl: ToastController,navParams: NavParams) {
     this.notifications = navParams.data.data;
    }



    close() {
      this.viewCtrl.dismiss(this.notifications.length);
    }
  }
