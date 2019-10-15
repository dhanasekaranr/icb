import { LayoutModule } from '../layout/layout.module';
import { CataloguePage } from './catalogue.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/shared/pipes.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CataloguePage }]), PipesModule, LayoutModule
  ],
  declarations: [CataloguePage]
})
export class CataloguePageModule {}
