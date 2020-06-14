import { Component,ViewChild } from '@angular/core';
import { NavController, Platform, ActionSheetController,ToastController,LoadingController } from 'ionic-angular';
import { icbService } from '../../shared/service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
  providers: [icbService]

})
export class ScanPage {
  products: any;
  selectedProduct: any;
  productFound:boolean = false;

  constructor(public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    private toast: Toast,
    public dataService: DataServiceProvider,public platform: Platform) {

      this.dataService.getListDetails()
      .subscribe((response)=> {
          this.products = response
         // console.log(this.products);
      });

    }



    scan() {
      this.selectedProduct = {};

      if (this.platform.is('cordova')) {
      this.barcodeScanner.scan().then((barcodeData) => {
        this.selectedProduct = this.products.find(product => product.plu === barcodeData.text);
        if(this.selectedProduct !== undefined) {
          this.productFound = true;
        } else {
          this.productFound = false;
          this.toast.show(`Product not found`, '5000', 'center').subscribe(
            toast => {
              //console.log(toast);
            }
          );
        }
      }, (err) => {
        this.toast.show(err, '5000', 'center').subscribe(
          toast => {
            //console.log(toast);
          }
        );
      });
    }
    else {
      console.log('not impleted - browser click');
    }


    }

}
