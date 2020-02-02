import { HeaderPage } from 'src/app/layout/header';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Platform, LoadingController, ActionSheetController, AlertController } from '@ionic/angular';
import { ICBService } from 'src/shared/service';
import { Authentication } from 'src/shared/shared';
import { MasterDetailService } from 'src/providers/data-service/masterDetailService';
import { FormGroup, FormControl, Validators,ReactiveFormsModule, FormBuilder  } from '@angular/forms';
import { reduce } from 'rxjs/operators';
import { PasswordValidator } from '../registration/password.validator';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  providers: [ICBService, HeaderPage]
})

export class ProfilePage implements OnInit {
  loader: any ; 
  registrationForm: FormGroup;
  matching_passwords_group: FormGroup;
  validationMessage: Array<any>;
  constructor(public navCtrl: NavController, private service: ICBService, public platform: Platform,
              public actionsheetCtrl: ActionSheetController, public authentication: Authentication,
              public loading: LoadingController, public toastCtrl: ToastController, private ms: MasterDetailService,
              public formBuilder: FormBuilder) {
      }

      createSuccess = false;
   ngOnInit() {
        this.registrationForm = this.formBuilder.group({
          FirstName: new FormControl('', Validators.required),
          LastName: new FormControl('', Validators.required),
          Email: new FormControl({value:'Test@Test.com', disabled: true})
          })
      this.registrationForm.get('FirstName').setValue('Test');
      this.registrationForm.get('LastName').setValue('Test');

  }
  validation_messages = {
    'FirstName': [{ type: 'required', message: 'Name is required.' }],
    'LastName': [{ type: 'required', message: 'Last name is required.' }]
  };

  loginModal() {
    this.navCtrl.navigateForward('tabs/login');
  }
  
  async onSubmit(values){
    this.validationMessage = Array<any>();
    this.loader = await this.loading.create({message: 'Registering...'});
    this.loader.present().then(() => {
      this.authentication.register(this.registrationForm.value).subscribe(async success => {
        const toast = await this.toastCtrl.create({
          message: 'Registration successfully, check your inbox for approval email !',
          duration: 2000,
          showCloseButton: true,
          cssClass: "toast-mess",
        });
        toast.present();
        this.loader.dismiss();
    },
      async error => {
      if(error.error.ModelState){
        this.validationMessage = error.error.ModelState[""];
      }
      else{
        this.validationMessage.push(error.statusText);
      }
        this.loader.dismiss();
        const toast = await this.toastCtrl.create({
          message: 'Registration Failed, try again latter !',
          duration: 2000,
          showCloseButton: true,
          cssClass: "toast-mess",
        });
        toast.present();
    }
    )});

}
  
}
