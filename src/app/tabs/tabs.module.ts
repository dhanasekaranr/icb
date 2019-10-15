import { LayoutModule } from '../layout/layout.module';
import { StatsPage } from '../home/stats/stats';
import { NewsPage } from '../home/news/news';
import { MaterialModule } from './../material.module';
import { LoginPage } from '../login/login';
import { BookInfoPage } from '../BookInfo/BookInfo';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsPage } from './tabs.page';
import { PipesModule } from 'src/shared/pipes.module';
import { CurrentRentalsPage } from '../home/currentRentals/currentRentals';
import { CheckOutPage } from '../rental/checkout/CheckOut';
import { MultiCopiesPage } from '../rental/checkout/MultiCopies';
import { MultipleReturnPage } from '../rental/multipleReturn';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule, MaterialModule, PipesModule, LayoutModule,
  ],
  declarations: [TabsPage, LoginPage, BookInfoPage, CurrentRentalsPage, NewsPage,
    StatsPage, CheckOutPage, MultiCopiesPage, MultipleReturnPage]
})
export class TabsPageModule {}
