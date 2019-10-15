import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RentalPage } from './rental.page';
import { PipesModule } from 'src/shared/pipes.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: RentalPage }]), PipesModule, LayoutModule
  ],
  declarations: [RentalPage]
})
export class RentalPageModule {}
