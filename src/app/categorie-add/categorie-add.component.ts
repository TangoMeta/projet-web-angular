import { Component, Input, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-categorie-add',
  templateUrl: './categorie-add.component.html',
  styleUrls: ['./categorie-add.component.scss']
})
export class CategorieAddComponent implements OnInit {
  // Déclaration de categorie en @Input pour permettre le data-binding
  @Input() categorie = {
    libelle: ''
  };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  // Fonction d'ajout d'une catégorie
  addCategorie(): void {
    this.rest.addCategory(this.categorie).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/plats-admin']);
      }
    );
  }

}
