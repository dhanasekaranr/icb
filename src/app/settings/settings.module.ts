import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../shared/pipes.module';
import { LayoutModule } from '../layout/layout.module';
import { SettingsPage } from './settings.page';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SettingsPage }]), PipesModule, LayoutModule, ReactiveFormsModule,
  ],
  declarations: [SettingsPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class SettingsPageModule {}
