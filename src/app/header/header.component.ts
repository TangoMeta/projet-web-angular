import {Component, OnInit, ViewChild} from '@angular/core';
import {Categorie, Plat, RestService} from '../rest.service';
import {NgForm} from '@angular/forms';
import {PlatComponent} from '../plat/plat.component';
import {DataService} from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild(PlatComponent) platComponent;  /* HeaderComponent est parent de PlatComponent afin que
                                               les plats du menu et ceux renvoyés par la recherche n'interfèrent pas */
  categories: Categorie[] = [];
  plats: Plat[] = [];

  constructor(public rest: RestService, private data: DataService) { }

  ngOnInit(): void {
    this.getCategories(); // On récupère les catégories existantes
    this.data.currentPlats.subscribe(plats => this.plats = plats);
    /*  On récupère les plats existants par le biais du DataService. Cela permet que les plats à afficher sur le menu et ceux
        renvoyés lors de la recherche affectent la même variable currentPlats, liée à l'affichage des plats.
     */
  }

  onSubmit(form: NgForm): void {
    this.rest.searchPlat(form.value.search).subscribe(  // Lors de la validation du formulaire de recherche,
      (resp) => {                                  // la fonction associée du DataService est appelée, comme évoqué plus haut.
        console.log(resp);
        this.data.searchPlats(resp);
      }
    );
  }

  getCategories(): void {
    this.rest.getCategories().subscribe(  // Appel de la fonction de récupération des catégories dans l'API
      (resp) => {
        this.categories = resp;
      }
    );
  }

}
