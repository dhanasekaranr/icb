
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { ActionSheetController, LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { MasterDetailService } from '../../providers/data-service/masterDetailService';
import { Authentication } from '../../shared/authentication.service';
import { ICBService } from '../../shared/service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],

})

export class SettingsPage implements OnInit {
  public loader: any ;
  public groups =  [] as any;
  public myForm: FormGroup;
  private studentCount = 1;
  public compareWith: any ;
  public editedItem =  [] as any;
  public createSuccess = false;
  public relationship: any;
  public compareWithFn(o1, o2) {
    return o1 === o2;
  }
  constructor(public navCtrl: NavController, private service: ICBService, public platform: Platform,
              public actionsheetCtrl: ActionSheetController, public authentication: Authentication,
              public loading: LoadingController, public toastCtrl: ToastController,
              private ms: MasterDetailService, private formBuilder: FormBuilder,
            ) {
      this.myForm = formBuilder.group({
        student1: ['', Validators.required],
      });
      this.compareWith = this.compareWithFn;
}

  public removeControl(control) {
    this.myForm.removeControl(control.key);
  }
  public addControl() {
    this.studentCount++;
    this.myForm.addControl('student' + this.studentCount, new FormControl('', Validators.required));
  }

  public ngOnInit() {
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

  public loginModal() {
    this.navCtrl.navigateForward('tabs/login');
  }

}
