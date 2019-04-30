import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceitaDespesaPage } from './receita-despesa.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitaDespesaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReceitaDespesaPage]
})
export class ReceitaDespesaPageModule {}
