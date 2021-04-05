import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDoacoesPage } from './lista-doacoes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDoacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDoacoesPageRoutingModule {}
