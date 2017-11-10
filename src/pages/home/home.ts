import { Component } from '@angular/core';
import { NavController, Platform, ActionSheetController } from 'ionic-angular';
import { icbService } from '../../shared/service';
import { MovieInfo } from './movie-info';
import { TransPage } from './trans';
import { RentPage } from './Rent';
import { Authentication, User } from '../../shared/shared';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [icbService]

})

export class HomePage {

    movies: Array<any>;
    Available : Array<any>;
    AvailableCount : any;
    RentedOut;
    constructor(public navCtrl: NavController, private service: icbService, public platform: Platform,
        public actionsheetCtrl: ActionSheetController,private authentication: Authentication,) {

          //if (this.authentication.getAccessToken() != null) {
          this.searchBookDB(null);
         // }

    }

    searchBookDB(event){
       // console.log(event.target.value);
       let queryval = "";
       if( event )
         queryval = event.target.value;
        if (queryval.length > 1 || queryval == "" ) {
            this.service.searchTrans('values',queryval).then(
              data => {
                this.movies = data;
                //console.log(data);
            }
        );
        }
    }
    bookInfo( key)
    {
      this.navCtrl.push(MovieInfo, {
        movie:key
      });
    }
    returnBook( key)
    {
      this.navCtrl.push(TransPage, {
        book:key, isbn: key.ISBN,action: 'Out'
      });
    }
    checkout( key)
    {
      this.navCtrl.push(RentPage, {
        book:key, isbn: key.ISBN,action: 'Out'
      });
    }
    openMenu(event, key) {
      this.service.getBookProfile(key.ISBN).then(
        data => {
          this.Available = data;
          this.RentedOut = this.Available.filter((t) => t.Status == '3').length;
          this.AvailableCount = this.Available.filter((t) => t.Status != '3').length;
          let actionSheet = this.actionsheetCtrl.create({
            title: 'Click the link below.',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Book Info [Count: ' + this.Available.length + ']',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'list' : null,
                    handler: () => {
                       // console.log('Delete clicked');
                        this.navCtrl.push(MovieInfo, {
                            movie: key
                        });
                    }
                },
         /*       {
                    text: 'Checked Out - ' + this.RentedOut,
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: () => {
                        //console.log('Checked Out clicked');
                        if( this.RentedOut > 0 )
                        this.navCtrl.push(TransPage, {
                          book:key, isbn: key.ISBN,action: 'Out'
                      });
                    }
                },
                {
                    text: 'Available - ' + this.AvailableCount,
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: () => {
                      if( this.AvailableCount > 0 )
                      this.navCtrl.push(RentPage, {
                        book:key, isbn: key.ISBN,action: 'Out'
                    });
                    }
                },*/

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
      });
    }
    itemTapped(event, movie) {
        this.navCtrl.push(MovieInfo, {
            movie: movie
        });
    }
}
