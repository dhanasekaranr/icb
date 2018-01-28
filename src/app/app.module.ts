import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { RegisterExternalUser } from '../pages/registerExternalUser/registerExternalUser';
import { ValuesPage } from '../pages/values/values';
import { Tab } from '../pages/tab/tab';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { UserPage } from '../pages/user/user';
import { BookInfo } from '../pages/home/BookInfo';
import { CheckOutPage } from '../pages/home/CheckOut';
import { MultiCopies } from '../pages/home/MultiCopies';
import { ReturnPage } from '../pages/home/Return';
import { Search} from '../shared/Search';
@NgModule({
  declarations: [
    MyApp,
    RegisterExternalUser,
    ValuesPage,
      Login,
      Tab, HomePage, ContactPage, UserPage,BookInfo, CheckOutPage,ReturnPage, Search,MultiCopies
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterExternalUser,
    ValuesPage,
    Login,
      Tab, HomePage, ContactPage, UserPage, BookInfo, CheckOutPage,ReturnPage,MultiCopies
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
