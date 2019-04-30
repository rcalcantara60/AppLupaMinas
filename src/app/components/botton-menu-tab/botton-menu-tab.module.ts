import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottonMenuTabComponent } from './botton-menu-tab.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ BottonMenuTabComponent ],
  exports: [ BottonMenuTabComponent ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class BottonMenuTabModule { }
