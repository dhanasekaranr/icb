import { Component, OnDestroy } from '@angular/core';

import { ActionSheetController, LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/providers/nav-controller';
import { MasterDetailService } from '../../providers/data-service/masterDetailService';
import { Authentication } from '../../shared/authentication.service';
import { ICBService } from '../../shared/service';
import { HeaderPage } from '../layout/header';

@Component({
  selector: 'app-catalogue',
  templateUrl: 'catalogue.page.html',
  styleUrls: ['catalogue.page.scss'],
  providers: [ICBService, HeaderPage],
})
export class CataloguePage {
  public books: Array<any>; public Available: Array<any>;
  public AvailableCount: any; public RentedOut: any ; public queryval = '';
  public loader: any ; public DescriptionSearch = '';
  public userlist: any;
  public selectedBook: any;
  
  constructor(public navCtrl: NavController, private service: ICBService, public platform: Platform,
              public authentication: Authentication,
              public loading: LoadingController, public toastCtrl: ToastController, private ms: MasterDetailService,
              public actionSheetCtrl: ActionSheetController) {

      }
  
   public async ionViewWillEnter() {
   // if (this.books != null) {return; }
    if ( this.authentication.getAccessToken() != null) {
        this.loader = await this.loading.create({message: 'Getting books...'});
        this.searchBookDB(null);
        //
        this.service.getRelationShips().then(
          async (data) => {
           this.userlist = data;
          });

      } else {
        this.navCtrl.navigateForward('tabs/login');
      }
  }

  public searchBookDB(event: any ) {
     if ( event ) {
      if (event.target.value !== undefined) {
        this.queryval = event.target.value;
      }
     }
     if ( this.queryval.length > 1 ||  this.queryval === '' ) {

        this.loader.present().then(() => {
          this.service.searchTrans('book', this.queryval).then(
            (data) => {
              console.log(data);
              this.books = data;
              this.RentedOut =  this.books.reduce((previous, current) => {
                return previous + parseInt(current.RentedCopies, 10);
              }, 0);
              this.AvailableCount = this.books.reduce((previous, current) => {
                return previous + parseInt(current.TotalCopies, 10);
              }, 0);
              this.loader.dismiss();
                  },
              ).catch((err) => {
                console.log(err);
            });

        });

      }
  }
  public getIdCheval() {

    this.AvailableCount = this.books.reduce((previous, current) => {
      return previous + parseInt(current.Course.allocation, 10);
    }, 0);
  }
  public FilterBookDB(event: any ) {
    this.DescriptionSearch = event.target.value;

}

  public bookInfo( key: any ) {
    this.ms.setDestn(key);
    this.navCtrl.navigateForward('tabs/bookInfo');
  }
  public AddToWishList(key: any , flag: any , message: any ) {
    this.service.AddToWishList(key.ISBN).then(
      async (data) => {
        const toast = await this.toastCtrl.create({
         message,
         duration: 1000,
       });
        toast.present();
        key.WishList = flag;
      },
    );
  }

  public async AddToHold(key: any) {
    let actionSheet: any;
    const actionbutton: any[] =  [];

    this.userlist.forEach(async (option) => {
      actionbutton.push({
              text: option.FirstName + ' ' + option.LastName ,
              handler: () => {
                const message: any  = 'Placed hold request';
                this.service.AddToHold(key.ISBN, key.ProposedCode, option.UserId, key.CreatedBy).then(
                  async (data) => {
                    const toast = await this.toastCtrl.create({
                      message ,
                     duration: 1000,
                   });
                    toast.present();
                    if (data) {
                      key.Hold = 'Y';
                    }
                  },
                  );
                actionSheet.dismiss();
                return false;
              },
            });

        });
            // cancel
    actionbutton.push({text: 'Cancel' ,
    icon: 'close',
    role: 'destructive',
              handler: () => {
                actionSheet.dismiss();
                return false;
              }});

    actionSheet = await this.actionSheetCtrl.create({header: 'Pick a Name ', buttons: actionbutton});

    actionSheet.present();
  }
  public returnBook( key: any ) {

        if (key.TotalCopies > 1 ) {
          this.ms.setDestn(key);
          this.navCtrl.navigateForward('tabs/multipleReturnPage');
        } else {
          this.service.markReturn(key.RentedTransId).then(
            async (data) => {
              const toast = await this.toastCtrl.create({
               message: 'Returned successfully !',
               duration: 2000,
             });
              toast.present();
              this.searchBookDB(null);
      });
    }
  }
  public checkout( key: any) {
    this.ms.setDestn(key);
    this.ms.setAction('Out');
    if (key.TotalCopies > 1 ) {
      this.navCtrl.navigateForward('tabs/multiCopiesPage');
    } else {
      this.ms.setHome('C');
      this.navCtrl.navigateForward('tabs/checkoutPage');
  }

  }
  public openMenu(event, key) {
    this.service.getBookProfile(key.ISBN).then(
      async (data) => {
        this.Available = data;
        this.RentedOut = this.Available.filter((t) => t.Status === '3').length;
        this.AvailableCount = this.Available.filter((t) => t.Status !== '3').length;
        const actionSheet = await this.actionSheetCtrl.create({
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
                        book: key,
                      },
                    };
                     this.navCtrl.navigateForward('CheckOutPage', navigationOptions);
                  },
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
                  },
              },
          ],
      });
        actionSheet.present();
    });
  }
  public itemTapped(event, book) {
    const navigationOptions: NavigationOptions = {queryParams: {book}};
    this.navCtrl.navigateForward('BookInfo', navigationOptions);

     /*this.navCtrl.push(BookInfo, {
          book
      });*/
  }

}
