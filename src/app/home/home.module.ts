import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { PopoverPage } from './popover';
import { NotificationPopoverPage } from './notificationPopover';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage, PopoverPage, NotificationPopoverPage],
  entryComponents: [PopoverPage, NotificationPopoverPage],
})
export class HomePageModule {}
