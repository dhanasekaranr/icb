import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../shared/pipes.module';
import { LayoutModule } from './../layout/layout.module';
import { UsersPage } from './users.page';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: UsersPage }]), PipesModule, LayoutModule,
  ],
  declarations: [UsersPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class UsersPageModule {}
