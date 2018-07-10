import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { RegisterExternalUser } from '../pages/registerExternalUser/registerExternalUser';
import { ValuesPage } from '../pages/values/values';
import { Tab } from '../pages/tab/tab';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
<<<<<<< HEAD
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

=======
import { AboutPage } from '../pages/about/about';
>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc
@NgModule({
  declarations: [
    MyApp,
    RegisterExternalUser,
    ValuesPage,
      Login,
<<<<<<< HEAD
      Tab, HomePage, ContactPage, UserPage,BookInfo, CheckOutPage,ReturnPage, Search,MultiCopies,DashPage,ScanPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),BrowserModule,IonicStorageModule.forRoot(),HttpModule,HttpClientModule
=======
      Tab, HomePage, ContactPage, AboutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterExternalUser,
    ValuesPage,
    Login,
<<<<<<< HEAD
      Tab, HomePage, ContactPage, UserPage, BookInfo, CheckOutPage,ReturnPage,MultiCopies,DashPage,ScanPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider, BarcodeScanner,
    Toast]
=======
      Tab, HomePage, ContactPage, AboutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc
})
export class AppModule {}
