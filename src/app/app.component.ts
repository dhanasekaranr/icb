import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD

import { Authentication, FacebookAuthentication, CredentialsAuthentication, Values, GlobalSettings, User} from '../shared/shared';
=======
import { Storage } from '@ionic/storage';

import { Authentication, FacebookAuthentication, CredentialsAuthentication, Values, GlobalSettings, User } from '../shared/shared';
>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc

import { Login } from '../pages/login/login';
import { Tab } from '../pages/tab/tab';

import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
<<<<<<< HEAD
import { UserPage } from '../pages/user/user';
import { BookInfo } from '../pages/home/BookInfo';
import { ReturnPage } from '../pages/home/Return';
import { CheckOutPage } from '../pages/home/CheckOut';
import { MultiCopies } from '../pages/home/MultiCopies';
import { DashPage } from '../pages/dashboard/dash';
import { ScanPage } from '../pages/scanner/scan';
=======
import { AboutPage } from '../pages/about/about';

>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc
import '../shared/rxjs-operators';

@Component({
  templateUrl: 'app.html',
  providers: [
    HttpModule,
    Storage,
    Authentication,
    FacebookAuthentication,
    CredentialsAuthentication,
    Values,
    User,
    GlobalSettings,
<<<<<<< HEAD
      Tab, HomePage, ContactPage, UserPage, BookInfo, ReturnPage,CheckOutPage,MultiCopies,DashPage,ScanPage
=======
    Tab, HomePage, ContactPage, AboutPage
>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc
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
