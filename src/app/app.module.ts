import { NotificationPopoverPage } from './../pages/home/notificationPopover';
import { PopoverPage } from './../pages/home/popover';
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
import { ICBService } from 'src/shared/service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, PopoverPage, NotificationPopoverPage],
  entryComponents: [PopoverPage, NotificationPopoverPage],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule, HttpClientModule,
     ChartsModule, BrowserAnimationsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ICBService, InAppBrowser
  ],
  bootstrap: [AppComponent],
  exports:      []
})
export class AppModule {

}
