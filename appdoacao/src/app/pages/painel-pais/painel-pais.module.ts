import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PainelPaisPageRoutingModule } from './painel-pais-routing.module';

import { PainelPaisPage } from './painel-pais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PainelPaisPageRoutingModule
  ],
  declarations: [PainelPaisPage]
})
export class PainelPaisPageModule {}
