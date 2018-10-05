import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { MasterDetailService } from '../../providers/data-service/masterDetailService';
import { Authentication } from '../../shared/authentication.service';
import { ICBService } from '../../shared/service';
import { LoginPage } from '../login/login';

@Component({
    selector: 'page-BookInfo',
    templateUrl: 'BookInfo.html',
    providers: [ICBService],
})
export class BookInfoPage {
    public book: any;
    public title: any; public subtitle: any; public author: any; public description: any; public ReadCountHistory: any;
    public getValue: any;
    public isbn: any;

    constructor(public navCtrl: NavController, private route: ActivatedRoute, private router: Router,
                private bookService: ICBService, public authentication: Authentication, private ms: MasterDetailService) {

    }
    public ionViewWillEnter() {
      if ( this.authentication.getAccessToken() != null) {
          this.book = this.ms.getDestn();
         // console.log(this.book);
          this.description = this.book.Description;
          this.ReadCountHistory = this.book.ReadCountHistory;
          this.isbn = this.book.ISBN;
          this.bookService.GetBookInfo(this.book.ISBN).then(
                      (data) => {
                        if (!data.items) { return; }
                        this.title = data.items[0].volumeInfo.title;
                        this.subtitle = data.items[0].volumeInfo.subtitle;
                        if (data.items[0].volumeInfo.authors) {
                        this.author = data.items[0].volumeInfo.authors[0];
                        }
                        this.description = data.items[0].volumeInfo.description;
                      });
        } else {
          this.navCtrl.navigateForward('tabs/login');
        }
    }

}
