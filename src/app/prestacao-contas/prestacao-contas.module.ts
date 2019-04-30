import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrestacaoContasPage } from './prestacao-contas.page';

const routes: Routes = [
  {
    path: '',
    component: PrestacaoContasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrestacaoContasPage]
})
export class PrestacaoContasPageModule {}
