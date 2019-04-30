import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: '', redirectTo: 'educacao', pathMatch: 'full'},
      { path: 'educacao', loadChildren: '../educacao/educacao.module#EducacaoPageModule'},
      { path: 'saude', loadChildren: '../saude/saude.module#SaudePageModule' },
      { path: 'obras', loadChildren: '../obras/obras.module#ObrasPageModule' },
      { path: 'receita-despesa', loadChildren: '../receita-despesa/receita-despesa.module#ReceitaDespesaPageModule' }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
