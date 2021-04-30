import { Component, OnInit } from '@angular/core';
import {Categorie, RestService} from '../rest.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categories: Categorie[] = [];

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  onSubmit(form: NgForm): void {
    this.rest.searchPlat(form.value.search).subscribe(
      (resp) => {
        console.log(resp);
        // TODO: enregistrer les plats retournés au bon endroit pour l'affichage
      }
    );
  }

  getCategories(): void {
    this.rest.getCategories().subscribe(
      (resp) => {
        console.log(resp);
        this.categories = resp;
      }
    );
  }

}
