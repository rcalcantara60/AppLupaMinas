import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeTabsPage } from './home-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTabsPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', loadChildren: '../home/home.module#HomePageModule'},
      { path: 'prestacao-contas', loadChildren: '../prestacao-contas/prestacao-contas.module#PrestacaoContasPageModule' },
      { path: 'processos-julgados', loadChildren: '../processos-julgados/processos-julgados.module#ProcessosJulgadosPageModule' },
      { path: 'convenios', loadChildren: '../convenios/convenios.module#ConveniosPageModule' }
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
  declarations: [HomeTabsPage]
})
export class HomeTabsPageModule {}
