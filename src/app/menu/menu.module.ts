import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      { path: 'home-tabs', loadChildren: '../home-tabs/home-tabs.module#HomeTabsPageModule' },
      { path: 'home-tabs/home', loadChildren: '../home/home.module#HomePageModule' },
      // { path: 'prestacao-contas', loadChildren: '../prestacao-contas/prestacao-contas.module#PrestacaoContasPageModule' },
      // { path: 'processos-julgados', loadChildren: '../processos-julgados/processos-julgados.module#ProcessosJulgadosPageModule' },
      // { path: 'convenios', loadChildren: '../convenios/convenios.module#ConveniosPageModule' }
    ]
  },
  { path: '', redirectTo: 'menu/convenios', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
