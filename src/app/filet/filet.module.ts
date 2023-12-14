import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiletPageRoutingModule } from './filet-routing.module';

import { FiletPage } from './filet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiletPageRoutingModule
  ],
  declarations: [FiletPage]
})
export class FiletPageModule {}
