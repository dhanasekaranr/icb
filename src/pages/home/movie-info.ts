import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { icbService } from '../../shared/service';
import { Tab } from '../tab/tab';
import { Authentication } from '../../shared/shared';
import { Login } from '../login/login';
@Component({
    selector: 'page-movie-info',
    templateUrl: 'movie-info.html',
    providers: [icbService]
})
export class MovieInfo {
    title: 'Book Information'
    book: {};

    constructor(public navCtrl: NavController, private navParams: NavParams, private bookService: icbService,public authentication: Authentication) {
        this.book = navParams.get('movie');

    }
    logOut() {
           this.authentication.logout();
           this.navCtrl.push(Login);

   }
}
