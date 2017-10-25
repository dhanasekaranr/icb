import { Component } from '@angular/core';
import { NavController, Platform, ActionSheetController } from 'ionic-angular';
import { icbService } from '../../shared/service';
import { MovieInfo } from './movie-info';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [icbService]

})

export class HomePage {

    movies: Array<any>;

    constructor(public navCtrl: NavController, private service: icbService, public platform: Platform,
        public actionsheetCtrl: ActionSheetController) {
            this.searchBookDB(null);
    }

    searchBookDB(event) {
       // console.log(event.target.value);
       let queryval = "";
       if( event )
         queryval = event.target.value;
        if (queryval.length > 1 || queryval == "" ) {
            this.service.searchBooks(queryval).subscribe(
                data => {
                    this.movies = data;
                   // console.log(data);
                },
                err => {
                    console.log(err);
                },
                () => console.log('Movie Search Complete')
            );
        }
    }
    openMenu(event, key) {
        let actionSheet = this.actionsheetCtrl.create({
            title: 'Click the link below.',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Book Info',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'list' : null,
                    handler: () => {
                       // console.log('Delete clicked');
                        this.navCtrl.push(MovieInfo, {
                            movie: key
                        });
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: () => {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: () => {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel', // will always sort to be on the bottom
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }
    itemTapped(event, movie) {
        this.navCtrl.push(MovieInfo, {
            movie: movie
        });
    }
}
