import { Component} from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { ICBService } from '../../shared/service';
import { BarcodeScannerOriginal } from '@ionic-native/barcode-scanner';
import { ToastOriginal } from '@ionic-native/toast';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
  providers: [ICBService]

})
export class ScanPage {
  products: any;
  selectedProduct: any;
  productFound = false;

  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScannerOriginal,
              private toast: ToastOriginal,
              public dataService: DataServiceProvider, public platform: Platform) {

      this.dataService.getListDetails()
      .subscribe((response) => {
          this.products = response;
         // console.log(this.products);
      });

    }



    scan() {
      this.selectedProduct = {};

      if (this.platform.is('cordova')) {
      this.barcodeScanner.scan().then((barcodeData) => {
        this.selectedProduct = this.products.find(product => product.plu === barcodeData.text);
        if (this.selectedProduct !== undefined) {
          this.productFound = true;
        } else {
          this.productFound = false;
          this.toast.show(`Product not found`, '5000', 'center').subscribe(
            toast => {
              // console.log(toast);
            }
          );
        }
      }, (err) => {
        this.toast.show(err, '5000', 'center').subscribe(
          toast => {
            // console.log(toast);
          }
        );
      });
    } else {
      console.log('not impleted - browser click');
    }


    }

}
