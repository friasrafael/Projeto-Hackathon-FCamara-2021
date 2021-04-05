import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoDoacaoPaisPageRoutingModule } from './info-doacao-pais-routing.module';

import { InfoDoacaoPaisPage } from './info-doacao-pais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoDoacaoPaisPageRoutingModule
  ],
  declarations: [InfoDoacaoPaisPage]
})
export class InfoDoacaoPaisPageModule {}
