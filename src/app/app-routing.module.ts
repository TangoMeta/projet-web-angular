import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlatComponent} from './plat/plat.component';
import {PlatAddComponent} from './plat-add/plat-add.component';
import {CategorieComponent} from './categorie/categorie.component';
import {CategorieAddComponent} from './categorie-add/categorie-add.component';
import {PlatEditComponent} from './plat-edit/plat-edit.component';
import {CategorieEditComponent} from './categorie-edit/categorie-edit.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';

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
    path: 'plat-edit/:id',
    component: PlatEditComponent
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
    path: 'categorie-edit/:id',
    component: CategorieEditComponent
  },
  {
    path: '',
    redirectTo: '/plats',
    pathMatch: 'full'
  },
  {
    path: 'not-found',
    component: FourOhFourComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
