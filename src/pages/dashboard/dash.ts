import { StatsPage } from './../stats/stats';
import { BookInfo } from '../home/BookInfo';
import { RentalsPage } from '../home/rentals';
import { Component,ViewChild } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { icbService } from '../../shared/service';
import { Authentication } from '../../shared/shared';
import { Login } from '../login/login';
import { Chart } from 'chart.js';
import { PopoverPage } from '../home/popover';
import { NotificationPopoverPage } from '../home/notificationPopover';
import { HistoryPage } from './../history/history';

@Component({
  selector: 'page-dash',
  templateUrl: 'dash.html',
  providers: [icbService]

})
export class DashPage {
  books: Array<any>;
  booksStat: Array<any>;
  RentalMonth = [];
  Months = [];
  AvailableCount=0;RentedOut;
  wishes: Array<any>;
  notification: Array<any>;
  WishesCount=0;
  NotificationCount=0;
  Transactions:any;
  TransactionsCount=0;
  constructor(public navCtrl: NavController, public authentication: Authentication,private service: icbService,public popoverCtrl: PopoverController) {

  }
  @ViewChild('lineCanvas') lineCanvas;

  lineChart: any;
  ionViewWillEnter(){
       if( this.authentication.getAccessToken() != null){

         this.getRentalStatus();
         this.getBookCounts();
         this.getActiveWishList();
         this.getNotificationList();
         this.getRentalTransactions();
       }
       else{
         this.navCtrl.push(Login);
       }
   }
   presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage,{ data: this.wishes });
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(data => {
      this.WishesCount = this.wishes.length;
    })
  }
  notificationPopover(myEvent) {
    let popover = this.popoverCtrl.create(NotificationPopoverPage,{ data: this.notification });
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(data => {
      this.NotificationCount = this.notification.length;
    })
  }

  bookInfo( key)
  {
    this.navCtrl.push(BookInfo, {
      book:key
    });
  }
  showRentals( key)
  {
    this.navCtrl.push(RentalsPage, {
      rentals:key
    });
  }
  showStats()
  {
    this.navCtrl.push(StatsPage, {

    });
  }

  showHistory( key)
  {
    this.navCtrl.push(HistoryPage, {
      books:key
    });
  }
  getNotificationList() {
    this.service.getNotificationList().then(
        data => {
          this.notification =data;
          this.NotificationCount = this.notification.length;
          //(data);
      }
  )};
  getRentalTransactions() {

    this.service.getRentalTransactions().then(
        data => {
          this.Transactions =data;
          this.TransactionsCount = this.Transactions.length;
         // console.log("getRentalTransactions");
        //  console.log(data);
      }
  )};

  getActiveWishList() {
    this.service.getActiveWishList().then(
        data => {
          this.wishes = data;
          this.WishesCount = this.wishes.length;
      }
  )};
   getBookCounts(){
      this.service.searchTrans('book', '').then(
        data => {

          this.books = data;
          this.RentedOut =  this.books.reduce((previous, current) => {
            return previous + parseInt(current.RentedCopies);
          }, 0);
          this.AvailableCount = this.books.reduce((previous, current) => {
            return previous + parseInt(current.TotalCopies);
          }, 0);
              }
          ).catch(err => {
            console.log(err);
        });
    }
   getRentalStatus() {
     console.log("in");
        this.service.getRentalStatus('monthly', '3').then(
            data => {
              this.booksStat =data;
              this.RentalMonth.length = 0;
              this.Months.length=0;
                  for(var key in this.booksStat){
                    this.RentalMonth.push(this.booksStat[key].Borrower);
                    this.Months.push(this.booksStat[key].RentalMonth);
                  }
                  this.lineChart.update();
              }
          ).catch(err => {
                console.log(err);
        });
    }
  ionViewDidLoad() {

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

        type: 'line',
        data: {
            labels:this.Months,
            datasets: [
                {
                    label: "Rental Stats",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 1,
                    pointRadius: 1,
                    pointHitRadius: 1,
                    data: this.RentalMonth,
                    spanGaps: true,
                }
            ]
        }

    });

}
logOut() {
  this.authentication.logout();
  this.navCtrl.push(Login);
}
}
