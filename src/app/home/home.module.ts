import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
<<<<<<< HEAD
import { PopoverPage } from './popover';
import { NotificationPopoverPage } from './notificationPopover';
=======
>>>>>>> 67b127f... ICB 2.0

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
<<<<<<< HEAD
  declarations: [HomePage, PopoverPage, NotificationPopoverPage],
  entryComponents: [PopoverPage, NotificationPopoverPage],
=======
  declarations: [HomePage],
  entryComponents: [],
>>>>>>> 67b127f... ICB 2.0
})
export class HomePageModule {}
