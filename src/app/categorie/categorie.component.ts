import { Component, OnInit } from '@angular/core';
import {Categorie, RestService} from '../rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  categories: Categorie[] = [];

  constructor(public rest: RestService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.rest.getCategories().subscribe(
      (resp) => {
        console.log(resp);
        this.categories = resp;
      }
    );
  }

  addCategorie(): void {
    this.router.navigate(['/categorie-add']);
  }
}
