import { LayoutModule } from '../layout/layout.module';
import { RegistrationPage } from './registration.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/shared/pipes.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: RegistrationPage }]), PipesModule, LayoutModule, ReactiveFormsModule
  ],
  declarations: [RegistrationPage]
})
export class RegistrationPageModule {}
