
import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ICBService } from 'src/shared/service';
import { Authentication } from 'src/shared/shared';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html',
  providers: [ICBService]
})
export class HeaderPage {
    @Input() title: any;

  constructor(public navCtrl: NavController, public authentication: Authentication, private location: Location) {

      }

  logOut() {
         this.authentication.logout();
         this.navCtrl.navigateForward('tabs/login');

 }

 goBack() {
    this.location.back();

}

}
