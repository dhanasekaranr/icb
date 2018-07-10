import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { icbService } from '../../shared/service';
import { Tab } from '../tab/tab';
import { Authentication } from '../../shared/shared';
import { Login } from '../login/login';
@Component({
    selector: 'page-BookInfo',
    templateUrl: 'BookInfo.html',
    providers: [icbService]
})
export class BookInfo {
    book: {};
    title; subtitle; author;description;
    constructor(public navCtrl: NavController, private navParams: NavParams, private bookService: icbService,public authentication: Authentication) {
        this.book = navParams.get('book');
        //this.title = this.bookService.GetBookInfo( navParams.get('movie').ISBN );

        this.bookService.GetBookInfo(navParams.get('book').ISBN).then(
          data => {
            if(!data.items) return;
            console.log(data.items);

            this.title = data.items[0].volumeInfo.title;
            this.subtitle = data.items[0].volumeInfo.subtitle;
            if(data.items[0].volumeInfo.authors)
            this.author = data.items[0].volumeInfo.authors[0];
            this.description = data.items[0].volumeInfo.description;

          });

    }
    logOut() {
           this.authentication.logout();
           this.navCtrl.push(Login);

   }
}
