import { Component, ViewChild } from '@angular/core';

import { PopoverController, NavController, LoadingController } from '@ionic/angular';
import { Authentication } from 'src/shared/shared';
import { ICBService } from 'src/shared/service';

import { Chart } from 'chart.js';
import { MasterDetailService } from 'src/providers/data-service/masterDetailService';
import { PopoverPage } from './popover';
import { NotificationPopoverPage } from './notificationPopover';
import { SettingPopover } from './settingPopover';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  books: Array<any>;
  booksStat: Array<any>;
  completedMonth = [];
  rentalMonth = [];
  Months = [];
  AvailableCount = 0; RentedOut: 0;
  wishes: Array<any>;
  notification: Array<any>;
  WishesCount = 0;
  NotificationCount = 0;
  Transactions: any;
  TransactionsCount = 0;
  loader: any;
  constructor(public navCtrl: NavController, public authentication: Authentication,
              private service: ICBService, public popoverCtrl: PopoverController, private ms: MasterDetailService,
              public loading: LoadingController) {

  }
  @ViewChild('lineCanvas') lineCanvas: { nativeElement: any; };

  lineChart: any;
  async ionViewWillEnter() {
       if ( this.authentication.getAccessToken() != null) {
        this.RentedOut = 0;
        this.loader = await this.loading.create({message: 'loading dashboard...'});
        this.loader.present().then(() => {
        this.drawLineChart();
        this.getRentalStatus();
        this.getBookCounts();
        this.getActiveWishList();
        this.getNotificationList();
        this.getRentalTransactions();
        });
       } else {
         this.navCtrl.navigateForward('tabs/login');
       }
   }
   async settingsPopover(myEvent: any) {
    const popover = await this.popoverCtrl.create({
      component: SettingPopover,      event: myEvent,
      translucent: true});

      return await popover.present();
      popover.onDidDismiss();
    
 }

   async presentPopover(myEvent: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      componentProps : { data: this.wishes },
      event: myEvent,
      translucent: true
    });
    return await popover.present();

    popover.onDidDismiss();

  }

  async notificationPopover(myEvent: any) {

    const popover = await this.popoverCtrl.create({ component: NotificationPopoverPage, componentProps : { data: this.notification }});
    popover.present();
    popover.onDidDismiss();
  }

  bookInfo( key: any) {
    this.ms.setDestn(key);
    this.navCtrl.navigateForward('/tabs/bookInfo');
  }
  showRentals( key: any) {
    this.ms.setDestn(key);
    this.navCtrl.navigateForward('/tabs/rentalsPage');
  }
  showStats() {
    this.navCtrl.navigateForward('/tabs/statsPage');
  }

  showHistory( key: any) {
    this.ms.setDestn(key);
    this.navCtrl.navigateForward('/tabs/historyPage');
  }
  getNotificationList() {
    this.service.getNotificationList().then(
        data => {
          this.notification = data;
          this.NotificationCount = this.notification.length;
      });
    }
  getRentalTransactions() {

    this.service.getRentalTransactions().then(
        data => {
          this.Transactions = data;
          this.TransactionsCount = this.Transactions.length;
          this.loader.dismiss();
      }
  ); }

  getActiveWishList() {
    this.service.getActiveWishList().then(
        data => {
          this.wishes = data;
          this.WishesCount = this.wishes.length;
      }
  ); }
   getBookCounts() {
      this.service.searchTrans('book', '').then(
        data => {

          this.books = data;
          this.RentedOut =  this.books.reduce((previous, current) => {
            return previous + parseInt(current.RentedCopies, 10);
          }, 0);
          this.AvailableCount = this.books.reduce((previous, current) => {
            return previous + parseInt(current.TotalCopies, 10);
          }, 0);
              }
          ).catch(err => {
            console.log(err);
        });
    }
   getRentalStatus() {
        this.service.getRentalStatus('monthly', '0').then(
            data => {
              this.booksStat = data;
              this.completedMonth.length = 0;
              this.rentalMonth.length = 0;
              this.Months.length = 0;
              this.booksStat.forEach ( (key) => {
                    if (key.Stat === 17) {
                      this.completedMonth.push(key.Borrower);
                    } else {
                      this.rentalMonth.push(key.Borrower);
                      this.Months.push(key.RentalMonth);
                    }
                  });
              this.lineChart.update();
              }
          ).catch(err => {
                console.log(err);
        });
    }
  drawLineChart() {

 this.lineChart = new Chart(this.lineCanvas.nativeElement, {

        type: 'line',
        data: {
            labels: this.Months,
            datasets: [
                {
                    label: 'Completed',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 1,
                    pointRadius: 1,
                    pointHitRadius: 1,
                    data: this.completedMonth,
                    spanGaps: true,
                },
                {
                  label: 'Current Rental',
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: 'rgba(192,77,192,0.4)',
                  borderColor: 'rgba(192,77,192,1)',
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: 'rgba(192,77,192,1)',
                  pointBackgroundColor: '#fff',
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: 'rgba(192,77,192,1)',
                  pointHoverBorderColor: 'rgba(220,220,220,1)',
                  pointHoverBorderWidth: 1,
                  pointRadius: 1,
                  pointHitRadius: 1,
                  data: this.rentalMonth,
                  spanGaps: true,
              }
            ]
        }

    });

}
logOut() {
  this.authentication.logout();
  this.navCtrl.navigateForward('/tabs/login');

}
}
