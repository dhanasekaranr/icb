import { LayoutModule } from '../layout/layout.module';
import { ProfilePage } from './profile.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../../shared/pipes.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ProfilePage }]), PipesModule, LayoutModule, ReactiveFormsModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
