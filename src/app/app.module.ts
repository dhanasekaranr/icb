import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage';
<<<<<<< HEAD
import { Authentication } from '../shared/authentication.service';
import { CredentialsAuthentication } from '../shared/credentialsAuthentication';
import { GlobalFunctions } from '../shared/globalFunctions';
import { GlobalSettings } from '../shared/globalSettings';
import { ICBService } from '../shared/service';
import { NotificationPopoverPage } from './home/notificationPopover';
import { PopoverPage } from './home/popover';
import { settingPopoverPage } from './home/settingPopover';

@NgModule({
  declarations: [AppComponent, PopoverPage, NotificationPopoverPage, settingPopoverPage],
  entryComponents: [PopoverPage, NotificationPopoverPage, settingPopoverPage],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule, HttpClientModule,
      BrowserAnimationsModule],
  providers: [GlobalSettings, GlobalFunctions, Authentication, CredentialsAuthentication,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ICBService, InAppBrowser,
=======
import { HttpModule } from '@angular/http';
import { HttpClientModule} from "@angular/common/http";
import { DashPage } from '../pages/dashboard/dash';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { ScanPage } from '../pages/scanner/scan';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { PopoverPage } from '../pages/home/popover';
import { NotificationPopoverPage } from '../pages/home/notificationPopover';
import { RentalsPage } from '../pages/home/rentals';
import { StatsPage } from '../pages/stats/stats';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { TwitterService } from 'ng2-twitter';
import { TwitterProvider } from '../providers/twitter/twitter';
import { HistoryPage } from '../pages/history/history';
@NgModule({
  declarations: [
    MyApp,
    RegisterExternalUser,
      Login,
      Tab, HomePage, ContactPage, UserPage,BookInfo, CheckOutPage,ReturnPage, Search,MultiCopies,DashPage,ScanPage,
      PopoverPage,NotificationPopoverPage,RentalsPage,StatsPage,HistoryPage
>>>>>>> Version 3.10
  ],
  bootstrap: [AppComponent],
  exports:      [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
<<<<<<< HEAD
=======
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterExternalUser,
    Login,
      Tab, HomePage, ContactPage, UserPage, BookInfo, CheckOutPage,ReturnPage,MultiCopies,DashPage,ScanPage,PopoverPage,
      NotificationPopoverPage,RentalsPage,StatsPage,HistoryPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider, BarcodeScanner, TwitterConnect,
    TwitterService,
    InAppBrowser,
    TwitterProvider,
    Toast,
    TwitterProvider]
>>>>>>> Version 3.10
})
export class AppModule {

}
