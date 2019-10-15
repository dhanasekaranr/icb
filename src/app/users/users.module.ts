import { LayoutModule } from './../layout/layout.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersPage } from './users.page';
import { PipesModule } from 'src/shared/pipes.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: UsersPage }]), PipesModule, LayoutModule
  ],
  declarations: [UsersPage]
})
export class UsersPageModule {}
