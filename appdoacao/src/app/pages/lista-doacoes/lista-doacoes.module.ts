import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListaDoacoesPageRoutingModule } from './lista-doacoes-routing.module';
import { ListaDoacoesPage } from './lista-doacoes.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDoacoesPageRoutingModule
  ],
  declarations: [ListaDoacoesPage]
})
export class ListaDoacoesPageModule {}
