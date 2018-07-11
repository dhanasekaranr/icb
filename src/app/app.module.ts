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
import { IonicStorageModule } from '@ionic/Storage';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from "@angular/common/http";
import { DashPage } from '../pages/dashboard/dash';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { ScanPage } from '../pages/scanner/scan';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
@NgModule({
  declarations: [
    MyApp,
    RegisterExternalUser,

      Login,
      Tab, HomePage, ContactPage, UserPage,BookInfo, CheckOutPage,ReturnPage, Search,MultiCopies,DashPage,ScanPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),BrowserModule,IonicStorageModule.forRoot(),HttpModule,HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterExternalUser,

    Login,
      Tab, HomePage, ContactPage, UserPage, BookInfo, CheckOutPage,ReturnPage,MultiCopies,DashPage,ScanPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider, BarcodeScanner,
    Toast]
})
export class AppModule {}
