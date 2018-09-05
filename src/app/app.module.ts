import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { RegisterExternalUser } from '../pages/registerExternalUser/registerExternalUser';
import { Tab } from '../pages/tab/tab';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { UserPage } from '../pages/user/user';
import { BookInfo } from '../pages/home/BookInfo';
import { CheckOutPage } from '../pages/home/CheckOut';
import { MultiCopies } from '../pages/home/MultiCopies';
import { ReturnPage } from '../pages/home/Return';
import { Search} from '../shared/Search';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
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
  ],
  imports: [
    IonicModule.forRoot(MyApp),BrowserModule,IonicStorageModule.forRoot(),HttpModule,HttpClientModule
  ],
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
})
export class AppModule {}
