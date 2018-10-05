import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { ActionSheetController, LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { MasterDetailService } from '../../providers/data-service/masterDetailService';
import { Authentication } from '../../shared/authentication.service';
import { ICBService } from '../../shared/service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],

})

export class ProfilePage implements OnInit {
  constructor(public navCtrl: NavController, private service: ICBService, public platform: Platform,
              public actionsheetCtrl: ActionSheetController, public authentication: Authentication,
              public loading: LoadingController, public toastCtrl: ToastController, private ms: MasterDetailService,
              public formBuilder: FormBuilder) {
      }
  public loader: any ;
  public registrationForm: FormGroup;
  public matching_passwords_group: FormGroup;
  public validationMessage: Array<any>;
  public createSuccess = false;
  public val: any;
  public groups =  [] as any;
  public relationship: any;
  validation_messages = {
    FirstName: [
      { type: 'required', message: 'First Name is required.' },
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
    if ( this.authentication.getAccessToken() != null) {
      this.registrationForm = this.formBuilder.group({
            // FirstName: new FormControl('', Validators.required),
            // LastName: new FormControl('', Validators.required),
            Email: new FormControl({value: '', disabled: true}),
            Phone: new FormControl('', Validators.compose([
              Validators.required,
              Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
            ])),
            CommunicationPreference: new FormControl('', Validators.required),

        });
      this.service.getUser().then(
            (data) => {
              console.log(data);
              // this.registrationForm.get('FirstName').setValue(data.FirstName);
              // this.registrationForm.get('LastName').setValue(data.LastName);
              this.registrationForm.get('Email').setValue(data.Email);
              this.registrationForm.get('Phone').setValue(data.PhoneNumber);
              this.val = data.CommunicationPreference;
             // this.registrationForm.get('Preference').setValue(data.CommunicationPreference);
             // this.registrationForm.get('Password').setValue(data.PasswordHash);
             // this.registrationForm.get('ConfirmPassword').setValue(data.PasswordHash);
            }) ;

      this.service.getGroups().then(
              (data) => {
                console.log(data);
                this.groups = data;
                // this.editedItem.push('1');

               // this.loader.dismiss();
                    },
                ).catch((err) => {
                  console.log(err);
              });

      this.service.getRelationShips().then(
                (data) => {
                  console.log(data);
                  this.relationship = data;
                 // this.loader.dismiss();
                      },
                  ).catch((err) => {
                    console.log(err);
                });

    }
  }

  public loginModal() {
    this.navCtrl.navigateForward('tabs/login');
  }

  public async onSubmit(values) {
    this.validationMessage = Array<any>();
    this.loader = await this.loading.create({message: 'Registering...'});
    this.loader.present().then(() => {
      this.service.UpdateProfile(this.registrationForm.value).then(async (success) => {
        const toast = await this.toastCtrl.create({
          message: 'Profile Updated successfully !',
          duration: 2000,
          cssClass: 'toast-mess',
        });
        toast.present();
        this.loader.dismiss();
    },
      async (error) => {
      if (error.error.ModelState) {
        this.validationMessage = error.error.ModelState[''];
      } else {
        this.validationMessage.push(error.statusText);
      }
      this.loader.dismiss();
      const toast = await this.toastCtrl.create({
          message: 'Profile Updated Failed, try again latter !',
          duration: 2000,
          cssClass: 'toast-mess',
        });
      toast.present();
    },
    ); });

}

}
