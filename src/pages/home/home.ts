<<<<<<< HEAD
import { ReturnPage } from './Return';
import { Tab } from '../tab/tab';
import { Component } from '@angular/core';
import { NavController, Platform, ActionSheetController } from 'ionic-angular';
import { icbService } from '../../shared/service';
import { BookInfo } from './BookInfo';
import { CheckOutPage } from './CheckOut';
import { User,Authentication } from '../../shared/shared';
import { Login } from '../login/login';
import { LoadingController } from 'ionic-angular';
import { MultiCopies} from './MultiCopies';
=======
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieService } from './movie-service';

>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
<<<<<<< HEAD
    providers: [icbService]
=======
    providers: [MovieService]
>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc

})

export class HomePage {

<<<<<<< HEAD
    books: Array<any>;Available : Array<any>;
    AvailableCount : any;RentedOut;queryval = "";
    loader;DescriptionSearch: string = '';

    constructor(public navCtrl: NavController, private service: icbService, public platform: Platform,
        public actionsheetCtrl: ActionSheetController,public authentication: Authentication,
        public loading: LoadingController) {

        }


     ionViewWillEnter(){
      if(this.books != null) {return;}
  //      console.log("Enter");
      if( this.authentication.getAccessToken() != null){
        this.loader = this.loading.create({content: 'Getting books...'});
        this.searchBookDB(null);
        }
        else{
          this.navCtrl.push(Login);
        }
    }

    searchBookDB(event){
  //      console.log(event);
      // let queryval = "";

       if( event ){
        if(event.target.value != undefined)
          this.queryval = event.target.value;
       }
        if ( this.queryval.length > 1 ||  this.queryval == "" ) {


          this.loader.present().then(() => {
            this.service.searchTrans('book', this.queryval).then(
              data => {
                this.books = data;
                this.RentedOut =  this.books.reduce((previous, current) => {
                  return previous + parseInt(current.RentedCopies);
                }, 0);
               // this.AvailableCount = data.filter((t) => t.Status == '2').length;

                this.AvailableCount = this.books.reduce((previous, current) => {
                  return previous + parseInt(current.TotalCopies);
                }, 0);
                this.loader.dismiss();
                    }
                ).catch(err => {
                  console.log(err);
              });

          });



        }
    }
    getIdCheval() {

      this.AvailableCount = this.books.reduce((previous, current) => {
        return previous + parseInt(current.Course.allocation);
      }, 0);
    }
    FilterBookDB(event){
      this.DescriptionSearch = event.target.value;

  }

    bookInfo( key)
    {
      this.navCtrl.push(BookInfo, {
        book:key
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
      if(key.TotalCopies > 1 ) {
        this.navCtrl.push(MultiCopies, {
          book:key, code: key.Code, isbn: key.ISBN,desc:key.Description,action: 'Out'
        });
      }
      else{
        this.navCtrl.push(CheckOutPage, {
          book:key, code: key.Code, isbn: key.ISBN,copy:key.TotalCopies - key.RentedCopies,action: 'Out'
        });
    }

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
                            book: key
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
    itemTapped(event, book) {
        this.navCtrl.push(BookInfo, {
            book: book
        });
    }
    logOut() {
      // console.log(event.target.value);
           this.authentication.logout();
           this.navCtrl.push(Login);

   }
=======
    movies: Array<any>;

    constructor(public navCtrl: NavController, private movieService: MovieService) {

    }

    searchMovieDB(event, key) {
        console.log(event.target.value);
        if (event.target.value.length > 2) {
            this.movieService.searchMovies(event.target.value).subscribe(
                data => {
                    this.movies = data.results;
                    console.log(data);
                },
                err => {
                    console.log(err);
                },
                () => console.log('Movie Search Complete')
            );
        }
    }

    //itemTapped(event, movie) {
    //    this.navCtrl.push(MovieInfoPage, {
    //        movie: movie
    //    });
    //}
>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc
}
