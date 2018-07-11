import { Component,ViewChild } from '@angular/core';
import { NavController, LoadingController, AlertController, ToastController,NavParams } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ICBService } from '../../shared/service';
import { Chart } from 'chart.js';
import { BookInfo } from '../home/BookInfo';
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
  providers: [ICBService]

})
export class HistoryPage {

  constructor(private navParams: NavParams, public navCtrl: NavController, private service: ICBService, private alertCtrl: AlertController,
    private loadingCtrl: LoadingController, private toastCtrl: ToastController, private iab: InAppBrowser) {
    this.books = navParams.get('books');
  }


  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  label = [];
  bookData= [];
  books = [];
  transactions = [];
  choice:any;
  ionViewWillEnter(){

    this.label.length = 0;
    this.bookData.length=0;
    for(var key in this.books){
      this.bookData.push(this.books[key].Borrower);
      this.label.push(this.books[key].RentalMonth);
    }

    this.barChart.update();
    this.choice = 'monthly';
  }

  ionViewDidLoad() {
          this.barChart = new Chart(this.barCanvas.nativeElement, {
              type: 'bar',
              data: {
                  labels:this.label,
                  datasets: [{
                      label: 'Books Read',
                      data: this.bookData,
                      backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgba(255, 159, 64, 0.2)'
                      ],
                      borderColor: [
                          'rgba(255,99,132,1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 1
                  }]
              },
              options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero:true
                          }
                      }]
                  },
                  'onClick' :  (evt, item) =>{
                    var self = this;
                      if(item[0] == null) return;
                        var label = item[0]['_model'].label;
                        this.service.getRentalStatusDetails(this.choice,label).then(
                          data => {
                            this.transactions =data;
                            }
                        ).catch(err => {
                              console.log(err);
                      });

                  }
              }

          });
    }
    bookInfo( key)
    {
      this.navCtrl.push(BookInfo, {
        book:key
      });
    }

public randomize(choice):void {
  // Only Change 3 values

  this.label.length = 0;
  this.bookData.length=0;
  this.choice = choice;
  this.service.getRentalStatus(choice,'17').then(
    data => {
        this.books =data;
        this.bookData.length = 0;
        this.label.length=0;
            for(var key in this.books){
              this.bookData.push(this.books[key].Borrower);
              this.label.push(this.books[key].RentalMonth);
            }
            this.barChart.update();
      }
  ).catch(err => {
        console.log(err);
});

  this.barChart.update();
}
}
