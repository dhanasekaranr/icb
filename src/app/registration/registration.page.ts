
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Platform, LoadingController, ActionSheetController, AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators,ReactiveFormsModule, FormBuilder  } from '@angular/forms';
import { PasswordValidator } from './password.validator';
import { ICBService } from '../../shared/service';
import { Authentication } from '../../shared/authentication.service';
import { MasterDetailService } from '../../providers/data-service/masterDetailService';



@Component({
  selector: 'app-registration',
  templateUrl: 'registration.page.html',
  styleUrls: ['registration.page.scss'],

})

export class RegistrationPage implements OnInit {
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
          Email: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
          ])),
          Password: new FormControl('', Validators.compose([
            Validators.minLength(5),
            Validators.required,
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
          ])),
          ConfirmPassword: new FormControl('', Validators.required)}, 
        (formGroup: FormGroup) => {
        return PasswordValidator.areEqual(formGroup);
      })
      this.registrationForm.get('FirstName').setValue('Test');
      this.registrationForm.get('LastName').setValue('Test');
      this.registrationForm.get('Email').setValue('Test@Test.com');
      this.registrationForm.get('Password').setValue('Test101@');
      this.registrationForm.get('ConfirmPassword').setValue('Test101@');
  }
  validation_messages = {
    'FirstName': [
      { type: 'required', message: 'Name is required.' }
    ],
    'LastName': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'Email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'Password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    'ConfirmPassword': [
      { type: 'required', message: 'Confirm password is required.' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'Password mismatch.' }
    ]
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
          cssClass: "toast-mess",
        });
        toast.present();
    }
    )});

}
  
}
