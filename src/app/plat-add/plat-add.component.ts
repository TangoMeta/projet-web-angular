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
    this.rest.getCategories().subscribe(
      (resp) => {
        console.log(resp);
        this.categories = resp;
      }
    );
  }

  addPlat(): void {
    console.log(this.plat);
    this.rest.addPlat(this.plat).subscribe(
      (result) => {
        this.router.navigate(['/plats-admin']);
      }
    );
  }
}
