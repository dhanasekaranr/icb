import { ReturnPage } from './Return';
import { Tab } from '../tab/tab';
import { Component } from '@angular/core';
import { NavController, Platform, ActionSheetController } from 'ionic-angular';
import { icbService } from '../../shared/service';
import { BookInfo } from './BookInfo';
import { CheckOutPage } from './CheckOut';
import { User,Authentication } from '../../shared/shared';
import { Login } from '../login/login';
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
    queryval = "";
    constructor(public navCtrl: NavController, private service: icbService, public platform: Platform,
        public actionsheetCtrl: ActionSheetController,public authentication: Authentication) {

          //if (this.authentication.getAccessToken() != null) {
          this.searchBookDB(null);
         // }

    }
    ionViewWillEnter(){
     // this.searchBookDB(this.queryval);
      //console.log("entering ionViewWillEnter;",this.movies)

       if(this.movies) //reload the data.
         this.service.searchTrans('values',this.queryval).then(data => {this.movies = data;});
    }
    searchBookDB(event){
       // console.log(event.target.value);
      // let queryval = "";

       if( event ){
        if(event.target.value != undefined)
          this.queryval = event.target.value;
       }
        if ( this.queryval.length > 1 ||  this.queryval == "" ) {
            this.service.searchTrans('values', this.queryval).then(
              data => {
                this.movies = data;
               // console.log(data);
            }
        ).catch(err => {
           console.log(err);
      });
        }
    }
    bookInfo( key)
    {
      this.navCtrl.push(BookInfo, {
        movie:key
      });
    }
    returnBook( key)
    {
      this.navCtrl.push(ReturnPage, {
        book:key, isbn: key.ISBN,action: 'Out'
      });
    }
    checkout( key)
    {
      this.navCtrl.push(CheckOutPage, {
        book:key, isbn: key.ISBN,copy:key.TotalCopies - key.RentedCopies,action: 'Out'
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
                        this.navCtrl.push(BookInfo, {
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
        this.navCtrl.push(BookInfo, {
            movie: movie
        });
    }
    logOut() {
      // console.log(event.target.value);
           this.authentication.logout();
           this.navCtrl.push(Login);

   }
}
