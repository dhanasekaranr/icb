import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ICBService } from '../../shared/service';
import { Authentication } from '../../shared/authentication.service';
import { LoginPage } from '../login/login';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterDetailService } from 'src/providers/data-service/masterDetailService';
@Component({
    selector: 'page-BookInfo',
    templateUrl: 'BookInfo.html',
    providers: [ICBService]
})
export class BookInfoPage {
    book: any;
    title: any; subtitle: any; author: any; description: any; ReadCountHistory: any;
    getValue: any;

    constructor(public navCtrl: NavController, private route: ActivatedRoute, private router: Router,
                private bookService: ICBService, public authentication: Authentication, private ms: MasterDetailService) {

    }
    ionViewWillEnter() {
      this.book = this.ms.getDestn();
      this.description = this.book.Description;
      this.ReadCountHistory = this.book.ReadCountHistory;
      this.bookService.GetBookInfo(this.book.ISBN).then(
                  data => {
                    if (!data.items) { return; }
                    this.title = data.items[0].volumeInfo.title;
                    this.subtitle = data.items[0].volumeInfo.subtitle;
                    if (data.items[0].volumeInfo.authors) {
                    this.author = data.items[0].volumeInfo.authors[0];
                    }
                    this.description = data.items[0].volumeInfo.description;
                  });
    }

}
