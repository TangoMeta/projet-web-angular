import {Component, Input, OnInit} from '@angular/core';
import {Categorie, RestService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-plat-add',
  templateUrl: './plat-add.component.html',
  styleUrls: ['./plat-add.component.scss']
})
export class PlatAddComponent implements OnInit {

  @Input() plat = {
    libelle: '',
    ingredients: '',
    categorie: {
      id: null,
    },
    allergene: '',
    regime: '',
    image: ''
  };

  categories: Categorie[] = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getCategories().subscribe(  // Récupération des catégories afin de les afficher
      (resp) => {                    // dans le champ de sélection de la catégorie du plat
        console.log(resp);
        this.categories = resp;
      }
    );
  }

  addPlat(): void {
    console.log(this.plat);
    this.rest.addPlat(this.plat).subscribe(  // Appel de l'API
      (result) => {
        console.log(result);
        this.router.navigate(['/plats-admin']); // Retour sur la page d'édition du menu
      }
    );
  }
}
