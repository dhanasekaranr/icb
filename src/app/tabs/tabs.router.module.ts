
import { CheckOutPage } from '../rental/checkout/CheckOut';
import { CurrentRentalsPage } from './../home/currentRentals/currentRentals';
import { NewsPage } from '../home/news/news';
import { LoginPage } from '../login/login';
import { BookInfoPage } from '../BookInfo/BookInfo';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { StatsPage } from '../home/stats/stats';
import { MultiCopiesPage } from '../rental/checkout/MultiCopies';
import { MultipleReturnPage } from '../rental/multipleReturn';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {path: 'home',        children: [{path: '', loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)}]},
      {path: 'catalogue',
        children: [{path: '', loadChildren: () => import('../catalogue/catalogue.module').then(m => m.CataloguePageModule)}]},
      {path: 'registration',
        children: [{path: '', loadChildren: () => import('../registration/registration.module').then(m => m.RegistrationPageModule)}]},
      {path: 'rental',      children: [{path: '', loadChildren: () => import('../rental/rental.module').then(m => m.RentalPageModule)}]},
      {path: 'history',     children: [{path: '', loadChildren: () => import('../history/history.module').then(m => m.HistoryPageModule)}]},
      {path: 'users',       children: [{path: '', loadChildren: () => import('../users/users.module').then(m => m.UsersPageModule)}]},
      {path: 'profile',     children: [{path: '', loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)}]},
      {path: 'settings',
        children: [{path: '', loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)}]},
      {path: 'login',       component: LoginPage},
      {path: 'bookInfo',    component: BookInfoPage},
      {path: 'rentalsPage', component: CurrentRentalsPage},
      {path: 'statsPage',   component: NewsPage},
      {path: 'historyPage', component: StatsPage},
      {path: 'checkoutPage', component: CheckOutPage},
      {path: 'multiCopiesPage', component: MultiCopiesPage},
      {path: 'multipleReturnPage', component: MultipleReturnPage},
      {path: '', redirectTo: '/tabs/home', pathMatch: 'full'}
      ]
  },
      {path: '', redirectTo: '/tabs/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
