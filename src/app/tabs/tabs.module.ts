import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../shared/pipes.module';
import { BookInfoPage } from '../BookInfo/BookInfo';
import { CurrentRentalsPage } from '../home/currentRentals/currentRentals';
import { NewsPage } from '../home/news/news';
import { StatsPage } from '../home/stats/stats';
import { LayoutModule } from '../layout/layout.module';
import { LoginPage } from '../login/login';
import { CheckOutPage } from '../rental/checkout/CheckOut';
import { MultiCopiesPage } from '../rental/checkout/MultiCopies';
import { MultipleReturnPage } from '../rental/multipleReturn';
import { ReceivingPage } from '../rental/receiving.page';
import { ReturnPage } from '../rental/Return';
import { MaterialModule } from './../material.module';
import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tabs.router.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule, MaterialModule, PipesModule, LayoutModule,
  ],
  declarations: [TabsPage, LoginPage, BookInfoPage, CurrentRentalsPage, NewsPage,
    StatsPage, CheckOutPage, MultiCopiesPage, MultipleReturnPage, ReceivingPage, ReturnPage],
    
})
export class TabsPageModule {}
