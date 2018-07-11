import { HeaderPage } from './layout/header';
import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PopoverPage } from './home/popover';
import { NotificationPopoverPage } from './home/notificationPopover';

import { IonicStorageModule } from '@ionic/storage';
import { SettingPopover } from './home/settingPopover';
import { Authentication } from '../shared/authentication.service';
import { CredentialsAuthentication } from '../shared/credentialsAuthentication';
import { User } from '../shared/user';
import { GlobalSettings } from '../shared/globalSettings';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [
    HttpClientModule,  HttpClient,
    IonicStorageModule,
   PopoverPage, NotificationPopoverPage, Authentication, SettingPopover,
   CredentialsAuthentication,
   User,
   GlobalSettings, HeaderPage
  ]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
