
import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Authentication } from '../../shared/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html',

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
