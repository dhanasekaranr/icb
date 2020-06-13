import { HeaderPage } from 'src/app/layout/header';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Platform, LoadingController, ActionSheetController } from '@ionic/angular';
import { ICBService } from 'src/shared/service';
import { Authentication } from 'src/shared/shared';
import { MasterDetailService } from 'src/providers/data-service/masterDetailService';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray  } from '@angular/forms';


@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  providers: [ICBService, HeaderPage]
})

export class SettingsPage implements OnInit {
  loader: any ;
  groups= <any>[];
  public myForm: FormGroup;
  private studentCount: number = 1;
  editedItem = <any>[];
  constructor(public navCtrl: NavController, private service: ICBService, public platform: Platform,
              public actionsheetCtrl: ActionSheetController, public authentication: Authentication,
              public loading: LoadingController, public toastCtrl: ToastController, private ms: MasterDetailService, private formBuilder: FormBuilder
            ) {

              this.getRelationShips(formBuilder);

            //  this.myForm = formBuilder.group({
              //  student1: ['', Validators.required]
              //});
              //this.editedItem.push('1');
      }

      createSuccess = false;
      removeControl(control){
        this.myForm.removeControl(control.key);
      }
      addControl(){
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
 
      getRelationShips(fb: FormBuilder) {
        this.service.getRelationShips().then(
          data => {
            console.log(data);
            //this.groups = data;
            const formControls = data.map(control => new FormControl(false));
            this.myForm = fb.group({
              firstName: new FormArray(formControls)
            });
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
