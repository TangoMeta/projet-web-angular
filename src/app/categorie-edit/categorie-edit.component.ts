import { Component, OnInit } from '@angular/core';
import {Categorie, RestService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.component.html',
  styleUrls: ['./categorie-edit.component.scss']
})
export class CategorieEditComponent implements OnInit {

  categorie: Categorie;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getCategory(this.route.snapshot.params.id).subscribe(
      (data) => {
        console.log(data);
        this.categorie = data;
      }
    );
  }

  editCategorie(): void {
    this.rest.updateCategory(this.categorie).subscribe(
      (result) => {
        this.router.navigate(['/categories']);
      }
    );
  }
}
