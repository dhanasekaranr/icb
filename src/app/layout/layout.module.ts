import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from './header';

@NgModule({
  imports: [IonicModule,
    CommonModule,
    FormsModule],
  declarations: [HeaderPage],
  exports: [HeaderPage],
})
export class LayoutModule { }
