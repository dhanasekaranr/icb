import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../shared/pipes.module';
import { LayoutModule } from '../layout/layout.module';
import { ProfilePage } from './profile.page';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ProfilePage }]), PipesModule, LayoutModule, ReactiveFormsModule,
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
