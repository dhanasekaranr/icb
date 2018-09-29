import { HeaderPage } from './header';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [IonicModule,
    CommonModule,
    FormsModule],
  declarations: [HeaderPage],
  exports: [HeaderPage]
})
export class LayoutModule { }