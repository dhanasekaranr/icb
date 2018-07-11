import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopoverPage } from './home/popover';
import { NotificationPopoverPage } from './home/notificationPopover';
import { SettingPopover } from './home/settingPopover';
import { GlobalSettings } from '../shared/globalSettings';
import { GlobalFunctions } from '../shared/globalFunctions';
import { Authentication } from '../shared/authentication.service';
import { CredentialsAuthentication } from '../shared/credentialsAuthentication';
import { ICBService } from '../shared/service';

@NgModule({
  declarations: [AppComponent, PopoverPage, NotificationPopoverPage,SettingPopover],
  entryComponents: [PopoverPage, NotificationPopoverPage, SettingPopover],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule, HttpClientModule,
     ChartsModule, BrowserAnimationsModule],
  providers: [GlobalSettings, GlobalFunctions, Authentication, CredentialsAuthentication, 
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ICBService, InAppBrowser
  ],
  bootstrap: [AppComponent],
  exports:      []
})
export class AppModule {

}
