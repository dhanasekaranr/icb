// ionic-toast.service.ts
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  private myToast: any;

  constructor(
    private toast: ToastController,
  ) { }

  public showToast(text: any) {
    this.myToast = this.toast.create({
        message: text,
        duration: 2000,
        cssClass: 'toast-mess',
    }).then((toastData) => {
      toastData.present();
    });
  }

  public showToastException(text: any) {
    this.myToast = this.toast.create({
      message: text,
      duration: 2000,
      cssClass: 'toast-mess-exception',
    }).then((toastData) => {
      toastData.present();
    });
  }

  public HideToast() {
    this.myToast = this.toast.dismiss();
  }

}
