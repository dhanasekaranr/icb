import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HttpModule } from '@angular/http';
import { Storage } from '@ionic/storage';

import { Authentication, FacebookAuthentication, CredentialsAuthentication, Values, GlobalSettings, User } from '../shared/shared';

import { Login } from '../pages/login/login';
import { Tab } from '../pages/tab/tab';

import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { MovieInfo } from '../pages/home/movie-info';
import { TransPage } from '../pages/home/trans';
import { RentPage } from '../pages/home/Rent';
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
      Tab, HomePage, ContactPage, AboutPage, MovieInfo, TransPage,RentPage
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
