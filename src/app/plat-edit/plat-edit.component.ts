import { Component, OnInit } from '@angular/core';
import {Categorie, Plat, RestService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-plat-edit',
  templateUrl: './plat-edit.component.html',
  styleUrls: ['./plat-edit.component.scss']
})
export class PlatEditComponent implements OnInit {

  plat: Plat;

  categories: Categorie[] = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {  // Récupération du plat à modifier
    this.rest.getPlat(this.route.snapshot.params.id).subscribe(
      (data) => {
        console.log(data);
        this.plat = data;
      }
    );
    this.rest.getCategories().subscribe(  // Récupération des catégories afin de les afficher
      (resp) => {                    // dans le champ de sélection de la catégorie du plat
        console.log(resp);
        this.categories = resp;
      }
    );
  }

  editPlat(): void {
    this.rest.updatePlat(this.plat).subscribe(  // Appel de l'API
      (result) => {
        console.log(result);
        this.router.navigate(['/plats-admin']); // Retour sur la page d'édition du menu
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
