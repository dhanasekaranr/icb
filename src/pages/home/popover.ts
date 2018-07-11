import { Component } from '@angular/core';
import { icbService } from '../../shared/service';
import { ToastController,NavParams,ViewController } from 'ionic-angular';

@Component({
    template: `
      <ion-list>
        <ion-list-header>Wish List</ion-list-header>
        <ion-item *ngFor="let wish of wishes; let i=index;" (click)="close()" text-wrap style="color: green; font-size: .8em;align-content: right">
        {{wish.BookDescription}}
        <ion-icon name="trash" item-end (click)=deleteFromWishList(wish.ISBN,i)></ion-icon>
        </ion-item>
        <ion-footer style="text-align:center">More Info...</ion-footer>
      </ion-list>
      `,
    providers: [icbService]
  })
  export class PopoverPage {
    wishes: any;
    constructor(public viewCtrl: ViewController, private service: icbService,public toastCtrl: ToastController,navParams: NavParams) {
     this.wishes = navParams.data.data;
    }

    deleteFromWishList(ISBN,i) {
      this.service.AddToWishList(ISBN).then(
        data => {
          let toast = this.toastCtrl.create({
           message: 'Removed from the Wish List!',
           duration: 2000
         });
         toast.present();
        // this.viewCtrl.dismiss("Y");
        this.wishes.splice(i, 1);
        }
    )};

    close() {
      this.viewCtrl.dismiss(this.wishes.length);
    }
  }
