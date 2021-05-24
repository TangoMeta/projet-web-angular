import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlatComponent } from './plat/plat.component';
import { PlatAddComponent } from './plat-add/plat-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CategorieComponent } from './categorie/categorie.component';
import { CategorieAddComponent } from './categorie-add/categorie-add.component';
import { PlatEditComponent } from './plat-edit/plat-edit.component';
import { CategorieEditComponent } from './categorie-edit/categorie-edit.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HeaderComponent } from './header/header.component';
import {DataService} from './data.service';
import { PlatAdminComponent } from './plat-admin/plat-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatComponent,
    PlatAddComponent,
    CategorieComponent,
    CategorieAddComponent,
    PlatEditComponent,
    CategorieEditComponent,
    FourOhFourComponent,
    HeaderComponent,
    PlatAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
