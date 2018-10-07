import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ICBService } from '../../shared/service';
import { ToastService } from 'src/shared/toaster.service';

@Component({
    template: `
    <ion-content>
    <ion-list no-padding no-margin>
        <ion-list-header>Wish List</ion-list-header>
        <ion-item *ngFor="let wish of wishes; let i=index;" (click)="close()"
          text-wrap style="color: green; font-size: .8em;align-content: right">
        {{wish.BookDescription}}
        <ion-icon name="trash" slot="end" (click)=deleteFromWishList(wish.ISBN,i)></ion-icon>
        </ion-item>
        <ion-footer style="text-align:center">More Info...</ion-footer>
      </ion-list>
      </ion-content>
      `,
    providers: [ICBService],
  })
  export class PopoverPage {
    public wishes: any;
    constructor(public viewCtrl: ModalController, private service: ICBService, public toastCtrl: ToastService, navParams: NavParams) {
     this.wishes = navParams.data.data;
    }

    public deleteFromWishList(ISBN: any , i: any ) {
      this.service.AddToWishList(ISBN).then(
        async () => {
          this.toastCtrl.showToast('Removed from the Wish List!');
          this.wishes.splice(i, 1);
        },
    );
  }

    public async close() {
      const topLoader = await this.viewCtrl.getTop();
      if (topLoader ) {
        await topLoader.dismiss();
        }
    }
  }
