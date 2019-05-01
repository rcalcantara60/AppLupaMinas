import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {title: 'Informações do Município', url: '/menu/first'},
    {title: 'Home', url: '/menu/home-tabs/home'},
    {title: '-> Educação', url: '/menu/home-tabs/home/educacao'},
    {title: '-> Saúde', url: '/menu/home-tabs/home/saude'},
    {title: '-> Obras', url: '/menu/home-tabs/home/obras'},
    {title: '-> Receitas e Despesas', url: '/menu/home-tabs/home/receita-despesa'},
    {title: 'Prestação de Contas', url: '/menu/home-tabs/prestacao-contas'},
    {title: 'Processos Julgados', url: '/menu/home-tabs/processos-julgados'},
    {title: 'Convênios', url: '/menu/home-tabs/convenios'},
    {title: 'Caminho do Dinheiro Público', url: '/menu/second'},
  ];
  selectedPath = '';
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }
  ngOnInit() {
  }

}
