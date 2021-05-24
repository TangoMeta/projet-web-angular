import { Component, Input, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-categorie-add',
  templateUrl: './categorie-add.component.html',
  styleUrls: ['./categorie-add.component.scss']
})
export class CategorieAddComponent implements OnInit {

  @Input() categorie = {
    libelle: ''
  };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addCategorie(): void {
    console.log(this.categorie);
    this.rest.addCategory(this.categorie).subscribe(
      (result) => {
        this.router.navigate(['/plats-admin']);
      }
    );
  }

}
