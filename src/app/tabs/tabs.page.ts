import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Authentication } from 'src/shared/shared';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

    constructor(public navCtrl: NavController,
                public authentication: Authentication, public storage: Storage) {

          this.storage.get('accessToken').then((token) => {
                if (token == null) {
                  this.navCtrl.navigateForward('tabs/login');
                }
            });
          }
}
