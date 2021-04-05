import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DoacaoPageRoutingModule } from './doacao-routing.module';
import { DoacaoPage } from './doacao.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    DoacaoPageRoutingModule
  ],
  declarations: [DoacaoPage]
})
export class DoacaoPageModule {}
