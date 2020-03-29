import { Component, ViewChild } from '@angular/core';
import { NavController} from '@ionic/angular';
import { ICBService } from '../../../shared/service';
import { Chart } from 'chart.js';
import { MasterDetailService } from 'src/providers/data-service/masterDetailService';
import { Authentication } from 'src/shared/shared';
import 'chartjs-plugin-labels';
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
  providers: [ICBService]

})
export class StatsPage {


  constructor(public navCtrl: NavController, private service: ICBService, private ms: MasterDetailService,
              public authentication: Authentication) {

  }
 // Doughnut
 doughnutChartLabels =  [];
 demodoughnutChartData =  [];
 doughnutBackGroundColor = [];
 doughnutHoverColor =  [];

 public doughnutChartType = 'doughnut';
 barChart: any;
 doughnutChart: any;
 label = [];
 bookData = [];
 books = [];
 transactions = [];
 choice: any;

 @ViewChild('barCanvas') barCanvas: { nativeElement: any; };
 @ViewChild('doughnutCanvas') doughnutCanvas: { nativeElement: any; };


 doughnutChartMethod() {
  this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
    type: 'pie',
    data: {
      labels: this.doughnutChartLabels,
      datasets: [{
        data: this.demodoughnutChartData,
        backgroundColor: this.doughnutBackGroundColor,
        hoverBackgroundColor: this.doughnutHoverColor
      }]
    },
    options: {
      plugins: {
        labels: {
          render: 'percentage', fontColor: '#fff',
        }
      },
      title: {
        display: true,
        text: 'Academic Year Book Completion By Class'
      },
        legend: {
          display: true,
          position: 'bottom'
        },

      tooltips: {
        callbacks: {
          label(tooltipItem, data) {
            const allData = data.datasets[tooltipItem.datasetIndex].data;
            const tooltipLabel = data.labels[tooltipItem.index];
            const tooltipData: any = allData[tooltipItem.index];
            let total: any = 0;

            allData.forEach((i) =>  {total += i; });

            const tooltipPercentage = Math.round((tooltipData / total) * 100);

            return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
          }
        }
      }
    }



  });
}

  ionViewWillEnter() {
    this.drawBarChart();
    this.randomize('monthly');
    this.displayChart();
  }

  displayChart() {
    this.doughnutChartLabels =  [] ;
    this.demodoughnutChartData =  [] ;
    this.doughnutBackGroundColor = [] ;
    this.doughnutHoverColor =  [] ;

    this.service.getSchoolStats('17').then(
      data => {
        data.forEach ( (key: { Category: any; Count: any; PieChartBackgroundColor: any; PierChartHoverColor: any; }) =>  {
          this.doughnutChartLabels.push(key.Category);
          this.demodoughnutChartData.push(key.Count);
          this.doughnutBackGroundColor.push(key.PieChartBackgroundColor);
          this.doughnutHoverColor.push(key.PierChartHoverColor);
          this.doughnutChartMethod();
        });
        }
    ).catch(err => {
          console.log(err);
  });
}
  drawBarChart() {
          this.barChart = new Chart(this.barCanvas.nativeElement, {
              type: 'bar',
              data: {
                  labels: this.label,
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
                plugins: {
                  labels: {
                    render: 'value'
                  }
                },
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero: true
                          }
                      }]
                  },
                  onClick :  (evt: any, item: any) => {
                      if (item[0] == null) { return; }
                      const label = item[0]._model.label;
                      this.service.getRentalStatusDetails(this.choice, label).then(
                          data => {
                            this.transactions = data;
                            }
                        ).catch(err => {
                              console.log(err);
                      });

                  }
              }

          });
    }
    bookInfo( key: any) {
      this.ms.setDestn(key);
      this.navCtrl.navigateForward('tabs/bookInfo');
    }

public randomize(choice: any): void {
  // Only Change 3 values

  this.label.length = 0;
  this.bookData.length = 0;
  this.choice = choice;
  this.service.getRentalStatus(choice, '17').then(
    data => {
        this.books = data;
        this.bookData.length = 0;
        this.label.length = 0;
        this.books.forEach((key) => {
          if (key.Stat === 17) {
            this.bookData.push(key.Borrower);
            this.label.push(key.RentalMonth);
          }
        });
        this.barChart.update();
      }
  ).catch(err => {
        console.log(err);
});

  this.barChart.update();
}
}
