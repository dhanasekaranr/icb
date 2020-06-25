
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Platform, LoadingController, ActionSheetController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray  } from '@angular/forms';
import { ICBService } from '../../shared/service';
import { Authentication } from '../../shared/authentication.service';
import { MasterDetailService } from '../../providers/data-service/masterDetailService';




@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],

})

export class SettingsPage implements OnInit {
  loader: any ;
  groups =  [] as any;
  public myForm: FormGroup;
  private studentCount = 1;
  editedItem =  [] as any;
  constructor(public navCtrl: NavController, private service: ICBService, public platform: Platform,
              public actionsheetCtrl: ActionSheetController, public authentication: Authentication,
              public loading: LoadingController, public toastCtrl: ToastController,
              private ms: MasterDetailService, private formBuilder: FormBuilder
            ) {
              this.myForm = formBuilder.group({
                student1: ['', Validators.required]
              });
              this.editedItem.push('1');
      }

      createSuccess = false;
      removeControl(control) {
        this.myForm.removeControl(control.key);
      }
      addControl() {
        this.studentCount++;
        this.myForm.addControl('student' + this.studentCount, new FormControl('', Validators.required));
      }
   ngOnInit() {
    this.service.getGroups().then(
      data => {
        console.log(data);
        this.groups = data;
       // this.loader.dismiss();
            }
        ).catch(err => {
          console.log(err);
      });
  }

  loginModal() {
    this.navCtrl.navigateForward('tabs/login');
  }





}
