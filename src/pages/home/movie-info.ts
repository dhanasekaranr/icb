import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { icbService } from '../../shared/service';

@Component({
    selector: 'page-movie-info',
    templateUrl: 'movie-info.html',
    providers: [icbService]
})
export class MovieInfo {

    book: {};

    constructor(public navCtrl: NavController, private navParams: NavParams, private bookService: icbService) {
        this.book = navParams.get('movie');

    }

}
