import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistoryPage } from './history.page';
import { PipesModule } from 'src/shared/pipes.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HistoryPage }]), PipesModule, LayoutModule
  ],
  declarations: [HistoryPage]
})
export class HistoryPageModule {}
