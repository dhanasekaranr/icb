
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { ActionSheetController, LoadingController, NavController, Platform } from '@ionic/angular';
import { ToastService } from 'src/shared/toaster.service';
import { Authentication } from '../../shared/authentication.service';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.page.html',
  styleUrls: ['registration.page.scss'],

})

export class RegistrationPage implements OnInit {
  constructor(public navCtrl: NavController, public platform: Platform,
              public actionsheetCtrl: ActionSheetController, public authentication: Authentication,
              public loading: LoadingController, public toastCtrl: ToastService, public formBuilder: FormBuilder) {
      }
  public loader: any ;
  public registrationForm: FormGroup;
  public matching_passwords_group: FormGroup;
  public validationMessage: Array<any>;

      public createSuccess = false;
  validation_messages = {
    FirstName: [
      { type: 'required', message: 'Name is required.' },
    ],
    LastName: [
      { type: 'required', message: 'Last name is required.' },
    ],
    Email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' },
    ],
    Phone: [
      { type: 'required', message: 'Phone is required.' },
      { type: 'pattern', message: 'Please enter a valid phone.' },
    ],
    Password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, one number, one special character.' },
    ],
    ConfirmPassword: [
      { type: 'required', message: 'Confirm password is required.' },
    ],
    matching_passwords: [
      { type: 'areEqual', message: 'Password mismatch.' },
    ],
  };
   public ngOnInit() {
        this.registrationForm = this.formBuilder.group({
          FirstName: new FormControl('', Validators.required),
          LastName: new FormControl('', Validators.required),
          Phone: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          ])),
          Email: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
          ])),
          Password: new FormControl('', Validators.compose([
            Validators.minLength(8),
            Validators.required,
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
          ])),
          ConfirmPassword: new FormControl('', Validators.required)},
        (formGroup: FormGroup) => {
        return PasswordValidator.areEqual(formGroup);
      });
        // this.registrationForm.get('FirstName').setValue('Test');
        //  this.registrationForm.get('LastName').setValue('Test');
        // this.registrationForm.get('Email').setValue('Test@Test.com');
        // this.registrationForm.get('Password').setValue('Test101@');
        // this.registrationForm.get('ConfirmPassword').setValue('Test101@');
  }

  public loginModal() {
    this.navCtrl.navigateForward('tabs/login');
  }

  public async onSubmit() {
    this.validationMessage = Array<any>();
    this.loader = await this.loading.create({message: 'Registering...'});
    this.loader.present().then(() => {
      this.authentication.register(this.registrationForm.value).subscribe(async () => {
        this.toastCtrl.showToast('Registration successfully, check your inbox for approval email !');
        this.loader.dismiss();
    },
      async (error) => {
      if (error.error.ModelState) {
        this.validationMessage = error.error.ModelState[''];
      } else {
        this.validationMessage.push(error.statusText);
      }
      this.toastCtrl.showToastException('Registration Failed, try again latter !');
      this.loader.dismiss();
    },
    ); });

}

}
