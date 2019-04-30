import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  image = 'assets/img/logoHome.svg';
  imageRodape = 'assets/img/rodapeHome.svg';
  constructor() { }

  ngOnInit() {
  }

}
