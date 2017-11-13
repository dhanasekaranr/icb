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
import { MovieInfo } from '../pages/home/movie-info';
import { TransPage } from '../pages/home/trans';
import { RentPage } from '../pages/home/Rent';
@NgModule({
  declarations: [
    MyApp,
    RegisterExternalUser,
    ValuesPage,
      Login,
      Tab, HomePage, ContactPage, UserPage,MovieInfo, TransPage,RentPage
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
      Tab, HomePage, ContactPage, UserPage, MovieInfo, TransPage,RentPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
