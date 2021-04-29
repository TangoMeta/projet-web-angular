import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlatComponent } from './plat/plat.component';
import { PlatAddComponent } from './plat-add/plat-add.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CategorieComponent } from './categorie/categorie.component';
import { CategorieAddComponent } from './categorie-add/categorie-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatComponent,
    PlatAddComponent,
    CategorieComponent,
    CategorieAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
