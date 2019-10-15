import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderPage } from './header';

@NgModule({
  imports: [IonicModule,
    CommonModule,
    FormsModule],
  declarations: [HeaderPage],
  exports: [HeaderPage]
})
export class HeaderModule { }