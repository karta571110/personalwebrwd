import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KfctestRoutingModule } from './kfctest-routing.module';
import { IonicModule } from '@ionic/angular';
import { KfctestComponent } from './kfctest.component';


@NgModule({
  declarations: [KfctestComponent],
  imports: [
    CommonModule,
    KfctestRoutingModule,
    IonicModule.forRoot()
  ]
})
export class KfctestModule { }
