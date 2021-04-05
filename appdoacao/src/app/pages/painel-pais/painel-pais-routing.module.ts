import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelPaisPage } from './painel-pais.page';

const routes: Routes = [
  {
    path: '',
    component: PainelPaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PainelPaisPageRoutingModule {}
