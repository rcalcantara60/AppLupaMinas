import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EducacaoPage } from './educacao.page';
import { BottonMenuTabModule } from '../components/botton-menu-tab/botton-menu-tab.module';
import { BottonMenuTabComponent } from '../components/botton-menu-tab/botton-menu-tab.component';

const routes: Routes = [
  {
    path: '',
    component: EducacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EducacaoPage, BottonMenuTabComponent]
})
export class EducacaoPageModule {}
