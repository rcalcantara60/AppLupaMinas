import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProcessosJulgadosPage } from './processos-julgados.page';

const routes: Routes = [
  {
    path: '',
    component: ProcessosJulgadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProcessosJulgadosPage]
})
export class ProcessosJulgadosPageModule {}
