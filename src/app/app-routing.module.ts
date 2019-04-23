import { HomePage } from './home/home.page';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'home', component: HomePage, children: [
    { path: '', redirectTo: 'educacao', pathMatch: 'full' },
    { path: 'educacao', loadChildren: './educacao/educacao.module#EducacaoPageModule' }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
