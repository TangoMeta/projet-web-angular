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

  updatableCategorie: UpdatableCategorie;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.updatableCategorie = {id: null, libelle: null};
    this.rest.getCategory(this.route.snapshot.params.id).subscribe(
      (data) => {
        this.categorie = data;
      }
    );
  }

  editCategorie(): void {
    this.updatableCategorie.id = this.categorie.id;
    this.updatableCategorie.libelle = this.categorie.libelle;
    console.log(this.updatableCategorie);
    this.rest.updateCategory(this.updatableCategorie).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/plats-admin']);
      }
    );
  }
}
