import { Component } from '@angular/core';
import { icbService } from '../../shared/service';
import { ToastController,NavParams,ViewController } from 'ionic-angular';

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
    providers: [icbService]
  })
  export class NotificationPopoverPage {
    notifications: any;
    constructor(public viewCtrl: ViewController, private service: icbService,public toastCtrl: ToastController,navParams: NavParams) {
     this.notifications = navParams.data.data;
    }



    close() {
      this.viewCtrl.dismiss(this.notifications.length);
    }
  }
