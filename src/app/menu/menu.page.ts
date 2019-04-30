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
    {title: 'Home', url: 'home-tabs'},
    {title: '-> Educação', url: './home-tabs/home/educacao'},
    {title: '-> Saúde', url: './home-tabs/home/saude'},
    {title: '-> Obras', url: './home-tabs/home/obras'},
    {title: '-> Receitas e Despesas', url: './home-tabs/home/receita-despesa'},
    {title: 'Prestação de Contas', url: './home-tabs/prestacao-contas'},
    {title: 'Processos Julgados', url: './home-tabs/processos-julgados'},
    {title: 'Convênios', url: './home-tabs/convenios'},
    {title: 'Caminho do Dinheiro Público', url: '/menu/second'},
  ];
  selectedPath = '';
  constructor() {
  }
  ngOnInit() {
  }

}
