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

public appPages = [
  {
    title: 'Home',
    url: '/home',
    icon: 'home'
  },
  {
    title: 'List',
    url: '/list',
    icon: 'list'
  }
];

constructor(private navCtrl: NavController) {
  
}

onClick() {
  this.navCtrl.navigateForward('inicio');
}

}
