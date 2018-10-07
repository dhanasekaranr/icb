import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { ToastService } from 'src/shared/toaster.service';
import { Authentication } from '../shared/authentication.service';
import { CredentialsAuthentication } from '../shared/credentialsAuthentication';
import { GlobalFunctions } from '../shared/globalFunctions';
import { GlobalSettings } from '../shared/globalSettings';
import { ICBService } from '../shared/service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ICBService, InAppBrowser, ToastService,
  ],
  bootstrap: [AppComponent],
  exports:      [],
})
export class AppModule {

}
