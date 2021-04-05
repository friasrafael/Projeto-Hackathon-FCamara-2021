import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoDoacaoPaisPage } from './info-doacao-pais.page';

const routes: Routes = [
  {
    path: '',
    component: InfoDoacaoPaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoDoacaoPaisPageRoutingModule {}
