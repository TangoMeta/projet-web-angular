import {Component, Input, OnInit} from '@angular/core';
import {Categorie, RestService, UpdatableCategorie} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.component.html',
  styleUrls: ['./categorie-edit.component.scss']
})
export class CategorieEditComponent implements OnInit {

  categorie: Categorie;

  updatableCategorie: UpdatableCategorie; /* Type identique à Categorie, sans l'attribut "plats"
                                             qui aurait créé une référence circulaire */
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.updatableCategorie = {id: null, libelle: null};
    this.rest.getCategory(this.route.snapshot.params.id).subscribe(
      (data) => {
        this.categorie = data;  // Récupération de la catégorie à modifier, à l'initialisation de la page
      }
    );
  }

  editCategorie(): void {
    this.updatableCategorie.id = this.categorie.id;
    this.updatableCategorie.libelle = this.categorie.libelle;
    this.rest.updateCategory(this.updatableCategorie).subscribe(  // Appel de la fonction de l'API de mise à jour de la catégorie
      (result) => {
        console.log(result);
        this.router.navigate(['/plats-admin']);
      }
    );
  }
}
