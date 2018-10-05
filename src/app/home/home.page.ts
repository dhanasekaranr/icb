import { Component, ViewChild } from '@angular/core';
import { LoadingController, NavController, PopoverController } from '@ionic/angular';
import { Chart } from 'chart.js';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { MasterDetailService } from '../../providers/data-service/masterDetailService';
import { Authentication } from '../../shared/authentication.service';
import { ICBService } from '../../shared/service';
import { NotificationPopoverPage } from './notificationPopover';
import { PopoverPage } from './popover';
import { settingPopoverPage } from './settingPopover';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public books: Array<any>;
  public booksStat: Array<any>;
  public completedMonth = [];
  public rentalMonth = [];
  public Months = [];
  public AvailableCount = 0; public RentedOut: 0;
  public wishes: Array<any>;
  public notification: Array<any>;
  public WishesCount = 0;
  public NotificationCount = 0;
  public Transactions: any;
  public TransactionsCount = 0;
  public holds: any;
  public holdsCount = 0;

  public loader: any;
  constructor(public navCtrl: NavController, public authentication: Authentication,
              private service: ICBService, public popoverCtrl: PopoverController, private ms: MasterDetailService,
              public loading: LoadingController) {

  }
  @ViewChild('lineCanvas') public lineCanvas: { nativeElement: any; };

  public lineChart: any;
  public async ionViewWillEnter() {
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
        this.getReceiving();
        });
       } else {
         this.navCtrl.navigateForward('tabs/login');
       }
   }
   public async settingsPopover(myEvent: any) {
    const popover = await this.popoverCtrl.create({
      component: settingPopoverPage,      event: myEvent,
      translucent: true});

    return await popover.present();
    popover.onDidDismiss();

 }

   public async presentPopover(myEvent: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      componentProps : { data: this.wishes },
      event: myEvent,
      translucent: true,
    });
    return await popover.present();

    popover.onDidDismiss();

  }

  public async notificationPopover(myEvent: any) {

    const popover = await this.popoverCtrl.create({ component: NotificationPopoverPage, 
      componentProps : { data: this.notification },
      event: myEvent,
      translucent: true,
    });
    popover.present();
    popover.onDidDismiss();
  }

  public bookInfo( key: any) {
    this.ms.setDestn(key);
    this.navCtrl.navigateForward('/tabs/bookInfo');
  }
  public showRentals( key: any) {
    this.ms.setDestn(key);
    this.navCtrl.navigateForward('/tabs/rentalsPage');
  }

  public showReceiving( key: any) {
    this.ms.setDestn(key);
    this.navCtrl.navigateForward('/tabs/receivingPage');
  }


  public showStats() {
    this.navCtrl.navigateForward('/tabs/statsPage');
  }

  public showHistory( key: any) {
    this.ms.setDestn(key);
    this.navCtrl.navigateForward('/tabs/historyPage');
  }
  public getNotificationList() {
    this.service.getNotificationList().then(
        (data) => {
          this.notification = data;
          this.NotificationCount = this.notification.length;
      });
    }
  public getRentalTransactions() {

    this.service.getRentalTransactions().then(
        (data) => {
          this.Transactions = data;
          this.TransactionsCount = this.Transactions.length;
          this.loader.dismiss();
      },
  ); }

  public getReceiving() {

    this.service.getReceiving().then(
        (data) => {
          this.holds = data;
          this.holdsCount = this.holds.length;
          this.loader.dismiss();
      },
  ); }


  public getActiveWishList() {
    this.service.getActiveWishList().then(
        (data) => {
          this.wishes = data;
          this.WishesCount = this.wishes.length;
      },
  ); }
   public getBookCounts() {
      this.service.searchTrans('book', '').then(
        (data) => {

          this.books = data;
          this.RentedOut =  this.books.reduce((previous, current) => {
            return previous + parseInt(current.RentedCopies, 10);
          }, 0);
          this.AvailableCount = this.books.reduce((previous, current) => {
            return previous + parseInt(current.TotalCopies, 10);
          }, 0);
              },
          ).catch((err) => {
            console.log(err);
        });
    }
   public getRentalStatus() {
        this.service.getRentalStatus('monthly', '0').then(
            (data) => {
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
              },
          ).catch((err) => {
                console.log(err);
        });
    }
  public drawLineChart() {

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
                  label: 'In Rental',
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
              },
            ],
        },

    });

}
public logOut() {
  this.authentication.logout();
  this.navCtrl.navigateForward('/tabs/login');

}
}
