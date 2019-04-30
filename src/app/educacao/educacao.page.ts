import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacao',
  templateUrl: './educacao.page.html',
  styleUrls: ['./educacao.page.scss'],
})
export class EducacaoPage implements OnInit {

  imageReceitaDespesa = 'assets/img/criancas_receita_despesa.svg';

  //Receita x Despesa na Educação
  onibus = 'assets/img/transporte_escolar.svg';
  escola = 'assets/img/setor_educacai_administracao.svg';

  //Aplicações no Setores da Educação
  merenda = 'assets/img/merenda_escolar.svg';
  ensinoInfantil = 'assets/img/ensino_infantil.svg';
  ensinoFundamental = 'assets/img/ensino_fundamental.svg';
  educacaoJovensAdultos = 'assets/img/educacao_jovens_adultos.svg';
  educacaoEspecial = 'assets/img/educacao_especial.svg';

  //Gastos com os Profisisonais do Magistério por Setores
  magisterioEnsinoInfantil = "assets/img/profissional_magistério_ensino_infantil.svg";
  magisterioEnsinoFundamental = "assets/img/profissional_magisterio_ensino_fundamental.svg";
  magisterioJovensAdultos = "assets/img/profissional_magisterio_jovens_adultos.svg";
  magisterioEducacaoEspecial = "assets/img/profissional_magisterio_educacao_especial.svg";

  //Comparativo de Número de alunos do ensino Infantil x Fundamental
  legendaMatriculados = "assets/img/legenda_alunos_matriculados.svg";

  //Índice de Desenvolvimento da Educação Básica no Município
  quartaQuintaSerie = "assets/img/quarta_quinta_serie.svg";
  oitavaNonaSerie = "assets/img/oitava_nona_serie.svg";

  constructor() { }

  ngOnInit() {
  }

}
