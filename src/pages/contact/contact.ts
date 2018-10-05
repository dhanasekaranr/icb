import { Component } from '@angular/core';
import { NavController, Platform, ToastController,LoadingController } from 'ionic-angular';
import { icbService } from '../../shared/service';
import { CheckOutPage } from '../home/CheckOut';
import { Authentication } from '../../shared/shared';

import { Login } from '../login/login';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers:[icbService]
})
export class ContactPage {

  books: Array<any>;
  loader; CodeSearch: string = '';
  constructor(public navCtrl: NavController, private icbservice: icbService, public platform: Platform,
    public toastCtrl: ToastController,public authentication: Authentication,public loading: LoadingController) {
}
searchTransDB() {
      this.icbservice.searchTrans('book','GetBookCodes').then(
          data => {
              this.books = data;
           //   console.log(data);
          }
      );

}
FilterBookDB(event){
  this.CodeSearch = event.target.value;

}

ionViewWillEnter(){
 if(this.books != null) {return;}
    if( this.authentication.getAccessToken() != null){
      this.loader = this.loading.create({content: 'Getting books...'});
      this.searchTransDB();
      //console.log('test');
    }
    else{
      this.navCtrl.push(Login);
    }
}
markReturn(trasnsId){
  this.icbservice.markReturn(trasnsId).then(
    data => {
      //this.books = data;
      let toast = this.toastCtrl.create({
       message: "Returned successfully !",
       duration: 2000
     });
     toast.present();
     this.searchTransDB();
  }
);
}
checkout( key)
{

    this.navCtrl.push(CheckOutPage, {
      book:key, code: key.Code, isbn: key.ISBN,copy:key.TotalCopies - key.RentedCopies,action: 'Out', home:'N'
    });
}
logOut() {
  // console.log(event.target.value);
       this.authentication.logout();
       this.navCtrl.push(Login);

}

}

