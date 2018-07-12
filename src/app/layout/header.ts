
import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Authentication } from '../../shared/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html',

})
export class HeaderPage {
    @Input() public title: any;

  constructor(public navCtrl: NavController, public authentication: Authentication, private location: Location) {

      }

  public logOut() {
         this.authentication.logout();
         this.navCtrl.navigateForward('tabs/login');

 }

 public goBack() {
    this.location.back();

}

}
