import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  image = 'assets/img/logoHome.svg';
  imageRodape = 'assets/img/rodapeHome.svg';
  selectedEducacao: boolean;

  constructor(private routerCtrl: NavController) {
    this.selectedEducacao = false;
  }

  onClick() {
    this.selectedEducacao = true;
  }
}
