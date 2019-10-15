import { HeaderPage } from 'src/app/layout/header';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { Component } from '@angular/core';
import { NavController, ToastController, Platform, LoadingController, ActionSheetController } from '@ionic/angular';
import { ICBService } from 'src/shared/service';
import { Authentication } from 'src/shared/shared';
import { MasterDetailService } from 'src/providers/data-service/masterDetailService';



@Component({
  selector: 'app-catalogue',
  templateUrl: 'catalogue.page.html',
  styleUrls: ['catalogue.page.scss'],
  providers: [ICBService, HeaderPage]
})
export class CataloguePage {
  books: Array<any>; Available: Array<any>;
  AvailableCount: any; RentedOut: any ; queryval = '';
  loader: any ; DescriptionSearch = '';

  constructor(public navCtrl: NavController, private service: ICBService, public platform: Platform,
              public actionsheetCtrl: ActionSheetController, public authentication: Authentication,
              public loading: LoadingController, public toastCtrl: ToastController, private ms: MasterDetailService) {

      }


   async ionViewWillEnter() {
   // if (this.books != null) {return; }
    if ( this.authentication.getAccessToken() != null) {
        this.loader = await this.loading.create({message: 'Getting books...'});
        this.searchBookDB(null);
      } else {
        this.navCtrl.navigateForward('tabs/login');
      }
  }

  searchBookDB(event: any ) {
     if ( event ) {
      if (event.target.value !== undefined) {
        this.queryval = event.target.value;
      }
     }
     if ( this.queryval.length > 1 ||  this.queryval === '' ) {


        this.loader.present().then(() => {
          this.service.searchTrans('book', this.queryval).then(
            data => {
              console.log(data);
              this.books = data;
              this.RentedOut =  this.books.reduce((previous, current) => {
                return previous + parseInt(current.RentedCopies, 10);
              }, 0);
              this.AvailableCount = this.books.reduce((previous, current) => {
                return previous + parseInt(current.TotalCopies, 10);
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
      return previous + parseInt(current.Course.allocation, 10);
    }, 0);
  }
  FilterBookDB(event: any ) {
    this.DescriptionSearch = event.target.value;

}

  bookInfo( key: any ) {
    this.ms.setDestn(key);
    this.navCtrl.navigateForward('tabs/bookInfo');
  }
  AddToWishList(key: any , flag: any , message: any ) {
    this.service.AddToWishList(key.ISBN).then(
      async data => {
        const toast = await this.toastCtrl.create({
         message,
         duration: 2000
       });
        toast.present();
        key.WishList = flag;
      }
);
  }
  returnBook( key: any ) {

        if (key.TotalCopies > 1 ) {
          this.ms.setDestn(key);
          this.navCtrl.navigateForward('tabs/multipleReturnPage');
        } else {
          this.service.markReturn(key.RentedTransId).then(
            async data => {
              const toast = await this.toastCtrl.create({
               message: 'Returned successfully !',
               duration: 2000
             });
              toast.present();
              this.searchBookDB(null);
      });
    }
  }
  checkout( key: any) {
    this.ms.setDestn(key);
    this.ms.setAction('Out');
    if (key.TotalCopies > 1 ) {
      this.navCtrl.navigateForward('tabs/multiCopiesPage');
    } else {
      this.ms.setHome('C');
      this.navCtrl.navigateForward('tabs/checkoutPage');
  }

  }
  openMenu(event, key) {
    this.service.getBookProfile(key.ISBN).then(
      async data => {
        this.Available = data;
        this.RentedOut = this.Available.filter((t) => t.Status === '3').length;
        this.AvailableCount = this.Available.filter((t) => t.Status !== '3').length;
        const actionSheet = await this.actionsheetCtrl.create({
          header: 'Click the link below.',
          cssClass: 'action-sheets-basic-page',
          buttons: [
              {
                  text: 'Book Info [Count: ' + this.Available.length + ']',
                  role: 'destructive',
                  icon: !this.platform.is('ios') ? 'list' : null,
                  handler: () => {
                     const navigationOptions: NavigationOptions = {
                      queryParams: {
                        book: key
                      }
                    };
                     this.navCtrl.navigateForward('CheckOutPage', navigationOptions);
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
                  }
              }
          ]
      });
        actionSheet.present();
    });
  }
  itemTapped(event, book) {
    const navigationOptions: NavigationOptions = {queryParams: {book}};
    this.navCtrl.navigateForward('BookInfo', navigationOptions);

     /*this.navCtrl.push(BookInfo, {
          book
      });*/
  }

}
