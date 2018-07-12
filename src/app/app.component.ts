import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HttpClientModule  } from '@angular/common/http';
import { Authentication, FacebookAuthentication, CredentialsAuthentication, GlobalSettings, User} from '../shared/shared';
import { Login } from '../pages/login/login';
import { Tab } from '../pages/tab/tab';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { UserPage } from '../pages/user/user';
import { BookInfo } from '../pages/home/BookInfo';
import { ReturnPage } from '../pages/home/Return';
import { CheckOutPage } from '../pages/home/CheckOut';
import { MultiCopies } from '../pages/home/MultiCopies';
import { IonicStorageModule } from '@ionic/Storage';
@Component({
  templateUrl: 'app.html',
  providers: [
    HttpClientModule,
    IonicStorageModule,
    Authentication,
    FacebookAuthentication,
    CredentialsAuthentication,
    User,
    GlobalSettings,
      Tab, HomePage, ContactPage, UserPage, BookInfo, ReturnPage,CheckOutPage,MultiCopies
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Tab;

  constructor(public platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
