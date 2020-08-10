import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../shared/pipes.module';
import { LayoutModule } from '../layout/layout.module';
import { CataloguePage } from './catalogue.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CataloguePage }]), PipesModule, LayoutModule,
  ],
  declarations: [CataloguePage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class CataloguePageModule {}
