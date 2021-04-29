import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlatComponent} from './plat/plat.component';
import {PlatAddComponent} from './plat-add/plat-add.component';
import {CategorieComponent} from './categorie/categorie.component';
import {CategorieAddComponent} from './categorie-add/categorie-add.component';

const routes: Routes = [
  {
    path: 'plats',
    component: PlatComponent
  },
  {
    path: 'plat-add',
    component: PlatAddComponent
  },
  {
    path: 'categories',
    component: CategorieComponent
  },
  {
    path: 'categorie-add',
    component: CategorieAddComponent
  },
  {
    path: '',
    redirectTo: '/plats',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }