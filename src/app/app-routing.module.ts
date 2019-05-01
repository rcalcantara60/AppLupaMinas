import { HomePage } from './home/home.page';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  // { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  // { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: '', loadChildren: './menu/menu.module#MenuPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
