import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Authentication } from '../shared/authentication.service';
import { CredentialsAuthentication } from '../shared/credentialsAuthentication';
import { GlobalSettings } from '../shared/globalSettings';
import { User } from '../shared/user';
import { NotificationPopoverPage } from './home/notificationPopover';
import { PopoverPage } from './home/popover';
import { settingPopoverPage } from './home/settingPopover';
import { HeaderPage } from './layout/header';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [
    HttpClientModule,  HttpClient,
    IonicStorageModule,
   PopoverPage, NotificationPopoverPage, Authentication, settingPopoverPage,
   CredentialsAuthentication,
   User,
   GlobalSettings, HeaderPage,
  ],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  public initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
