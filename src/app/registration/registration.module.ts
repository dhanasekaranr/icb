import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../shared/pipes.module';
import { LayoutModule } from '../layout/layout.module';
import { RegistrationPage } from './registration.page';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: RegistrationPage }]), PipesModule, LayoutModule, ReactiveFormsModule,
  ],
  declarations: [RegistrationPage],
})
export class RegistrationPageModule {}
